from typing import (
    Union,
)

from kafka import KafkaProducer

import uvicorn

from fastapi import (
    Depends,
    FastAPI,
    HTTPException,
    status,
)
from fastapi.security import (
    OAuth2PasswordBearer,
    OAuth2PasswordRequestForm,
)

from adapter.fake_users_db import fake_users_db
from domain.token import (
    Token,
    create_access_token,
    decode_access_token
)
from domain.user import (
    User,
    UserInDB,
    Username,
)

app = FastAPI(
    title="faster_authentication",
    description="Simple authentication service in FastAPI",
    version="0.0.1"
)


# def get_password_hash(password):
#     return pwd_context.hash(password)


def authenticate_user(
        username: str,
        password: str,
) -> User:
    user = get_user_in_db(username)

    if not user.verify_password(password):
        raise ValueError

    return user


def get_user_in_db(username: Union[Username, str], db=fake_users_db) -> UserInDB:
    if username in db:
        return UserInDB(**db[username])
    else:
        raise ValueError


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


async def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        token_data = decode_access_token(token)

        user = get_user_in_db(token_data.username)

    except Exception:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )

    return user


async def get_current_active_user(
        current_user: User = Depends(get_current_user)
) -> User:
    if current_user.disabled:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Inactive user"
        )

    return current_user


@app.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    try:
        user = authenticate_user(form_data.username, form_data.password)
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    return create_access_token(user.username)


@app.get("/users/me", response_model=User)
async def read_users_me(
        current_user: User = Depends(get_current_active_user)
):
    return current_user

class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


@app.post("/kafka")
async def kafka_test(message: str):
    producer = KafkaProducer(bootstrap_servers=["ubuntu-kafka:9092"])

    topic = "quickstart-events"

    producer.send(topic, message.encode(encoding="UTF-8"))

    print(f"\n{bcolors.OKGREEN}{topic}{bcolors.ENDC}"
          f"\n{bcolors.OKCYAN}{message}{bcolors.ENDC}\n")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)

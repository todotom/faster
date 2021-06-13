from datetime import timedelta, datetime

from typing import Optional

from domain.base_model import BaseModel

from domain.user import Username, User

from jwt import (
    encode,
    decode,
    PyJWTError,
)

SECRET_KEY = "25ffc8cf1e798d89eaadc61e9f37fd638986d0854db8d1660e81c065048ca185"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Optional[Username] = None


def create_access_token(
        username: Username,
        expires_delta: timedelta = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
) -> Token:
    to_encode = {
        "sub": username,
        "exp": datetime.utcnow() + expires_delta
    }

    return Token(
        access_token=encode(
            payload=to_encode,
            key=SECRET_KEY,
            algorithm=ALGORITHM
        ),
        token_type="bearer"
    )


def decode_access_token(token: str):
    return TokenData(
        username=decode(
            jwt=token,
            key=SECRET_KEY,
            algorithms=[ALGORITHM]
        ).get("sub")
    )




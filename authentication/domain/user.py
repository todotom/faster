from typing import Optional

from passlib.context import CryptContext

from domain.base_model import BaseModel


class Username(str):
    username: str

    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, value):
        if not isinstance(value, str):
            raise TypeError('string is required')

        if value is None:
            raise ValueError('invalid value')

        return value

    def __repr__(self):
        return f'Username({super().__repr__()})'


class User(BaseModel):
    username: Username
    email: Optional[str] = None
    full_name: Optional[str] = None
    disabled: Optional[bool] = None


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


class UserInDB(User):
    hashed_password: str

    def verify_password(self, plain_password):
        return pwd_context.verify(plain_password, self.hashed_password)

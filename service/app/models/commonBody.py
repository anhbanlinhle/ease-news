from pydantic import BaseModel

class PostBody(BaseModel):
    param: str
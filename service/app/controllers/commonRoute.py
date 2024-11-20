from fastapi import APIRouter
from models import commonBody
from utils import commonUtil

router = APIRouter()

@router.post("/test")
async def basic_search(body: commonBody.PostBody):
    return {"reply": await commonUtil.process(body.param)}


from fastapi import APIRouter
from models import commonBody, textRequest
from utils import commonUtil, summarizeText

router = APIRouter()


@router.post("/test")
async def basic_search(body: commonBody.PostBody):
    return {"reply": await commonUtil.process(body.param)}


@router.post("/summary")
async def summary(body: textRequest.TextRequest):
    return {"reply": await summarizeText.summarize_text(body.text)}

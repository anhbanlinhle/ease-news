from fastapi import APIRouter
from models import commonBody, textRequest
from utils import commonUtil, summarizeText, viToEnTranslator, textToImage
router = APIRouter()


@router.post("/test")
async def basic_search(body: commonBody.PostBody):
    return {"reply": await commonUtil.process(body.param)}


@router.post("/summary")
async def summary(body: textRequest.TextRequest):
    return {"reply": await summarizeText.summarize_text(body.text)}

@router.post("/generate-image")
async def generate_image(body: textRequest.TextRequest):
    enText = viToEnTranslator.translate_text(body.text)
    return {"reply": await textToImage.text_to_image(enText)}

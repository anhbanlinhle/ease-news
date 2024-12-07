import requests
import base64
import io
from PIL import Image
import json
from dotenv import load_dotenv
import os

load_dotenv()
API_URL = os.getenv("HUGGINGFACE_CLIENT")
headers = {"Authorization": os.getenv("HUGGINGFACE_API_KEY")}


def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content


async def text_to_image(text):
    try:
        image_bytes = query({
            "inputs": text,
        })
    except Exception as e:
        return None
    # Chuyển đổi image_bytes sang PIL Image
    image = Image.open(io.BytesIO(image_bytes))
    return await post_to_imgbb(image)


async def post_to_imgbb(image):
    buffer = io.BytesIO()
    image.save(buffer, format="PNG")
    buffer.seek(0)
    image_base64 = base64.b64encode(buffer.getvalue()).decode('utf-8')

    url = "https://api.imgbb.com/1/upload"
    payload = {
        "key": os.getenv("IMGBB_API_KEY"),
        "image": image_base64
    }
    res = requests.post(url, payload)
    return json.loads(res.text)["data"]["url"]

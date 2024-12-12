import urllib

import requests
import base64
import io
from PIL import Image
import json
from dotenv import load_dotenv
import os
import requests


async def text_to_image(text):
    prompt = urllib.parse.quote(text)
    width = 540
    height = 360
    seed = 42  # Each seed generates a new image variation
    model = 'turbo'  # Using 'flux' as default if model is not provided

    image_url = f"https://pollinations.ai/p/{prompt}?width={width}&height={height}&seed={seed}&model={model}&nologo=true"
    return image_url
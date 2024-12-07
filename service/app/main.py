import torch
import uvicorn
from fastapi import FastAPI
from controllers import commonRoute
from fastapi.middleware.cors import CORSMiddleware
from utils import viToEnTranslator, textToImage, summarizeText

app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(commonRoute.router)

if __name__ == "__main__":
    if torch.cuda.is_available():
        device = torch.device("cuda")

        print('There are %d GPU(s) available.' % torch.cuda.device_count())

        print('We will use the GPU:', torch.cuda.get_device_name(0))
    else:
        print('No GPU available, using the CPU instead.')
        device = torch.device("cpu")

    summarizeText.initialize_device(device)
    summarizeText.initialize_model()
    viToEnTranslator.initialize_translator()
    uvicorn.run(app, host="0.0.0.0", port=7979)

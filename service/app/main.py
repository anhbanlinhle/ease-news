import uvicorn
from fastapi import FastAPI
from controllers import commonRoute
from fastapi.middleware.cors import CORSMiddleware

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
    uvicorn.run(app, host="0.0.0.0", port=7979)
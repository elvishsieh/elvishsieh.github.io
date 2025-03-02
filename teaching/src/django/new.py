from fastapi import FastAPI

inst = FastAPI()

@inst.get("/")
async def root():
    return {"message": "Hello World"}
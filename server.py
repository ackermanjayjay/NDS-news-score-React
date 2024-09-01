from typing import Union

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
from calculation import query

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to limit access to specific origins if needed
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS","XMLHttpRequest"],  # Adjust the HTTP methods as needed
    allow_headers=["*"],  # Allow all headers, adjust according to your requirements
)




@app.get("/")
def read_root():
    return {"Hello": "World"}



@app.get("/search/{query_search}")
async def search_bar(query_search:str, q:str):
    return {"result":"success",
            "data":query(q)}
from fastapi import FastAPI
from pydantic import BaseModel
import requests

app = FastAPI()

class ChatRequest(BaseModel):
    message: str


# NORMAL AI
@app.post("/normal")
def normal_ai(req: ChatRequest):

    response = requests.post(
        "https://api.openai.com/v1/chat/completions",
        headers={
            "Authorization": "Bearer YOUR_API_KEY",
            "Content-Type": "application/json"
        },
        json={
            "model": "gpt-4o-mini",
            "messages": [{"role": "user", "content": req.message}]
        }
    )

    return response.json()


# FORGETTING AI
memory_store = []

@app.post("/forget")
def forgetting_ai(req: ChatRequest):

    # store memory
    memory_store.append(req.message)

    # forget old messages
    if len(memory_store) > 5:
        memory_store.pop(0)

    context = " ".join(memory_store)

    response = requests.post(
        "https://api.openai.com/v1/chat/completions",
        headers={
            "Authorization": "Bearer YOUR_API_KEY",
            "Content-Type": "application/json"
        },
        json={
            "model": "gpt-4o-mini",
            "messages": [
                {"role": "system", "content": "You forget older data gradually"},
                {"role": "user", "content": context}
            ]
        }
    )

    return response.json()
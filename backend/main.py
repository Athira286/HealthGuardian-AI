import os
from dotenv import load_dotenv
from google import genai
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from services.attendance_service import get_today_attendance
from services.attendance_service import (
    get_today_attendance,
    get_today_count
)

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Prompt(BaseModel):
    question: str

@app.get("/")
def home():
    return {"message": "HealthGuardian AI Backend Running"}

@app.post("/ask-ai")
def ask_ai(prompt: Prompt):

    question = prompt.question.lower()
    if "how many" in question or "count" in question:
        count = get_today_count()
        return {
            "answer": f"{count} health workers checked in today."
        }

    if "checked in" in question or "attendance" in question:

        workers = get_today_attendance()

        if len(workers) == 0:

            return {
                "answer": "No health workers have checked in today."
            }

        return {
            "answer": "Today's attendance:\n\n" + "\n".join(workers)
        }

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt.question,
    )

    return {
        "answer": response.text
    }
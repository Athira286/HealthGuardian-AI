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
from agents.supervisor_agent import handle as supervisor_agent
from services.dashboard_service import get_dashboard_stats
from services.dashboard_service import get_worker_locations

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

    agent_response = supervisor_agent(prompt.question)

    if agent_response:
        return {
            "answer": agent_response
        }

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt.question,
    )

    return {
        "answer": response.text
    }
@app.get("/dashboard")

def dashboard():

    return get_dashboard_stats()

@app.get("/worker-locations")
def worker_locations():
    return get_worker_locations()
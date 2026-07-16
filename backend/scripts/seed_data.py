import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import random
from datetime import date
from firebase_config import db

print("Removing previous attendance...")

attendance_docs = db.collection("attendance").stream()

for doc in attendance_docs:
    doc.reference.delete()

print("Generating today's attendance...")

villages = [
    "Mudichur",
    "Irumbuliyur",
    "Perungalathur",
    "Guduvanchery",
    "Urapakkam",
    "Mambakkam",
    "Kelambakkam",
    "Thaiyur",
    "Navalur",
    "Muttukadu",
    "Medavakkam",
    "Ottiyambakkam",
    "Pallikaranai",
    "Kovilambakkam",
    "Selaiyur",
    "Sembakkam",
    "Chromepet",
    "Pallavaram",
    "Tambaram East",
    "Tambaram West"
]

phcs = [
    "Tambaram PHC",
    "Guduvanchery PHC",
    "Kelambakkam PHC",
    "Medavakkam PHC",
    "Thiruporur PHC"
]

today = str(date.today())

for i in range(1, 100):

    worker = {
        "uid": f"worker{i}",
        "name": f"Health Worker {i}",
        "email": f"worker{i}@health.ai",
        "date": today,
        "village": random.choice(villages),
        "phc": random.choice(phcs),
        "latitude": round(random.uniform(12.82, 13.02), 6),
        "longitude": round(random.uniform(80.08, 80.26), 6),
    }

    db.collection("attendance").add(worker)

print("✅ Demo reset complete!")
print("99 workers created for today.")
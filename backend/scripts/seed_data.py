import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import random
from datetime import date, timedelta
from firebase_config import db

# -----------------------------
# Delete previous attendance
# -----------------------------

print("Removing previous attendance...")

attendance_docs = db.collection("attendance").stream()

for doc in attendance_docs:
    doc.reference.delete()

# -----------------------------
# Master Data
# -----------------------------

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

# Village -> PHC mapping

village_phc = {
    "Mudichur": "Tambaram PHC",
    "Irumbuliyur": "Tambaram PHC",
    "Perungalathur": "Tambaram PHC",
    "Tambaram East": "Tambaram PHC",
    "Tambaram West": "Tambaram PHC",
    "Chromepet": "Tambaram PHC",
    "Pallavaram": "Tambaram PHC",

    "Guduvanchery": "Guduvanchery PHC",
    "Urapakkam": "Guduvanchery PHC",

    "Kelambakkam": "Kelambakkam PHC",
    "Navalur": "Kelambakkam PHC",
    "Muttukadu": "Kelambakkam PHC",

    "Medavakkam": "Medavakkam PHC",
    "Ottiyambakkam": "Medavakkam PHC",
    "Pallikaranai": "Medavakkam PHC",
    "Kovilambakkam": "Medavakkam PHC",
    "Selaiyur": "Medavakkam PHC",
    "Sembakkam": "Medavakkam PHC",

    "Thaiyur": "Thiruporur PHC",
    "Mambakkam": "Thiruporur PHC"
}

# -----------------------------
# Generate 60 Days
# -----------------------------

print("Generating next 60 days of attendance...")

today = date.today()

# Do NOT seed your own Google account
reserved_uid = "YOUR_GOOGLE_UID"

worker_ids = list(range(1, 100))

for day in range(60):

    current_date = today + timedelta(days=day)
    current_date = str(current_date)

    weekday = (today + timedelta(days=day)).weekday()

    # Monday=0 ... Sunday=6

    if weekday <= 4:
        attendance = random.randint(82, 98)
    elif weekday == 5:
        attendance = random.randint(72, 88)
    else:
        attendance = random.randint(65, 82)

    todays_workers = random.sample(worker_ids, attendance)

    for i in todays_workers:

        village = random.choice(villages)

        worker = {

            "uid": f"worker{i}",
            "name": f"Health Worker {i}",
            "email": f"worker{i}@health.ai",

            "date": current_date,

            "village": village,
            "phc": village_phc[village],

            "latitude": round(random.uniform(12.82, 13.02), 6),
            "longitude": round(random.uniform(80.08, 80.26), 6),

        }

        db.collection("attendance").add(worker)

print("")

print("========================================")
print(" Demo data generated successfully!")
print("========================================")
print("")
print("Duration      : 60 Days")
print("Attendance    : Realistic (65-98/day)")
print("Weekdays      : Higher attendance")
print("Weekends      : Lower attendance")
print("Villages      : Randomized")
print("PHCs          : Auto-mapped")
print("Map Pins      : Generated")
print("Pie Charts    : Generated")
print("AI Briefings  : Will vary automatically")
print("Insights      : Will vary automatically")
print("")
print("Ready for demo! 🚀")
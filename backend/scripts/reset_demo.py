from firebase_config import db
from datetime import date
import random

today = str(date.today())

print("Removing old attendance...")

attendance_docs = db.collection("attendance").stream()

for doc in attendance_docs:
    doc.reference.delete()

print("Generating demo attendance...")

phcs = [
    "Tambaram PHC",
    "Chromepet PHC",
    "Guduvanchery PHC",
    "Kelambakkam PHC",
]

villages = [
    "Tambaram West",
    "Tambaram East",
    "Chromepet",
    "Pallavaram",
    "Selaiyur",
    "Perungalathur",
    "Guduvanchery",
    "Urapakkam",
    "Kelambakkam",
    "Navalur",
    "Sholinganallur",
    "Medavakkam",
    "Madipakkam",
    "Velachery",
    "Thoraipakkam",
    "Perumbakkam",
    "Siruseri",
    "Mambakkam",
    "Vandalur",
    "Mudichur",
]

for i in range(1, 101):

    phc = random.choice(phcs)
    village = random.choice(villages)

    latitude = random.uniform(12.80, 13.05)
    longitude = random.uniform(80.05, 80.25)

    db.collection("attendance").add({

        "uid": f"worker{i}",

        "name": f"Health Worker {i}",

        "email": f"worker{i}@demo.com",

        "date": today,

        "phc": phc,

        "village": village,

        "latitude": latitude,

        "longitude": longitude,

    })

print("Demo attendance created successfully!")
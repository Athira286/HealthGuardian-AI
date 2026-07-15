import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import random
from datetime import date
from firebase_config import db

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

for i in range(1, 101):

    worker = {
        "uid": f"worker{i}",
        "name": f"Health Worker {i}",
        "email": f"worker{i}@health.ai",
        "date": str(date.today()),
        "village": random.choice(villages),
        "phc": random.choice(phcs),
        "latitude": 12.9 + random.random() / 10,
        "longitude": 80.2 + random.random() / 10,
    }

    db.collection("attendance").add(worker)

print("100 demo workers added successfully!")
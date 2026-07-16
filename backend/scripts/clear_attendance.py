import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from firebase_config import db

docs = db.collection("attendance").stream()

count = 0

for doc in docs:
    doc.reference.delete()
    count += 1

print(f"Deleted {count} attendance records.")
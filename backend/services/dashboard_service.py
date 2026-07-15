from firebase_config import db
from datetime import date

def get_dashboard_stats():

    today = str(date.today())

    attendance_docs = db.collection("attendance") \
        .where("date", "==", today) \
        .stream()

    checked_in = []

    villages = set()

    for doc in attendance_docs:

        data = doc.to_dict()

        checked_in.append(data)

        if "village" in data:
            villages.add(data["village"])

    return {
        "checked_in": len(checked_in),
        "villages": len(villages)
    }
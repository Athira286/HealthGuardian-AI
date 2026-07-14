from firebase_config import db
from datetime import date

def get_today_attendance():

    today = str(date.today())

    docs = db.collection("attendance") \
             .where("date", "==", today) \
             .stream()

    workers = []

    for doc in docs:
        data = doc.to_dict()
        workers.append(data["name"])

    return workers
def get_today_count():
    workers = get_today_attendance()
    return len(workers)
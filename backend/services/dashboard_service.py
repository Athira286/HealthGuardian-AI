from firebase_config import db
from datetime import date
from collections import Counter


def get_dashboard_stats():

    today = str(date.today())

    attendance_docs = (
        db.collection("attendance")
        .where("date", "==", today)
        .stream()
    )

    checked_in = []
    villages = set()
    phcs = []

    for doc in attendance_docs:

        data = doc.to_dict()

        checked_in.append(data)

        if "village" in data:
            villages.add(data["village"])

        if "phc" in data:
            phcs.append(data["phc"])

    phc_counts = Counter(phcs)

    phc_distribution = []

    for phc, count in phc_counts.items():
        phc_distribution.append({
            "name": phc,
            "workers": count
        })

    alerts = []

    if phc_counts:

        lowest_phc = min(phc_counts, key=phc_counts.get)
        highest_phc = max(phc_counts, key=phc_counts.get)

        alerts.append(
            f"{lowest_phc} has the lowest attendance ({phc_counts[lowest_phc]} workers)."
        )

        alerts.append(
            f"{highest_phc} has the highest attendance ({phc_counts[highest_phc]} workers)."
        )

    insights = []

    if phc_counts:
        highest = max(phc_counts, key=phc_counts.get)

        insights.append(
            f"{highest} recorded the highest attendance today."
        )

    if len(villages) >= 15:
        insights.append(
            "Excellent village coverage achieved today."
        )
    else:
        insights.append(
            "Several villages still require field visits."
        )

    if len(checked_in) >= 90:
        insights.append(
            "Overall workforce participation is excellent."
        )
    else:
        insights.append(
            "Attendance is below target today."
        )

    return {
        "checked_in": len(checked_in),
        "villages": len(villages),
        "alerts": alerts,
        "insights": insights,
        "phc_distribution": phc_distribution
    }


def get_worker_locations():

    today = str(date.today())

    attendance_docs = (
        db.collection("attendance")
        .where("date", "==", today)
        .stream()
    )

    locations = []

    for doc in attendance_docs:

        data = doc.to_dict()

        locations.append({
            "name": data.get("name"),
            "village": data.get("village"),
            "phc": data.get("phc"),
            "latitude": data.get("latitude"),
            "longitude": data.get("longitude"),
        })

    return locations
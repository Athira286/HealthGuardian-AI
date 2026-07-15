from services.attendance_service import (
    get_today_attendance,
    get_today_count
)


def handle(question: str):

    question = question.lower()

    if "how many" in question or "count" in question:
        count = get_today_count()
        return f"{count} health workers checked in today."

    if "attendance" in question or "checked in" in question:

        workers = get_today_attendance()

        if len(workers) == 0:
            return "No health workers have checked in today."

        return "Today's attendance:\n\n" + "\n".join(workers)

    return None
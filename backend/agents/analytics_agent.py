from services.dashboard_service import get_dashboard_stats


def handle(question):

    question = question.lower()

    keywords = [
        "analytics",
        "statistics",
        "stats",
        "trend",
        "performance",
        "overview",
        "report",
    ]

    if not any(word in question for word in keywords):
        return None

    stats = get_dashboard_stats()

    checked = stats["checked_in"]

    if checked >= 90:
        performance = "Excellent"
    elif checked >= 70:
        performance = "Good"
    else:
        performance = "Needs Attention"

    return f"""
📊 Analytics Report

Workers Checked In: {checked}

Villages Covered: {stats["villages"]}

Overall Performance:
{performance}
"""
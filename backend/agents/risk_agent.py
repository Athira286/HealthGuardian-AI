from services.dashboard_service import get_dashboard_stats


def handle(question):

    question = question.lower()

    keywords = [
        "risk",
        "danger",
        "priority",
        "critical",
        "urgent",
        "understaffed",
    ]

    if not any(word in question for word in keywords):
        return None

    stats = get_dashboard_stats()

    risks = []

    if stats["checked_in"] < 80:
        risks.append("🚨 Overall attendance is critically low today.")

    if len(stats["alerts"]) > 0:
        risks.extend(stats["alerts"])

    if not risks:
        return "✅ No major operational risks detected today."

    return (
        "🚨 Health Risk Analysis\n\n"
        + "\n".join(f"• {risk}" for risk in risks)
        + "\n\nRecommendation: Deploy additional workers to low-attendance PHCs."
    )
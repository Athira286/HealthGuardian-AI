from agents.attendance_agent import handle as attendance_agent
from agents.analytics_agent import handle as analytics_agent
from agents.risk_agent import handle as risk_agent
from agents.briefing_agent import handle as briefing_agent


def handle(question):

    question = question.lower()

    # Full district report
    if any(word in question for word in [
        "overview",
        "complete",
        "full report",
        "district report",
        "everything"
    ]):

        sections = []

        attendance = attendance_agent("attendance")
        analytics = analytics_agent("analytics")
        risk = risk_agent("risk")

        if attendance:
            sections.append("## Attendance\n" + attendance)

        if analytics:
            sections.append("## Analytics\n" + analytics)

        if risk:
            sections.append("## Risk Assessment\n" + risk)

        return "\n\n".join(sections)

    response = briefing_agent(question)
    if response:
        return response

    response = risk_agent(question)
    if response:
        return response

    response = attendance_agent(question)
    if response:
        return response

    response = analytics_agent(question)
    if response:
        return response

    return None
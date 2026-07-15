from agents.attendance_agent import handle as attendance_agent
from agents.analytics_agent import handle as analytics_agent


def handle(question):

    response = attendance_agent(question)

    if response:
        return response

    response = analytics_agent(question)

    if response:
        return response

    return None
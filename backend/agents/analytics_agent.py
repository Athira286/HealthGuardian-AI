def handle(question: str):

    question = question.lower()

    if "summary" in question:
        return "Analytics module coming soon."

    return None
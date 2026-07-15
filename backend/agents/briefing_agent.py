from services.dashboard_service import get_dashboard_stats

def handle(question):

    question = question.lower()

    if "brief" not in question and "summary" not in question:
        return None

    stats = get_dashboard_stats()

    return f"""
Today's District Summary

• {stats['checked_in']} workers checked in.
• {stats['villages']} villages covered today.

Alerts:
{chr(10).join(stats['alerts'])}

Recommendation:
Monitor PHCs with low attendance and consider reallocating staff.
"""
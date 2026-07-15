from services.attendance_service import get_today_count, get_today_attendance
from services.dashboard_service import get_dashboard_stats


def get_morning_briefing():

    stats = get_dashboard_stats()

    checked = get_today_count()

    villages = stats["villages"]

    return f"""
🩺 District Morning Briefing

• Workers checked in: {checked}
• Villages covered: {villages}
• Overall status: Good

Recommendations:
• Monitor PHCs with low attendance.
• Continue tracking worker movement.
• Review uncovered villages before noon.
"""
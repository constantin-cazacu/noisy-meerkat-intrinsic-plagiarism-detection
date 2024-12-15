from dicionary import KEYWORDS

def analyze_consistency(response_text):
    # Initialize sentiment score
    score = 0

    # Calculate score based on keyword occurrences
    response_lower = response_text.lower()  # Case-insensitive matching
    for word, value in KEYWORDS.items():
        score += response_lower.count(word) * value

    # Define thresholds for verdict
    if score > 3:
        return "Not Suspicious", score
    elif score < -3:
        return "Suspicious", score
    else:
        return "Unclear", score

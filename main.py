from analyser import analyze_consistency
from ollama_client import analyze_with_ollama

chunk_window = 200
word_overlap = 50

def main():
    # Default prompt message
    default_message = f"""Please analyze this text and its stylometric features like average word length, \
    average sentence length, lexical diversity, frequency term 'that', frequency  of term 'of', frequency of term 'then', \
    passive/active voice counts, readability score. \
    The analysis should follow this procedure: \
    1. Use a sliding window approach and perform the stylometry analysis on the text chunks, chunk size will be {chunk_window} words
     with an overlap of {word_overlap} words\
    2. Normalize the values of the stylometry features and use cosine similarity to compute a score and map out for every chunk.\
    Tell me if there are multiple writing styles present or not, or an inconsistency across the writing style. Respond with yes/no."""

    # log_content = """It was in the morning when my eyes caught something upon the window-sill. There, upon the white painted wooden beam of oak \
    # of about one foot in width, there was placed an object. Curious, not having remembered placing any item upon the sill, I approached the window \
    # to take a closer look at this surprising discovery. It was a little ripe green apple of the dessert variety, looking freshly picked.
    # """

    # Read log content from a file
    # Hardcoded file path
    file_path = "test docs/suspicious-document00001.txt"

    try:
        with open(file_path, "r", encoding="utf-8") as file:
            log_content = file.read()
    except FileNotFoundError:
        print(f"Error: File not found at {file_path}. Please provide a valid path.")
        return
    except Exception as e:
        print(f"Error reading file: {e}")
        return

    # Combine log content with the prompt
    prompt = f"{log_content} \n\n {default_message}"

    try:
        # Analyze with Ollama
        response_text = analyze_with_ollama(prompt)
        # print("Ollama Analysis Result:")
        # print(response_text)

        # Analyze consistency of the response
        verdict = analyze_consistency(response_text)
        print(f"Verdict: {verdict}")

    except Exception as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    main()

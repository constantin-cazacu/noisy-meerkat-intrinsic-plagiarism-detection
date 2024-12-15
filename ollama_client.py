import requests
import json

def analyze_with_ollama(prompt, model="mistral"):
    payload = {
        "model": model,  # Ensure the model is available via Ollama
        "prompt": prompt,
    }

    try:
        # Send the request to the Ollama API
        response = requests.post(
            "http://localhost:11434/api/generate",  # Ollama's local endpoint
            headers={"Content-Type": "application/json"},
            data=json.dumps(payload),
            stream=True  # Enable streaming to read lines incrementally
        )

        if response.status_code == 200:
            full_response = ""
            for line in response.iter_lines():
                if line:
                    decoded_line = line.decode('utf-8')
                    json_response = json.loads(decoded_line)
                    full_response += json_response["response"]
                    if json_response.get("done"):
                        break
            return full_response
        else:
            raise Exception(f"Request failed with status code {response.status_code}: {response.text}")

    except Exception as e:
        raise Exception(f"Error communicating with Ollama: {e}")

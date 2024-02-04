from flask import Flask, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

app = Flask(__name__)
CORS(app)

client = OpenAI(
    api_key=os.getenv('OPENAI_API_KEY'),
)

facts_history = []

@app.route('/get-fun-fact', methods=['GET'])
def get_fun_fact():
    global facts_history
    try:
        history_prompt = " ".join(facts_history[-10:])
        prompt_text = f"{history_prompt} Dis-moi un nouveau fait sur l'agriculture verticale en une phrase claire et courte."

        response = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": prompt_text,
                }
            ],
            model="gpt-3.5-turbo",
        )
        fun_fact = response.choices[0].message.content.strip() if response.choices else "Aucun fait trouvé."

        facts_history.append(fun_fact)
        facts_history = facts_history[-20:]

        return jsonify({"fun_fact": fun_fact})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

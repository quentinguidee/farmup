# Python Server Setup for Fun Facts
This is a Python Flask server that provides fun facts about vertical farming using the OpenAI API.

## Setup Instructions
Follow these instructions to set up the server environment and run the server on your local machine.

### Step 1: Create a Virtual Environment
Navigate to the root directory of the project and create a virtual environment.

Run the following commands on Terminal:
`python -m venv venv`  # On Windows
`python3 -m venv venv` # On macOS or Linux

### Step 2: Activate the Virtual Environment
Run the following commands on Terminal:
`.\venv\Scripts\Activate`  # On Windows
`source venv/bin/activate` # On macOS or Linux

### Step 3: Environment Variables
`cd server`
Create a `.env` file
add your OpenAI API key: `OPENAI_API_KEY=your_openai_api_token`

### Step 4: Install Dependencies
`pip install -r requirements.txt`

### Step 5: Run the Server
`python fun-fact.py`   # On Windows
`python3 fun-fact.py`  # On macOS or Linux

The server should start up, and you'll be able to access the fun facts endpoint at `http://localhost:5000/get-fun-fact`
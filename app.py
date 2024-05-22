import os 
from dotenv import load_dotenv
from flask import Flask, request, render_template

load_dotenv()

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')


if __name__ == '__main__':
    app.run(debug=False, port=5001)
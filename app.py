import os 
import env 
from flask import Flask, request, render_template
from flask_mail import Mail, Message

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')


if __name__ == '__main__':
    app.run(debug=True, port=5001)
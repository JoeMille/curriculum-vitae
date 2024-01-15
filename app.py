import os
from flask import Flask, request, render_template
from flask_mail import Mail, Message

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send_email', methods=['POST'])
def send_email():
    name = request.form['name']
    company = request.form['company']
    email = request.form['email']
    message = request.form['message']

    msg = Message("New Message from Portfolio site",
                  sender="REPLACE_WITH_YOUR_EMAIL",
                  recipients=["REPLACE_WITH_YOUR_EMAIL"])
    msg.body = f"""
    From: {name} <{email}>
    Company: {company}

    {message}
    """

    mail.send(msg)


if __name__ == '__main__':
    app.run(debug=True, port=5001)
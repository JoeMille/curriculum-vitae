import os
from flask import Flask, request, render_template
from flask_mail import Mail, Message

app = Flask(__name__)

# Email configuration
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = "REPLACE_WITH_YOUR_EMAIL"
app.config['MAIL_PASSWORD'] = "REPLACE_WITH_YOUR_PASSWORD"

mail = Mail(app)

@app.route('/')
def index():
    return render_template('index.html')

# Email Config
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
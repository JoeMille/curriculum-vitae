import os 
from dotenv import load_dotenv
from flask import Flask, request, render_template
from flask_mail import Mail, Message

load_dotenv()

app = Flask(__name__)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'chefjoemiller1992@gmail.com'
app.config['MAIL_PASSWORD'] = 'your-password'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form.get('name')
    company = request.form.get('company')
    email = request.form.get('email')
    message_body = request.form.get('message')

    msg = Message(
        'New contact form submission',
        sender='chefjoemiller1992@gmail.com',
        recipients=['chefjoemiller1992@gmail.com']
    )
    msg.body = f'From: {name}\nCompany: {company}\nEmail: {email}\n\n{message_body}'
    mail.send(msg)

    return 'Form submitted'

if __name__ == '__main__':
    app.run(debug=True, port=5001)
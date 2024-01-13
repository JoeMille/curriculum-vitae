import os
from flask import Flask, request, render_template
from flask_mail import Mail, Message

app = Flask(__name__)

# Setting up Flask-Mail with a Gmail server
# Remember to always consider secure data handling within you env files
app.config['MAIL_SERVER']= 'smtp.gmail.com'
app.config['MAIL_PORT']= 465
app.config['MAIL_USERNAME']= 
app.config['MAIL_PASSWORD']=
app.config['MAIL_USE_TLS']= False

mail = Mail(app)

@app.route('/')
def index():
    return render_template('index.html')

# This route sends a message to the email address provided in the contact form
@app.route('/send-mail, methode=[POST]')
def send_email():
    name = request.form['name']
    company = request.form['company']
    email = request.form['email']
    message = request.form['message']

    msge = Message("New messsage from contact form at Portfolio",
                    sender="email",
                    recipients=['chefjoemiller@gmail.com'])
    msge.body = f"Name: {name}\nCompany: {company}\nEmail: {email}\n\n{message}"

    mail.send(msg)

    return 'Message sent!'

if __name__ == '__main__':
    app.run(debug=True)
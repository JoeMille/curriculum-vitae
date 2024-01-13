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


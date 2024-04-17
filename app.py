import os 
from dotenv import load_dotenv
from flask import Flask, request, render_template
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

load_dotenv()

app = Flask(__name__)

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

    print(f'Form data: {name}, {company}, {email}, {message_body}')

    message = Mail(
        from_email='chefjoemiller1992@gmail.com',
        to_emails='chefjoemiller1992@gmail.com',
        subject='New contact form submission',
        html_content=f'From: {name}<br>Company: {company}<br>Email: {email}<br><br>{message_body}'
    )
    try:
        sg = SendGridAPIClient(os.getenv('SENDGRID_API_KEY'))
        response = sg.send(message)
        print(f'SendGrid response: {response.status_code}, {response.body}')
        return 'Form submitted'
    except Exception as e:
        print(f'Error: {e}')
        return str(e)

if __name__ == '__main__':
    app.run(debug=True, port=5001)
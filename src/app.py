import os
from flask import Flask, request, jsonify, render_template
from flask_migrate import Migrate
from flask_cors import CORS
from dotenv import load_dotenv
from models import db

load_dotenv()

app = Flask(__name__)
app.url_map.slashes=False
app.config['DEBUG']= True
app.config['ENV']= 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']= False
app.config['SQLALCHEMY_DATABASE_URI']= os.getenv('DATABASE_URI')

db.init_app(app)
Migrate(app, db)
CORS(app)

@app.route('/')
def main():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
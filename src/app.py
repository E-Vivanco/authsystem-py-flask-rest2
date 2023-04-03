from flask import Flask, request, jsonify, render_template
import os
import cloudinary
from flask_migrate import Migrate
from flask_cors import CORS
from dotenv import load_dotenv
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from werkzeug.security import generate_password_hash,check_password_hash
from models import db,User
#from models.user import User
from routes.auth import bpAuth
from routes.users import bpUsers


load_dotenv()

cloudinary.config( 
  cloud_name = os.getenv('CLOUD_NAME'), 
  api_key = os.getenv('CLOUD_API_KEY'), 
  api_secret = os.getenv('CLOUD_SECRET_KEY'),
  secure = True
)

app = Flask(__name__)
app.url_map.slashes=False
app.config['DEBUG']= True
app.config['ENV']= 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']= False
app.config['SQLALCHEMY_DATABASE_URI']= os.getenv('DATABASE_URI')
app.config['JWT_SECRET_KEY']='SECRET_KEY'

db.init_app(app)
Migrate(app, db)
CORS(app)
jwt=JWTManager(app)

app.register_blueprint(bpAuth, url_prefix='/api')
app.register_blueprint(bpUsers, url_prefix='/api')

@app.route('/')
def main():
    return render_template('index.html')


#@app.route('/api/register', methods=['POST'])
#def register():
#    try:
#            name =request.json.get('name','')
#            lastname = request.json.get('lastname','')
#            email=request.json.get('email')
#            password=request.json.get('password')
#
#            user = User.query.filter_by(email=email).first()
#            if user :
#                return jsonify({"msg": "usuario ya se encuentra registrado"})
#
#            user = User() 
#            user.name= name
#            user.lastname= lastname
#            user.email= email
#            user.password = generate_password_hash(password)
#            user.save()
#
#            return jsonify({"msg": "User registrado"}), 200
#    except Exception as e:
#            print(e)
#            return jsonify({"msg":"Mal registro"})
#
#@app.route('/api/login', methods=['POST'])
#def login():
#    try:
#            email = request.json.get('email')
#            password = request.json.get('password')
#
#            user = User.query.filter_by(email = email).first()
#            if not user:
#                return jsonify({"msg":"El usuario o la pass no coinciden"}), 400
#            if not check_password_hash(user.password,password):
#                return jsonify({"msg":"El user o la pass no coinciden"}),400
#            access_token = create_access_token(identity= user.email)
#
#            data={
#                    "access_token": access_token,
#                    "user": user.serialize()
#                }
#            return jsonify(data)
#    except Exception as e:
#            print(e)
#            return jsonify({"msg":"Erroneo acceso de usuario"})
#
#@app.route('/api/user', methods=['GET'])
#@jwt_required()
#def user():
#    try:
#            users = User.query.all()
#            users = list(map(lambda user: user.serialize(),users))
#
#            return jsonify(users), 200
#    except Exception as e:
#            print(e) 
#            return jsonify({"msg":"No existen usuarios"})

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run()
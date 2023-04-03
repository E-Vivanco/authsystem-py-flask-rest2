import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token
from models import User

bpAuth = Blueprint('bpAuth', __name__)

@bpAuth.route('/login', methods=['POST'])
def login():
    try:
            email = request.json.get('email')
            password = request.json.get('password')

            if not email: return jsonify({ "status": "failed", "code": 400, "msg": "email is required"}), 400
            if not password: return jsonify({ "status": "failed", "code": 400, "msg": "Password is required"}), 400

            userFound = User.query.filter_by(email=email).first()
            if not userFound: return jsonify({ "status": "failed", "code": 401, "msg": "email/Password are incorrects"}), 401

            if not check_password_hash(userFound.password, password): return jsonify({ "status": "failed", "code": 401, "msg": "email/Password are incorrects"}), 401


            expires = datetime.timedelta(days=3)
            access_token = create_access_token(identity=userFound.email, expires_delta=expires)

            data = {
                "access_token": access_token,
                "user": userFound.serialize()
            }

            return jsonify(data), 200
    except Exception as e:
            print(e)
            return jsonify({"msg":"Falla el registro de login"}),400

@bpAuth.route('/register', methods=['POST'])
def register():
    try:
            email = request.json.get('email')
            password = request.json.get('password')

            if not email: return jsonify({ "status": "failed", "code": 400, "msg": "email is required"}), 400
            if not password: return jsonify({ "status": "failed", "code": 400, "msg": "Password is required"}), 400

            userFound = User.query.filter_by(email=email).first()
            if userFound: return jsonify({ "status": "failed", "code": 400, "msg": "email already exists"}), 400

            user = User()
            user.email = email
            user.password = generate_password_hash(password)
            user.save()

            if not user: return jsonify({ "status": "failed", "code": 400, "msg": "Error, please try later"}), 400

            expires = datetime.timedelta(days=3)
            access_token = create_access_token(identity=user.email, expires_delta=expires)

            data = {
                "access_token": access_token,
                "user": user.serialize()
            }

            return jsonify(data), 201
    except Exception as e:
            print(e)
            return jsonify({"msg":"Falla Registro"}),400
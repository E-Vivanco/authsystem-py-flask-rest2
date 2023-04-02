from flask import Blueprint,request,jsonify

api = Blueprint('api',__name__)

@api.route('/register',methods=['POST'])
def register():
    try:
            name =request.form['name']
            lastname =request.form['lastname']
            email=request.form['email']
            password=request.form['password']
            avatar.request.form['avatar']

            user = User.query.filter_by(email=email).first()
            if user :
                return jsonify({"msg": "usuario ya se encuentra registrado"})

            user = User() 
            user.name= name
            user.lastname= lastname
            user.email= email
            user.password = generate_password_hash(password)
            user.avatar = avatar
            user.save()

            return jsonify({"msg": "User registrado"}), 200
    except Exception as e:
            print(e)
            return jsonify({"msg":"Mal registro"}),400

   # print(request.form)
   # print(request.files)
   # return jsonify({"form":request.form ,"files": request.files['avatar'].filename})
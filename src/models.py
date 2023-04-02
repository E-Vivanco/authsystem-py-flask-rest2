from flask_sqlalchemy import SQLAlchemy
db= SQLAlchemy()

class User(db.Model):
    __tablename__='user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    lastname = db.Column(db.String(100))
    email = db.Column(db.String(100), nullable=False, unique=True)
    password =db.Column(db.String(100), nullable=False)
    avatar =db.Column(db.String, nullable=False)
    isActive = db.Column(db.Boolean(),default=True)


    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
            "lastname":self.lastname,
            "email": self.email,
            "password": self.password,
            "avatar":self.avatar,
            "isActive": self.isActive

        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()
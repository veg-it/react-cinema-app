from flask_app import db

class Actor(db.Model):
    __tablename__ = 'actors'

    id = db.Column(db.Integer, primary_key=True)
    surname = db.Column(db.String(100))
    name = db.Column(db.String(100))
    middle_name = db.Column(db.String(100))
    birth_year = db.Column(db.Integer)
    bio = db.Column(db.Text)
    img_base64 = db.Column(db.Text)

    def serialize(self):
        return {
            'id': self.id,
            'surname': self.surname,
            'name': self.name,
            'middle_name': self.middle_name,
            'birth_year': self.birth_year,
            'bio': self.bio,
            'img_base64': self.img_base64,
        }

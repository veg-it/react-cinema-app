from flask_app import db

class Cinema(db.Model):
    __tablename__ = 'cinemas'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    city = db.Column(db.String(50))
    address = db.Column(db.String(200))

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'city': self.city,
            'address': self.address,
        }

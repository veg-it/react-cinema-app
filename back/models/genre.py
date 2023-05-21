from flask_app import db

class Genre(db.Model):
    __tablename__ = 'genres'

    id = db.Column(db.Integer, primary_key=True)
    genre_name = db.Column(db.String(100))

    def serialize(self):
        return {
            'id': self.id,
            'genre_name': self.genre_name,
        }

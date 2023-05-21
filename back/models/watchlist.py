from flask_app import db

class Watchlist(db.Model):
    __tablename__ = 'watchlists'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    movie_ids = db.Column(db.String(200)) # Массив с Id фильмов
    login = db.Column(db.String(50))
    password = db.Column(db.String(100))

    def serialize(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'movie_ids': self.movie_ids,
            'login': self.login,
            'password': self.password,
        }

from flask_app import db

class Event(db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    movie_id = db.Column(db.Integer, db.ForeignKey('movies.id'))
    cinema_id = db.Column(db.Integer, db.ForeignKey('cinemas.id'))
    time = db.Column(db.Time)
    ticket_price = db.Column(db.Float)
    date = db.Column(db.Date)

    def serialize(self):
        return {
            'id': self.id,
            'movie_id': self.movie_id,
            'cinema_id': self.cinema_id,
            'time': self.time.isoformat(),
            'ticket_price': self.ticket_price,
            'date': self.date.isoformat(),
        }

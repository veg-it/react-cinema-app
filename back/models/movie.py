from flask_app import db

class Movie(db.Model):
    __tablename__ = 'movies'

    id = db.Column(db.Integer, primary_key=True)
    for_adults = db.Column(db.Boolean)
    img = db.Column(db.String(200))
    video_url = db.Column(db.String(200))
    actor_ids = db.Column(db.String(200)) # Список id актеров
    title = db.Column(db.String(100))
    overview = db.Column(db.Text)
    rating = db.Column(db.Integer)

    def serialize(self):
        return {
            'id': self.id,
            'for_adults': self.for_adults,
            'img': self.img,
            'video_url': self.video_url,
            'actor_ids': self.actor_ids,
            'title': self.title,
            'overview': self.overview,
            'rating': self.rating,
        }

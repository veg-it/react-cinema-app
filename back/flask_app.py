from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from sqlalchemy.dialects.postgresql import ARRAY

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
app.config['SECRET_KEY'] = 'mysecretkey'

db = SQLAlchemy(app)

class Event(db.Model):
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
            'time': self.time.strftime('%H:%M'),
            'ticket_price': self.ticket_price,
            'date': self.date.strftime('%Y-%m-%d')
        }

class Cinema(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    city = db.Column(db.String(100))
    address = db.Column(db.String(200))
    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'city': self.city,
            'address': self.address
        }

class Actor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    lastname = db.Column(db.String(100))
    firstname = db.Column(db.String(100))
    middlename = db.Column(db.String(100))
    birthyear = db.Column(db.Integer)
    bio = db.Column(db.Text)
    img = db.Column(db.Text)
    def serialize(self):
        return {
            'id': self.id,
            'lastname': self.lastname,
            'firstname': self.firstname,
            'middlename': self.middlename,
            'birthyear': self.birthyear,
            'bio': self.bio,
            'img': self.img
        }

class Genre(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    def serialize(self):
        return {
            'id': self.id,
            'name': self.name
        }

class Movie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    adult = db.Column(db.Boolean)
    img = db.Column(db.Text)
    video_url = db.Column(db.Text)
    actors = db.Column(ARRAY(db.Integer))
    title = db.Column(db.String(100))
    overview = db.Column(db.Text)
    rating = db.Column(db.Float)
    def serialize(self):
        return {
            'id': self.id,
            'adult': self.adult,
            'img': self.img,
            'video_url': self.video_url,
            'actors': self.actors,
            'title': self.title,
            'overview': self.overview,
            'rating': self.rating
        }

class Watchlist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    movie_ids = db.Column(ARRAY(db.Integer))
    login = db.Column(db.String(100))
    password = db.Column(db.String(100))
    def serialize(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'movie_ids': self.movie_ids,
            'login': self.login,
            'password': self.password
        }

admin = Admin(app, name='myapp', template_mode='bootstrap3')
admin.add_view(ModelView(Event, db.session))
admin.add_view(ModelView(Cinema, db.session))
admin.add_view(ModelView(Actor, db.session))
admin.add_view(ModelView(Genre, db.session))
admin.add_view(ModelView(Movie, db.session))
admin.add_view(ModelView(Watchlist, db.session))

@app.route('/api/events', methods=['GET'])
def get_events():
    events = Event.query.all()
    return jsonify([e.serialize() for e in events])

@app.route('/api/cinemas', methods=['GET'])
def get_cinemas():
    cinemas = Cinema.query.all()
    return jsonify([c.serialize() for c in cinemas])

@app.route('/api/actors', methods=['GET'])
def get_actors():
    actors = Actor.query.all()
    return jsonify([a.serialize() for a in actors])

@app.route('/api/genres', methods=['GET'])
def get_genres():
    genres = Genre.query.all()
    return jsonify([g.serialize() for g in genres])

@app.route('/api/movies', methods=['GET'])
def get_movies():
    movies = Movie.query.all()
    return jsonify([m.serialize() for m in movies])

@app.route('/api/watchlists', methods=['GET'])
def get_watchlists():
    watchlists = Watchlist.query.all()
    return jsonify([w.serialize() for w in watchlists])

from flask import request

# добавить плейлист
@app.route('/api/watchlists', methods=['POST'])
def add_watchlist():
    data = request.get_json()
    watchlist = Watchlist(user_id=data['user_id'], movie_ids=data['movie_ids'], login=data['login'], password=data['password'])
    db.session.add(watchlist)
    db.session.commit()
    return jsonify(watchlist.serialize())

# авторизация в плейлисте (простая, без проверки пароля)
@app.route('/api/watchlists/<int:id>', methods=['GET'])
def get_watchlist(id):
    watchlist = Watchlist.query.get(id)
    return jsonify(watchlist.serialize())

# поиск фильма по актеру
@app.route('/api/movies/actor/<int:actor_id>', methods=['GET'])
def get_movies_by_actor(actor_id):
    movies = Movie.query.filter(Movie.actors.contains(actor_id)).all()
    return jsonify([m.serialize() for m in movies])

# поиск фильма по жанру
# в предположении, что у вас есть таблица связей между фильмами и жанрами
@app.route('/api/movies/genre/<int:genre_id>', methods=['GET'])
def get_movies_by_genre(genre_id):
    movies = Movie.query.join(MovieGenre).filter(MovieGenre.genre_id == genre_id).all()
    return jsonify([m.serialize() for m in movies])

# поиск фильма по названию
@app.route('/api/movies/title/<string:title>', methods=['GET'])
def get_movies_by_title(title):
    movies = Movie.query.filter(Movie.title.contains(title)).all()
    return jsonify([m.serialize() for m in movies])

# добавления ид фильма в плейлист
@app.route('/api/watchlists/<int:id>/movies', methods=['POST'])
def add_movie_to_watchlist(id):
    data = request.get_json()
    watchlist = Watchlist.query.get(id)
    watchlist.movie_ids.append(data['movie_id'])
    db.session.commit()
    return jsonify(watchlist.serialize())

# удаление ид фильма из плейлиста
@app.route('/api/watchlists/<int:id>/movies', methods=['DELETE'])
def remove_movie_from_watchlist(id):
    data = request.get_json()
    watchlist = Watchlist.query.get(id)
    watchlist.movie_ids.remove(data['movie_id'])
    db.session.commit()
    return jsonify(watchlist.serialize())



if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)

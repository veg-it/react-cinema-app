from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from sqlalchemy.dialects.postgresql import ARRAY
from flask_cors import CORS
import json
from flask import request

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SECRET_KEY'] = 'mysecretkey'

CORS(app, resources={r"/*": {"origins": "*"}})

db = SQLAlchemy(app)

actors_movies = db.Table('actors_movies',
    db.Column('movie_id', db.Integer, db.ForeignKey('movie.id')),
    db.Column('actor_id', db.Integer, db.ForeignKey('actor.id'))
)

class Event(db.Model):
    __tablename__ = 'event'
    id = db.Column(db.Integer, primary_key=True)
    movie_id = db.Column(db.Integer, db.ForeignKey('movie.id'))
    cinema_id = db.Column(db.Integer, db.ForeignKey('cinema.id'))
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
    __tablename__ = 'cinema'
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
    __tablename__ = 'actor'
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
    __tablename__ = 'genre'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    def serialize(self):
        return {
            'id': self.id,
            'name': self.name
        }

class Movie(db.Model):
    __tablename__ = 'movie'
    id = db.Column(db.Integer, primary_key=True)
    adult = db.Column(db.Boolean)
    img = db.Column(db.Text)
    video_url = db.Column(db.Text)
    actors = db.relationship('Actor', secondary=actors_movies, backref=db.backref('movies', lazy='dynamic'))
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

watchlist_movies = db.Table('watchlist_movies',
    db.Column('watchlist_id', db.Integer, db.ForeignKey('watchlist.id')),
    db.Column('movie_id', db.Integer, db.ForeignKey('movie.id'))
)

class Watchlist(db.Model):
    __tablename__ = 'watchlist'
    id = db.Column(db.Integer, primary_key=True)
    movie_ids = db.Column(db.String(100))
    list_name = db.Column(db.String(100))
    login = db.Column(db.String(100))
    password = db.Column(db.String(100))
    def serialize(self):
        return {
            'id': self.id,
            'list_name': self.list_name,  # включить название списка в сериализацию
            'movie_ids': self.movie_ids,  # получить id всех фильмов в списке
            'login': self.login,
            'password': self.password
        }


# Create tables
with app.app_context():
    db.create_all()

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

# добавить плейлист
@app.route('/api/watchlists', methods=['POST'])
def add_watchlist():
    data = request.get_json()
    watchlist = Watchlist(list_name=data['list_name'], movie_ids=data.get('movie_ids', '[]'), login=data['login'], password=data['password'])
    db.session.add(watchlist)
    db.session.commit()
    return jsonify(watchlist.serialize())


@app.route('/api/auth', methods=['POST'])
def authenticate():
    data = request.get_json()
    login = data['login']
    password = data['password']
    watchlist = Watchlist.query.filter_by(login=login).first()
    if watchlist and watchlist.password == password:
        return jsonify(watchlist.serialize())
    else:
        return jsonify({'error': 'Invalid login or password'}), 401

# поиск фильма по актеру
@app.route('/api/movies/actor/<int:actor_id>', methods=['GET'])
def get_movies_by_actor(actor_id):
    movies = Movie.query.filter(Movie.actors.contains(actor_id)).all()
    return jsonify([m.serialize() for m in movies])

# поиск фильма по названию
@app.route('/api/movies/title/<string:title>', methods=['GET'])
def get_movies_by_title(title):
    movies = Movie.query.filter(Movie.title.contains(title)).all()
    return jsonify([m.serialize() for m in movies])

# добавление ид фильма в плейлист
@app.route('/api/watchlists/<int:id>/movies', methods=['POST'])
def add_movie_to_watchlist(id):
    data = request.get_json()
    watchlist = Watchlist.query.get(id)
    movie_ids = json.loads(watchlist.movie_ids)
    movie_ids.append(data['movie_id'])
    watchlist.movie_ids = json.dumps(movie_ids)
    db.session.commit()
    return jsonify(watchlist.serialize())

# удаление ид фильма из плейлиста
@app.route('/api/watchlists/<int:id>/movies', methods=['DELETE'])
def remove_movie_from_watchlist(id):
    data = request.get_json()
    watchlist = Watchlist.query.get(id)
    movie_ids = json.loads(watchlist.movie_ids)
    movie_ids.remove(data['movie_id'])
    watchlist.movie_ids = json.dumps(movie_ids)
    db.session.commit()
    return jsonify(watchlist.serialize())

@app.route('/api/watchlists/<int:id>', methods=['GET'])
def get_watchlist_by_id(id):
    watchlist = Watchlist.query.get(id)
    if watchlist:
        return jsonify(watchlist.serialize())
    else:
        return jsonify({'error': 'Watchlist not found'}), 404



if __name__ == '__main__':
    app.run(debug=True)

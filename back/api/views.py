from flask import jsonify
from flask_app import app
from models import Event, Cinema, Actor, Genre, Movie, Watchlist

@app.route('/api/events', methods=['GET'])
def get_events():
    events = Event.query.all()
    return jsonify([e.serialize() for e in events])
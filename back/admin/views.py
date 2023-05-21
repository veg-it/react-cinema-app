from .models import CustomModelView
from models import Event, Cinema, Actor, Genre, Movie, Watchlist
from flask_admin.contrib.sqla import ModelView
from flask_app import db

event_view = ModelView(Event, db.session)
# ...

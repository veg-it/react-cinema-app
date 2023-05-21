export const apiList = [
    {
        "name": "/api/events",
        "method": "GET",
        "description": "Get all events.",
        "response": [
            {"name": "id", "type": "int", "description": "The ID of the event."},
            {"name": "movie_id", "type": "int", "description": "The ID of the movie."},
            {"name": "cinema_id", "type": "int", "description": "The ID of the cinema."},
            {"name": "time", "type": "Time", "description": "Time of the event."},
            {"name": "ticket_price", "type": "float", "description": "Price of the ticket."},
            {"name": "date", "type": "Date", "description": "Date of the event."}
        ]
    },
    {
        "name": "/api/cinemas",
        "method": "GET",
        "description": "Get all cinemas.",
        "response": [
            {"name": "id", "type": "int", "description": "The ID of the cinema."},
            {"name": "name", "type": "string", "description": "The name of the cinema."},
            {"name": "city", "type": "string", "description": "The city of the cinema."},
            {"name": "address", "type": "string", "description": "The address of the cinema."}
        ]
    },
    {
        "name": "/api/actors",
        "method": "GET",
        "description": "Get all actors.",
        "response": [
            {"name": "id", "type": "int", "description": "The ID of the actor."},
            {"name": "lastname", "type": "string", "description": "The last name of the actor."},
            {"name": "firstname", "type": "string", "description": "The first name of the actor."},
            {"name": "middlename", "type": "string", "description": "The middle name of the actor."},
            {"name": "birthyear", "type": "int", "description": "The birth year of the actor."},
            {"name": "bio", "type": "text", "description": "The biography of the actor."},
            {"name": "img", "type": "text", "description": "The image of the actor."}
        ]
    },
    {
        "name": "/api/genres",
        "method": "GET",
        "description": "Get all genres.",
        "response": [
            {"name": "id", "type": "int", "description": "The ID of the genre."},
            {"name": "name", "type": "string", "description": "The name of the genre."}
        ]
    },
    {
        "name": "/api/movies",
        "method": "GET",
        "description": "Get all movies.",
        "response": [
            {"name": "id", "type": "int", "description": "The ID of the movie."},
            {"name": "adult", "type": "boolean", "description": "Whether the movie is for adults."},
            {"name": "img", "type": "text", "description": "The image of the movie."},
            {"name": "video_url", "type": "text", "description": "The video URL of the movie."},
            {"name": "actors", "type": "array", "description": "The list of actor IDs in the movie."},
            {"name": "title", "type": "string", "description": "The title of the movie."},
            {"name": "overview", "type": "text", "description": "The overview of the movie."},
            {"name": "rating", "type": "int", "description": "The rating of the movie (0-10)."}
        ]
    },
    {
        "name": "/api/watchlists",
        "method": "GET",
        "description": "Get all watchlists.",
        "response": [
            {"name": "id", "type": "int", "description": "The ID of the watchlist."},
            {"name": "user_id", "type": "int", "description": "The ID of the user."},
            {"name": "movie_ids", "type": "array", "description": "The list of movie IDs in the watchlist."},
            {"name": "login", "type": "string", "description": "The login of the user."},
            {"name": "password", "type": "string", "description": "The password of the user."}
        ]
    },
    {
        "name": "/api/watchlists",
        "method": "POST",
        "description": "Add a watchlist.",
        "response": [
            {"name": "id", "type": "int", "description": "The ID of the watchlist."},
            {"name": "user_id", "type": "int", "description": "The ID of the user."},
            {"name": "movie_ids", "type": "array", "description": "The list of movie IDs in the watchlist."},
            {"name": "login", "type": "string", "description": "The login of the user."},
            {"name": "password", "type": "string", "description": "The password of the user."}
        ]
    },
    {
        "name": "/api/watchlists/<int:id>",
        "method": "GET",
        "description": "Get a watchlist.",
        "response": [
            {"name": "id", "type": "int", "description": "The ID of the watchlist."},
            {"name": "user_id", "type": "int", "description": "The ID of the user."},
            {"name": "movie_ids", "type": "array", "description": "The list of movie IDs in the watchlist."},
            {"name": "login", "type": "string", "description": "The login of the user."},
            {"name": "password", "type": "string", "description": "The password of the user."}
        ]
    },
    {
        "name": "/api/movies/actor/<int:actor_id>",
        "method": "GET",
        "description": "Get movies by actor.",
        "response": [
            {"name": "id", "type": "int", "description": "The ID of the movie."},
            {"name": "adult", "type": "boolean", "description": "Whether the movie is for adults."},
            {"name": "img", "type": "text", "description": "The image of the movie."},
            {"name": "video_url", "type": "text", "description": "The video URL of the movie."},
            {"name": "actors", "type": "array", "description": "The list of actor IDs in the movie."},
            {"name": "title", "type": "string", "description": "The title of the movie."},
            {"name": "overview", "type": "text", "description": "The overview of the movie."},
            {"name": "rating", "type": "int", "description": "The rating of the movie (0-10)."}
        ]
    },
    {
        "name": "/api/movies/genre/<int:genre_id>",
        "method": "GET",
        "description": "Get movies by genre.",
        "response": [
            {"name": "id", "type": "int", "description": "The ID of the movie."},
            {"name": "adult", "type": "boolean", "description": "Whether the movie is for adults."},
            {"name": "img", "type": "text", "description": "The image of the movie."},
            {"name": "video_url", "type": "text", "description": "The video URL of the movie."},
            {"name": "actors", "type": "array", "description": "The list of actor IDs in the movie."},
            {"name": "title", "type": "string", "description": "The title of the movie."},
            {"name": "overview", "type": "text", "description": "The overview of the movie."},
            {"name": "rating", "type": "int", "description": "The rating of the movie (0-10)."}
        ]
    },
    {
        "name": "/api/movies/title/<string:title>",
        "method": "GET",
        "description": "Get movies by title.",
        "response": [
            {"name": "id", "type": "int", "description": "The ID of the movie."},
            {"name": "adult", "type": "boolean", "description": "Whether the movie is for adults."},
            {"name": "img", "type": "text", "description": "The image of the movie."},
            {"name": "video_url", "type": "text", "description": "The video URL of the movie."},
            {"name": "actors", "type": "array", "description": "The list of actor IDs in the movie."},
            {"name": "title", "type": "string", "description": "The title of the movie."},
            {"name": "overview", "type": "text", "description": "The overview of the movie."},
            {"name": "rating", "type": "int", "description": "The rating of the movie (0-10)."}
        ]
    },
    {
        "name": "/api/watchlists/<int:id>/movies",
        "method": "POST",
        "description": "Add a movie to a watchlist.",
        "response": [
            {"name": "id", "type": "int", "description": "The ID of the watchlist."},
            {"name": "user_id", "type": "int", "description": "The ID of the user."},
            {"name": "movie_ids", "type": "array", "description": "The list of movie IDs in the watchlist."},
            {"name": "login", "type": "string", "description": "The login of the user."},
            {"name": "password", "type": "string", "description": "The password of the user."}
        ]
    },
    {
        "name": "/api/watchlists/<int:id>/movies",
        "method": "DELETE",
        "description": "Remove a movie from a watchlist.",
        "response": [
            {"name": "id", "type": "int", "description": "The ID of the watchlist."},
            {"name": "user_id", "type": "int", "description": "The ID of the user."},
            {"name": "movie_ids", "type": "array", "description": "The list of movie IDs in the watchlist."},
            {"name": "login", "type": "string", "description": "The login of the user."},
            {"name": "password", "type": "string", "description": "The password of the user."}
        ]
    }
]

from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

@app.route('/')
@cross_origin()
def flaskTests():
    return jsonify(
        [
            {"SongName": "Name", "Artist": "Artist", "Album": "Album"},
            {"SongName": "Teenage Dream", "Artist": "Katy Perry", "Album": "Teenage Dream"},
            {"SongName": "Blank Space", "Artist": "Taylor Swift", "Album": "1989"},
            {"SongName": "High School Sweethearts", "Artist": "Melanie Martin EZ", "Album": "K-12"},
            {"SongName": "I'm not mad", "Artist": "Halsey", "Album": "Manic"},
            {"SongName": "Forget me too", "Artist": "Machine Gun Kelly", "Album": "Ticket´s to my downfall"}
        ]
    )

if __name__ == '__main__':
    app.run()

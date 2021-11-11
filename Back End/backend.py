from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, Float
import os
from flask_marshmallow import Marshmallow
from flask_jwt_extended import JWTManager, jwt_required, create_access_token

app = Flask(__name__)
cors = CORS(app)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'profile.db')
app.config['JWT_SECRET_KEY'] = 'super-secret'  # change this IRL**


db = SQLAlchemy(app)
ma = Marshmallow(app)
jwt = JWTManager(app)

@app.route("/")
def hello():
    return "Homepage of Budget"

@app.route("/homepage")
def homepage():
    return jsonify (message='welcome to ky homepage'), 200

@app.route('/not_found')
def not_found():
    return jsonify(message='The resource was not found'), 404




if __name__ == '__main__':
    app.run(debug=True)


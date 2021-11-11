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
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'budget.db')
app.config['JWT_SECRET_KEY'] = 'super-secret'  # change this IRL**


db = SQLAlchemy(app)
ma = Marshmallow(app)
jwt = JWTManager(app)

@app.route("/")
def hello():
    return "Budget"

@app.route("/homepage")
def homepage():
    return jsonify (message='welcome to  Budget homepage'), 200

@app.route('/not_found')
def not_found():
    return jsonify(message='The resource was not found'), 404

@app.route('/login', methods=['POST'])
def login():
    if request.is_json:
        username = request.json['username']
        password = request.json['password']
    else:
        username = request.form['username']
        password = request.form['password']

    test = User.query.filter_by(username=username, password=password).first()
    if test:
        access_token = create_access_token(identity=username)
        return jsonify(message="Login succeeded!", access_token=access_token)
    else:
        return jsonify(message="User not in database. Please try it again"), 401


@app.cli.command('db_create') ## command to create database
def db_create():
    db.create_all()
    print('Database created!')


@app.cli.command('db_drop') #***
def db_drop():
    db.drop_all()
    print('Database dropped!')

@app.route('/add_project', methods=['POST'])
def add_project():
   project_name = request.form['project_name']
   test = Project.query.filter_by(project_name=project_name).first()
   if test:
       return jsonify("There is already a this project name exist"), 409
   else:
        project_id =float(request.form['project_id'])
        project_budget =float(request.form['project_budget'])
        project_description = (request.form['project_description'])
       

        new_project = Project(project_name=project_name,project_id=project_id,project_budget=project_budget,project_description=project_description)
                          
        db.session.add(new_project)
        db.session.commit()
        return jsonify(message="You added a project"), 201

class User(db.Model): # create database name User
    __tablename__='user'
    id=Column(Integer,primary_key=True)
    username=Column(String)
    password=Column(String)
    name=Column(String)
    appointment=Column(String)


class Project(db.Model): # create database name Detail
    __tablename__='project'
    project_id=Column(Integer,primary_key=True)
    project_user_id=Column(Float)
    project_name=Column(String)
    project_budget=Column(Float)
    project_description=Column(String)


class Category(db.Model): # create database name User
    __tablename__='category'
    category_id=Column(Integer,primary_key=True)
    category_name=Column(String)


class Expense(db.Model): # create database name Detail
    __tablename__='Expense'
    expense_id=Column(Integer,primary_key=True)
    project_id=Column(Float)
    category_id=Column(Float)
    expense_name=Column(String)
    expense_description=Column(String)
    expense_amount=Column(Float)
    expense_created_at=Column(Float)
    expense_created_by=Column(String)
    expense_updated_at=Column(Float)
    expense_updated_by=Column(String)



class UserSchema(ma.Schema):
class Meta:fields = ('id', 'username', 'password', 'name', 'appointment')


class ProjectSchema(ma.Schema):
class Meta:fields = ('project_id', 'project_user','project_name', 'project_budget', 'project_description')

class UserSchema(ma.Schema):
class Meta:fields = ('id', 'username', 'password', 'name', 'appointment')

class UserSchema(ma.Schema):
class Meta:fields = ('id', 'username', 'password', 'name', 'appointment')
user_schema = UserSchema()
users_schema = UserSchema(many=True)

detail_schema = DetailSchema()
details_schema = DetailSchema(many=True)

if __name__ == '__main__':
    app.run(debug=True)


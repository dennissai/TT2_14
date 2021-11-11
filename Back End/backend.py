from flask import Flask

@app.route("/")
def hello():
    return "Hi jieying yanhan"


if __name__ == '__main__':
    app.run(debug=True)


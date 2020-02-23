from flask import Flask, escape, request, render_template, flash

app = Flask(__name__)

@app.route('/')
def main_site():
    return render_template("index.html")
    flash("Hello World")

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404
if __name__ == "__main__":
    app.run("0.0.0.0", 5000,debug=False)
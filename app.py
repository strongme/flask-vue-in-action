from flask import Flask, render_template, jsonify

app = Flask(__name__)


@app.route("/")
def home():
    return render_template('index.html',
                           static_url_path='',
                           static_folder='static',
                           template_folder='templates'
                           )   

@app.route("/load_data", methods=['GET'])
def load_data():
    return jsonify(list(range(0,10)))

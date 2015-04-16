from flask import Flask, render_template, session, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', user=session.get("user", None))

@app.route('/login', methods=['POST'])
def login():
    session['user'] = request.form['name']
    return jsonify({'success': True})

@app.route('/logout', methods=['POST'])
def logout():
    session.pop('user', None)
    return jsonify({'success': True})

app.secret_key = 'SECRETS_SECRETS_ARE_NO_FUN'

if __name__ == '__main__':
    app.run()
from flask import Flask, render_template, jsonify #Flask
# import sqlite3 #データベース
from api import api_bp
from models import get_all, init_db, insert#ORMからメソッドimport   

# APIとして使用する設定
app = Flask(__name__, static_folder='../vue-project/dist/assets', template_folder='../vue-project/dist')


# flask_SQLALCHEMY(O/Rマッパー)の設定（donfig）
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///myspa.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# TrueにするとSQL文等のログを出力
app.config['SQLALCHEMY_ECHO']=True


# blueprintからapi.pyを持ってくる
app.register_blueprint(api_bp)


# シングルページアプリケーション用フロントエンドフレームワークレンダリング
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    # c.executemany("insert into temp_table (temp, timestamp) values (?, ?)", temp_time)
    return render_template('index.html')

if __name__ == '__main__':
    with app.app_context():
        init_db(app)
        if not get_all():
            insert('foo', 'This is foo.')
            insert('bar', 'This is bar.')
    app.run()
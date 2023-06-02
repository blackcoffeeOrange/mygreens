from flask import Flask, render_template #Flask
import sqlite3 #データベース
from api import api_bp
from models import get_all, init_db, insert#ORMからメソッドimport   



#データベースに接続
conn = sqlite3.connect("Sample.sqlite3")
#カーソル生成
c = conn.cursor()
#テーブルの存在を確認してみて無ければ作成（カラム　id、日時、温度）
c.execute("CREATE TABLE IF NOT EXISTS temp_table (id INTEGER PRIMARY KEY AUTOINCREMENT, temp INTEGER, timestamp TEXT PRYMARYKEY UNIQUE)")
#テーブル情報保存
conn.commit()
#データベース接続を閉じる
conn.close()


app = Flask(__name__, static_folder='../vue-project/dist/assets', template_folder='../vue-project/dist')
# app.register_blueprint(api_bp)#apiのインスタンスを登録
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///myspa.db'
app.register_blueprint(api_bp)


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
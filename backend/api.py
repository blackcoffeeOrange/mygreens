# blueprint（flaskの機能）を使ってapiをflaskアプリケーションから分離
from flask import Blueprint
from flask_restful import Api, Resource
from models import get_all #ORMからメソッドimport

api_bp = Blueprint('api', __name__, url_prefix='/api')

class Spam(Resource):
    def get(self):
        return [{'id': x.pk, 'name': x.name, 'note': x.note} for x in get_all()]
        # データベースから取得したデータを返す
class green(Resource):
    def get(self):
        # データベースから取得したデータを返す
        return [{'id': x.pk, 'name': x.name, 'note': x.note} for x in get_all()]

class green_insert(Resource):
    # @app.route('/result', methods=['POST'])
    def insert(self):
  
        # jsonリクエストから値取得
        payload = request.json
        print(payload)
        name = payload.get('name')
        age = payload.get('age')

        # レコードの登録 新規作成したオブジェクトをaddしてcommit
        user = User(name, age)
        db.session.add(user)
        db.session.commit()

        response = jsonify(user.to_dict())
        # レスポンスヘッダ設定
        response.headers['Location'] = '/api/users/%d' % user.id
        # HTTPステータスを200以外で返却したい場合
        return response, 201



api = Api(api_bp)

#flaskのルーティングよりもこっちを優先する
# api.add_resource(クラス名, 'path')
api.add_resource(Spam, '/spam')
api.add_resource(green, '/green')
api.add_resource(green_insert, '/green_insert')


#データ保存
def insert():

    #日時の表記を日本語文字列に直して取得(TEXT型)
    timestamp = datetime.now().strftime('%Y年%m月%d日 %H:%M')


    # print(timestamp,"\n", temp)#取得した日時と温度を表示

    #取得した日時と温度のデータをテーブルに入れるためのオブジェクトを作成
    temp_time=[(temp, timestamp)]

    try:
        conn = sqlite3.connect("Sample.sqlite3")
        c = conn.cursor()
        #テーブルに温度と日時を入れる
        c.executemany("insert into temp_table (temp, timestamp) values (?, ?)", temp_time)

    except sqlite3.IntegrityError:
        print("エラー")

    conn.commit()
    conn.close()
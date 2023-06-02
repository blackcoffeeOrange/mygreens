# blueprint（flaskの機能）を使ってapiをflaskアプリケーションから分離
from flask import Blueprint
from flask_restful import Api, Resource
from models import get_all #ORMからメソッドimport

api_bp = Blueprint('api', __name__, url_prefix='/api')

class Spam(Resource):
    def get(self):
        # データベースから取得したデータを返す
        return [{'id': x.pk, 'name': x.name, 'note': x.note} for x in get_all()]


api = Api(api_bp)

#flaskのルーティングよりもこっちを優先する
# api.add_resource(Spam, '/')
api.add_resource(Spam, '/spam')
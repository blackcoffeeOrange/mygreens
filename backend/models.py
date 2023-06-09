#ORMの利用
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class SpamModel(db.Model):
    __tablename__ = 'spam_table'

    pk = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    note = db.Column(db.Text)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now, onupdate=datetime.now)


    
# データ作成
def init_db(app):
    db.init_app(app)
    db.create_all()
    
# 全データの取得
def get_all():
    return SpamModel.query.order_by(SpamModel.pk).all()

# データの挿入
def insert(name, note):
    model = SpamModel(name=name, note=note)
    db.session.add(model)
    db.session.commit()
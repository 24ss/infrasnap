from flask import Flask, jsonify, request
from flask_cors import CORS
from sqlalchemy import create_engine, func
from sqlalchemy.orm import sessionmaker
from models import Base, BillingRecord

app = Flask(__name__)
CORS(app)

engine = create_engine('sqlite:///billing.db')
Session = sessionmaker(bind=engine)

@app.route('/api/services')
def services():
    session = Session()
    data = session.query(
        BillingRecord.service,
        func.sum(BillingRecord.cost).label('total')
    ).group_by(BillingRecord.service).all()
    session.close()
    return jsonify([{ 'service': s, 'total': t } for s, t in data])

@app.route('/api/trends')
def trends():
    period = request.args.get('period', 'daily')
    session = Session()
    fmt = '%Y-%m' if period == 'monthly' else '%Y-%m-%d'
    data = session.query(
        func.strftime(fmt, BillingRecord.timestamp).label('period'),
        func.sum(BillingRecord.cost).label('total')
    ).group_by('period').order_by('period').all()
    session.close()
    return jsonify([{ 'period': p, 'total': t } for p, t in data])

@app.route('/api/suggestions')
def suggestions():
    tips = [
        { 'message': 'You have EC2 instances idle >5 days', 'service': 'EC2' },
        { 'message': 'Consider moving infrequently accessed data to Glacier', 'service': 'S3' }
    ]
    return jsonify(tips)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base, BillingRecord
from datetime import datetime

# Create engine and session factory
engine = create_engine('sqlite:///billing.db')
Base.metadata.create_all(engine)
SessionLocal = sessionmaker(bind=engine)

def ingest_csv(path='mock_data.csv'):
    df = pd.read_csv(path, parse_dates=['timestamp'])

    # Build ORM objects
    recs = [
        BillingRecord(service=row.service, cost=row.cost, timestamp=row.timestamp)
        for _, row in df.iterrows()
    ]

    # Use a Session to bulk save
    session = SessionLocal()
    session.bulk_save_objects(recs)
    session.commit()
    session.close()

    print(f"Ingested {len(recs)} records.")

if __name__ == '__main__':
    ingest_csv()

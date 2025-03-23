from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class BillingRecord(Base):
    __tablename__ = 'billing'
    id = Column(Integer, primary_key=True)
    service = Column(String, nullable=False)
    cost = Column(Float, nullable=False)
    timestamp = Column(DateTime, nullable=False)

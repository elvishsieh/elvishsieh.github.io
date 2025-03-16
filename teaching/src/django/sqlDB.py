from fastapi import FastAPI, Response, Depends, APIRouter, HTTPException
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from pydantic import BaseModel
from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow all origins (not recommended for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

db_url = "sqlite:///./database/dbUsers.db" #// Typing file:///d:/ in brower 

engine = create_engine(db_url, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base() #

class Customer(Base):
    __tablename__ = "customers"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False, index=True)
    email = Column(String, unique=True, index=True)

    def __repr__(self): # for debugging in interpreter
        return f"Customer(id={self.id}, name={self.name}, email={self.email})"
   
Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal() # like make a connection with telephone.
    try:
        yield db # yield.py and return.py programs
    finally:
        db.close()

class userCreate(BaseModel):
    name: str
    email: str

class userResponse(BaseModel):
    id: int
    name: str
    email: str
    class Config:
        from_attributes = True

class userUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None

@app.get("/Users/", response_model=List[userResponse])
async def get_customers(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    Users = db.query(Customer).offset(skip).limit(limit).all()
    return Users

@app.get("/Users/{user_id}", response_model=userResponse)
async def get_customer(user_id: int, db: Session = Depends(get_db)):
    customer = db.query(Customer).filter(Customer.id == user_id).first()
    if customer is None:
        raise HTTPException(status_code=404, detail="Customer not found")
    return customer

@app.post("/Users/", response_model=userResponse)
async def create_customer(customer: userCreate, db: Session = Depends(get_db)):
    db_customer = Customer(name=customer.name, email=customer.email)
    db.add(db_customer)
    db.commit()
    db.refresh(db_customer)
    return db_customer

@app.put("/Users/{user_id}", response_model=userResponse)
async def update_customer(user_id: int, customer: userUpdate, db: Session = Depends(get_db)):
    db_customer = db.query(Customer).filter(Customer.id == user_id).first()
    if not db_customer:
        raise HTTPException(status_code=404, detail="Customer not found")
    db_customer.name = customer.name if customer.name is not None else db_customer.name
    db_customer.email = customer.email
    db.commit()
    return db_customer

@app.delete("/Users/{user_id}")
async def delete_customer(user_id: int, db: Session = Depends(get_db)):
    db_customer = db.query(Customer).filter(Customer.id == user_id).first()
    if not db_customer:
        raise HTTPException(status_code=404, detail="Customer not found")
    db.delete(db_customer)
    db.commit()
    return {"message": "Customer deleted"}
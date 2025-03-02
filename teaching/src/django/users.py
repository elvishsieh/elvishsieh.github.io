from fastapi import FastAPI, HTTPException
import json

app = FastAPI()
 
Users = [] # a empty list(array)
Email = []
@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/Users")
async def create_user(user: str, email: str):
    Users.append(user) # append() is a list method of python
    Email.append(email)
    return Users, Email

@app.get("/Users/{user_id}")
async def get_user(user_id: int) -> str: # function annotations, which  is the same as get_user(user_id):
    if user_id < len(Users):
        user = Users[user_id]
        email = Email[user_id]
        UserJson = {"user": user, "email": email}
        Ruser = json.dumps(UserJson)
        return  Ruser
    else:
        raise HTTPException(status_code=404, detail="User not found")
    
@app.get("/Users")
async def list_users(limit: int = 10):
    return Users[0:limit], Email[0:limit]

@app.put("/Users/{user_id}")
async def update_user(user_id: int, user: str, email: str):
    Users[user_id] = user
    Email[user_id] = email
    return Users, Email

@app.delete("/Users/{user_id}")
async def delete_user(user_id: int):
    del Users[user_id]
    del Email[user_id]
    return Users, Email
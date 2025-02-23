from fastapi import FastAPI, HTTPException

app = FastAPI()
 
Users = [] # a empty list(array)
@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/Users")
async def create_user(user: str):
    Users.append(user) # append() is a list method of python
    return Users

@app.get("/Users/{user_id}")
async def get_user(user_id: int) -> str: # function annotations, which  is the same as get_user(user_id):
    user = Users[user_id]
    return user

'''
@app.get("/Users/{user_id}")
async def get_user(user_id: int) -> str: # function annotations, which  is the same as get_user(user_id):
    if user_id < len(Users):
        return Users[user_id]
    else:
        raise HTTPException(status_code=404, detail="User not found")
'''
    
@app.get("/Users")
async def list_users(limit: int = 10):
    return Users[0:limit]

@app.put("/Users/{user_id}")
async def update_user(user_id: int, user: str):
    Users[user_id] = user
    return Users

@app.delete("/Users/{user_id}")
async def delete_user(user_id: int):
    del Users[user_id]
    return Users
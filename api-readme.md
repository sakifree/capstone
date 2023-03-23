## *LockdIn*
***
* **Description:** A blog social media application that allows users to create an account and add, edit, delete, and view blogs posts.
* **Technologies/Methods Used:** Express, Mongoose, MongoDB, Render

### *Models*
***
![Model](https://i.imgur.com/OKG5ESb.png)

### *Routes*
***
| Endpoint | Method | Description |
| -------- | ------ | ----------- |
| /lockdin | GET | grabs every post within the database |
| /lockdin/:id | GET | reads a specific post entry |
| /lockdin | POST | creates a new post  |
| /lockdin/:id | PUT | updates a specific post based on the ID |
| /lockdin/:id | DELETE | deletes a post entry |

**USER**
| Endpoint | Method | Description |
| -------- | ------ | ----------- |
| /signup | POST | creates new user |
| /login | POST | checks login credentials and logs user in |
| /logout | GET | destroys user session |
 
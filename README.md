# 📝 Blog API - Node.js & Express Backend

A **RESTful Blog API** built using **Node.js and Express.js** that allows users to create, read, update, and delete blog posts.
This project demonstrates backend development concepts including **REST API design, middleware implementation, authentication, and error handling**.

---

# 🚀 Project Overview

The goal of this project is to build a **scalable backend API** for a blogging platform.

The API allows users to:

* Create blog posts
* View all posts
* Update existing posts
* Delete posts
* Authenticate users

This project demonstrates **modern backend architecture using Node.js and Express.js**.

---

# 🧰 Tech Stack

| Technology | Purpose                         |
| ---------- | ------------------------------- |
| Node.js    | Server-side JavaScript runtime  |
| Express.js | Web framework for building APIs |
| JWT        | Authentication                  |
| Postman    | API Testing                     |
| dotenv     | Environment variable management |
| CORS       | Cross-Origin Resource Sharing   |

---

# 📂 Project Structure

```
blog-api
│
server.js
package.json
.env.example
README.md
postman-collection.json
│
src
│
controllers
   postController.js
│
routes
   postRoutes.js
│
middleware
   auth.js
   errorHandler.js
```

---

# ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1️⃣ Clone the repository

```
git clone https://github.com/akashsamala4/nodejs-blog-api.git
```

### 2️⃣ Navigate to the project folder

```
cd nodejs-blog-api
```

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Create environment file

Create a `.env` file and add:

```
PORT=3000
JWT_SECRET=your_secret_key
NODE_ENV=development
```

### 5️⃣ Run the server

```
npm start
```

Server will run at:

```
http://localhost:3000
```

---

# 📡 API Endpoints

## Health Check

GET /api/health

Response:

```
{
 "status": "ok"
}
```

---

## Get All Posts

GET /api/posts

Response:

```
[
 {
  "id": 1,
  "title": "First Post",
  "content": "Hello World"
 }
]
```

---

## Create Post

POST /api/posts

Request Body:

```
{
 "title": "My Blog",
 "content": "This is my blog post"
}
```

Response:

```
{
 "message": "Post created successfully"
}
```

---

## Update Post

PUT /api/posts/:id

Updates an existing blog post.

---

## Delete Post

DELETE /api/posts/:id

Deletes a blog post.

---

# 🔐 Authentication

Authentication is implemented using **JSON Web Tokens (JWT)**.

Process:

1. User logs in
2. Server generates JWT token
3. Client sends token in request header
4. Server verifies token before accessing protected routes

Example header:

```
Authorization: Bearer <token>
```

---

# 🧩 Middleware

Middleware functions are used for:

* Request logging
* Authentication
* Error handling

### Auth Middleware

Validates JWT token before allowing access to protected routes.

### Error Handler Middleware

Handles server errors and returns proper responses.

---

# 🧪 API Testing

API endpoints were tested using **Postman**.

Testing includes:

* Endpoint functionality
* Error responses
* Authentication verification

Postman collection is included in this repository.

---

# ⚡ Features

✔ RESTful API architecture
✔ CRUD operations for blog posts
✔ JWT authentication
✔ Middleware implementation
✔ Error handling system
✔ API documentation
✔ Scalable project structure

---

# 🌍 Deployment

The API can be deployed using:

* **Render**
* **Railway**
* **Heroku**

Deployment steps:

1. Push project to GitHub
2. Connect repository to deployment platform
3. Add environment variables
4. Deploy the server

---

# 🧠 Learning Outcomes

Through this project, the following skills were developed:

* Backend development using Node.js
* Building REST APIs with Express.js
* Implementing middleware
* Understanding HTTP methods
* API testing with Postman
* Backend project structuring

---

# 👨‍💻 Author

**Akash Samala**

Computer Science & Artificial Intelligence Student
Interested in Web Development, AI, and Data Science.

---

⭐ If you found this project helpful, consider giving the repository a star!

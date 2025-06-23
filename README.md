# 🔗 URL Shortener

This is a full-stack **URL Shortener** application built using **React.js** and **Node.js**, which allows users to shorten long URLs. Each shortened link is valid for **30 minutes** by default and automatically redirects to the original URL — or shows an error if expired.

---

## 📸 Preview

> ![UI Preview](preview-image-url) <!-- Replace with actual screenshot URL -->

---

## 🚀 Features

- ✅ Shorten long URLs with ease
- ⏱️ Short links expire in 30 minutes (default)
- 🔁 Automatically redirect to long URL if valid
- 🚫 Expired links redirect to fallback or error page
- 📦 Modular, clean structure (React + Express)
- 🔐 Proper error handling for broken or expired links

---

## 🛠 Tech Stack

| Frontend | Backend  | Database |
|----------|----------|----------|
| React.js | Node.js  | (Optional: MongoDB / In-memory) |
| Vite     | Express  | N/A (if no DB used)             |
| Axios    | Nodemon  |                                  |

---

## 📂 Project Structure

```
url-shortener/
│
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/      # UI Components (Input, Button)
│   │   └── App.jsx
│   └── vite.config.js
│
├── server/                  # Node backend
│   ├── routes/
│   ├── controllers/
│   └── index.js
│
└── README.md
```

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

### 2. Set Up Backend

```bash
cd server
npm install
npm run dev
```

### 3. Set Up Frontend

```bash
cd ../client
npm install
npm run dev
```

Now open your browser at [http://localhost:5173](http://localhost:5173)

---

## 🌐 API Overview

| Method | Route             | Description                    |
|--------|------------------|--------------------------------|
| POST   | `/shorten`       | Create a new short URL         |
| GET    | `/:shortId`      | Redirect to original URL       |

- Default expiry: 30 minutes
- On expiry: Redirects to fallback or shows error

---

## 📌 Environment Variables

Create a `.env` file in your `server/` directory:

```env
PORT=5000
BASE_URL=http://localhost:5000
```

If using a database:

```env
MONGO_URI=your_mongodb_connection_string
```

---

## ✨ Future Improvements

- [ ] Add database support (MongoDB)
- [ ] Custom alias for short links
- [ ] Expiry time selection by user
- [ ] Click analytics and QR generation

---

## 🙋‍♀️ Author

**Gunjana Choudhary**  
📧 [your-email@example.com]  
🔗 [LinkedIn](https://linkedin.com/in/your-profile)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> 💬 If you liked this project or have any suggestions, feel free to open an issue or drop a ⭐️!

# 🔗 URL Shortener

This is a full-stack **URL Shortener** application built using **React.js** and **Node.js**, which allows users to shorten long URLs. Each shortened link is valid for **30 minutes** by default and automatically redirects to the original URL — or shows an error if expired.

---

## 📸 Preview

![image](https://github.com/user-attachments/assets/a7d4ad06-e1d0-44ff-9a29-2923e6af6186)

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

| Frontend |
|----------|
| React.js |
| Vite     |
| Axios    |

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

---
Now open your browser at [http://localhost:5173](http://localhost:5173)

---


## ✨ Future Improvements

- [ ] Add database support (MongoDB)
- [ ] Custom alias for short links
- [ ] Expiry time selection by user
- [ ] Click analytics and QR generation

---


## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> 💬 If you liked this project or have any suggestions, feel free to open an issue or drop a ⭐️!

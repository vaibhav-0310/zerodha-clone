# 📈 Zerodha Clone

**Zerodha Clone** is a modern web-based trading platform inspired by Zerodha, India's leading stock trading platform. It replicates the core functionalities and design aesthetics of Zerodha's user interface, providing a seamless experience for users to explore real-time market data, place orders, manage portfolios, and analyze charts.

## 📌 Features

* 🧾 User authentication (sign up / login)
* 📊 Real-time stock data display (via APIs)
* 📈 Interactive trading dashboard with charts
* 💰 Portfolio management and order tracking
* 🔍 Search and filter stocks by symbol
* 🖥️ Responsive UI inspired by Zerodha

## 🛠 Tech Stack

* **Frontend:** React.js, Tailwind CSS, Chart.js or TradingView Widgets
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **APIs:** Alpha Vantage / Yahoo Finance / Polygon.io (for real-time stock data)
* **Authentication:** JWT / OAuth2


## 🚀 Getting Started

### Prerequisites

* Node.js
* MongoDB
* API key for stock data (e.g., Alpha Vantage)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/vaibhav-0310/zerodha-clone.git
   cd zerodha-clone
   ```

2. **Install backend dependencies**

   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd ../client
   npm install
   ```

4. **Configure `.env`**

   In both `client` and `server`, create a `.env` file and add:

   ```env
   MONGO_URI=your_mongo_connection
   JWT_SECRET=your_jwt_secret
   STOCK_API_KEY=your_stock_data_api_key
   ```

5. **Run the app**

   ```bash
   # Run backend
   cd server
   npm start

   # In a new terminal, run frontend
   cd client
   npm start
   ```

6. Open in your browser:

   ```
   http://localhost:3000
   ```

## Screenshots

![image](https://github.com/user-attachments/assets/7a7fb3d0-f3f8-4cae-bc69-b7377d42df28)

![image](https://github.com/user-attachments/assets/d7edd448-06c1-41b1-9d5f-4b7bb46ffcf4)

![image](https://github.com/user-attachments/assets/d47ae23c-fe5b-44b6-90c9-86708822c69f)

![image](https://github.com/user-attachments/assets/a178cf23-8611-4c43-ac25-b0d172bf596c)

![image](https://github.com/user-attachments/assets/70cad6ea-9c08-4409-ab8a-19035520e447)





## ✨ Future Features

* Live order placement simulation
* Historical stock data graphs
* Watchlist and alerts
* Dark mode
* Mobile app version




---

```
Built with ❤️ and 📈 by [Vaibhav Bhargav] – for learning and experimentation.
```

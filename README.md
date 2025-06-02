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

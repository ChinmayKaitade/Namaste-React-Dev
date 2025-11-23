import React from "react";
import ReactDOM from "react-dom/client";

// header
const Header = () => {
  return (
    <div className="header">
      {/* logo container */}
      <div className="logo-container">
        <img
          className="logo"
          src={
            "https://media-assets.swiggy.com/fl_lossy,f_auto,q_auto,w_96,h_96/portal/m/logo_192x192.png"
          }
        />
      </div>

      {/* nav items */}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

// restaurant card
const RestaurantCard = () => {
  return (
    <div className="restaurant-card" style={styleCard}>
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/11/19/97cfe271-90eb-4d0d-8ec5-2ad99ec20753_53484.JPG"
        alt="res-logo"
        className="res-logo"
      />

      <h3>Haldiram's Restaurant</h3>

      <h4>
        North Indian, Chaat, Chinese, South Indian, Fast Food, Snacks, sandwich,
        Burger, pizza, Pasta
      </h4>
      <h4>4.5</h4>
      <h4>28-33 mins</h4>
    </div>
  );
};

// body
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="restaurant-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

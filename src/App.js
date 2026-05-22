/* ========================= APP.JS ========================= */

import React, { useState } from "react";
import "./App.css";

function App() {
  /* ================= STATES ================= */

  const [activeCategory, setActiveCategory] =
    useState("Spices");

  const [search, setSearch] = useState("");

  const [cart, setCart] = useState([]);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  /* ================= FALLBACK IMAGE ================= */

  const fallbackImage =
    "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop";

  /* ================= CATEGORIES ================= */

  const categories = [
    "Spices",
    "Vegetables",
    "Fruits",
    "Dry Fruits",
    "Combos",
  ];

  /* ================= PRODUCTS ================= */

  const products = {
    /* ================= SPICES ================= */

    Spices: [
  {
    name: "Organic Turmeric Powder",
    price: 149,
    oldPrice: 240,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Black Pepper",
    price: 220,
    oldPrice: 320,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Red Chilli Powder",
    price: 180,
    oldPrice: 280,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Green Cardamom",
    price: 490,
    oldPrice: 680,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Cloves (Grambu)",
    price: 320,
    oldPrice: 450,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Cinnamon Sticks",
    price: 280,
    oldPrice: 390,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Star Anise",
    price: 240,
    oldPrice: 340,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Coriander Powder",
    price: 120,
    oldPrice: 180,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Garam Masala",
    price: 190,
    oldPrice: 260,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Mustard Seeds",
    price: 90,
    oldPrice: 140,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Fenugreek Seeds",
    price: 110,
    oldPrice: 170,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Fennel Seeds",
    price: 130,
    oldPrice: 200,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
  },
],

    /* ================= VEGETABLES ================= */

    Vegetables: [
      {
        name: "Fresh Tomato",
        price: 49,
        oldPrice: 70,
        rating: 4.5,
        image:
          "https://images.unsplash.com/photo-1546470427-e5ac89cd0b5b?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Organic Carrot",
        price: 89,
        oldPrice: 120,
        rating: 4.8,
        image:
          "https://images.unsplash.com/photo-1447175008436-054170c2e979?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Broccoli",
        price: 99,
        oldPrice: 150,
        rating: 4.6,
        image:
          "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Capsicum",
        price: 79,
        oldPrice: 120,
        rating: 4.4,
        image:
          "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Fresh Onion",
        price: 69,
        oldPrice: 100,
        rating: 4.6,
        image:
          "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=1200&auto=format&fit=crop",
      },
    ],

    /* ================= FRUITS ================= */

    Fruits: [
      {
        name: "Fresh Apple",
        price: 199,
        oldPrice: 280,
        rating: 4.9,
        image:
          "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Orange",
        price: 120,
        oldPrice: 180,
        rating: 4.7,
        image:
          "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Banana",
        price: 69,
        oldPrice: 100,
        rating: 4.5,
        image:
          "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Watermelon",
        price: 149,
        oldPrice: 220,
        rating: 4.6,
        image:
          "https://images.unsplash.com/photo-1563114773-84221bd62daa?q=80&w=1200&auto=format&fit=crop",
      },
    ],

    /* ================= DRY FRUITS ================= */

    "Dry Fruits": [
      {
        name: "Premium Cashew",
        price: 540,
        oldPrice: 760,
        rating: 4.9,
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "California Almond",
        price: 690,
        oldPrice: 920,
        rating: 4.8,
        image:
           "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Pistachio",
        price: 740,
        oldPrice: 980,
        rating: 4.9,
        image:
           "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
      },
    ],

    /* ================= COMBOS ================= */

    Combos: [
      {
        name: "Vegetable Combo Box",
        price: 399,
        oldPrice: 699,
        rating: 5.0,
        image:
          "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Spice Combo Pack",
        price: 499,
        oldPrice: 899,
        rating: 4.9,
        image:
          "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  };

  /* ================= ADD TO CART ================= */

  const addToCart = (item) => {
    const exists = cart.find(
      (product) => product.name === item.name
    );

    if (!exists) {
      setCart([...cart, item]);
    }
  };

  /* ================= REMOVE FROM CART ================= */

  const removeFromCart = (name) => {
    const updatedCart = cart.filter(
      (item) => item.name !== name
    );

    setCart(updatedCart);
  };

  /* ================= TOTAL ================= */

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  /* ================= ORDER ================= */

  const placeOrder = () => {
    if (
      !customer.name ||
      !customer.phone ||
      !customer.address
    ) {
      alert("Please fill customer details");
      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    const items = cart
      .map(
        (item, i) =>
          `${i + 1}. ${item.name} - ₹${item.price}`
      )
      .join("\n");

    const message = `🛒 *D-Home ORDER*

${items}

💰 Total: ₹${total}

👤 Name: ${customer.name}
📞 Phone: ${customer.phone}
📍 Address: ${customer.address}`;

    window.open(
      `https://wa.me/917306868397?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  /* ================= FILTER PRODUCTS ================= */

  const filteredProducts =
    products[activeCategory].filter((item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}

      <div className="navbar">
        <div className="logo">
          🛒 D-Home
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search groceries..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        <div className="nav-icons">
          ❤️

          <div className="cart-count">
            🛍️ {cart.length}
          </div>
        </div>
      </div>

      {/* ================= OFFER BAR ================= */}

      <div className="offer-bar">
        🔥 BIG SUMMER SALE | FREE DELIVERY ABOVE ₹499
      </div>

      {/* ================= HERO ================= */}

      <div className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <span>
              Premium Grocery Marketplace
            </span>

            <h1>
              Fresh Spices &
              <br />
              Organic Vegetables
            </h1>

            <p>
              Real Spices. Real Aroma.
            </p>

            <button>
              Explore Now
            </button>
          </div>
        </div>
      </div>

      {/* ================= CATEGORIES ================= */}

      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={
              activeCategory === cat
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveCategory(cat)
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ================= PRODUCTS ================= */}

      <div className="products-grid">
        {filteredProducts.map(
          (item, index) => {
            const isAdded = cart.find(
              (product) =>
                product.name === item.name
            );

            return (
              <div
                className="card"
                key={index}
              >
                <div className="discount">
                  {Math.floor(
                    ((item.oldPrice -
                      item.price) /
                      item.oldPrice) *
                      100
                  )}
                  % OFF
                </div>

                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) =>
                    (e.target.src =
                      fallbackImage)
                  }
                />

                <div className="card-content">
                  <div className="rating">
                    ⭐ {item.rating}
                  </div>

                  <h3>{item.name}</h3>

                  <div className="price-row">
                    <span className="price">
                      ₹{item.price}
                    </span>

                    <span className="old-price">
                      ₹{item.oldPrice}
                    </span>
                  </div>

                  <button
                    className={
                      isAdded
                        ? "added-btn"
                        : ""
                    }
                    onClick={() =>
                      addToCart(item)
                    }
                  >
                    {isAdded
                      ? "✔ Added To Cart"
                      : "🛒 Add To Cart"}
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>

      {/* ================= CART ================= */}

      <div className="cart-section">
        <h2>🛍️ Your Cart</h2>

        {cart.length === 0 ? (
          <p>No items added</p>
        ) : (
          cart.map((item, i) => (
            <div
              className="cart-item"
              key={i}
            >
              <div>
                <h4>{item.name}</h4>

                <p>₹{item.price}</p>
              </div>

              <button
                className="remove-btn"
                onClick={() =>
                  removeFromCart(
                    item.name
                  )
                }
              >
                ✖
              </button>
            </div>
          ))
        )}

        <h3>Total : ₹{total}</h3>

        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) =>
            setCustomer({
              ...customer,
              name: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Phone Number"
          onChange={(e) =>
            setCustomer({
              ...customer,
              phone: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Delivery Address"
          onChange={(e) =>
            setCustomer({
              ...customer,
              address: e.target.value,
            })
          }
        />

        <button
          className="checkout-btn"
          onClick={placeOrder}
        >
          Order via WhatsApp
        </button>
      </div>

      {/* ================= FOOTER ================= */}

      <div className="footer">
        <h2>D-Home</h2>

        <p>
          Real Spices. Real Aroma.
        </p>
      </div>
    </div>
  );
}

export default App;

/* ========================= APP.JS ========================= */

import React, { useState } from "react";
import "./App.css";

function App() {

  /* ================= STATES ================= */
  const [activeCategory, setActiveCategory] = useState("Spices");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState({ name: "", phone: "", address: "" });

  /* ================= PACK SIZES ================= */
  /* All product prices are the 1kg price.
     250g  = price × 0.25
     500g  = price × 0.50
     1kg   = price × 1.00                          */
  const packSizes = [
    { label: "250g", multiplier: 0.25 },
    { label: "500g", multiplier: 0.50 },
    { label: "1kg",  multiplier: 1.00 },
  ];

  /* selected pack index per product  (default = 2 → 1kg) */
  const [selectedPack, setSelectedPack] = useState({});
  /* +/- count per product on the card (default = 1) */
  const [itemCount, setItemCount] = useState({});

  const getCount  = (name) => itemCount[name] ?? 1;

  const setPack  = (name, idx) =>
    setSelectedPack((p) => ({ ...p, [name]: idx }));

  const increment = (name) =>
    setItemCount((p) => ({ ...p, [name]: (p[name] ?? 1) + 1 }));

  const decrement = (name) =>
    setItemCount((p) => ({ ...p, [name]: Math.max(1, (p[name] ?? 1) - 1) }));

  /* compute price for a given product + pack */
  const calcPrice = (basePrice, packIdx) =>
    Math.round(basePrice * packSizes[packIdx ?? 2].multiplier);

  /* ================= FALLBACK IMAGE ================= */
  const fallbackImage =
    "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop";

  /* ================= CATEGORIES ================= */
  const categories = ["Spices", "Vegetables", "Fruits", "Dry Fruits", "Combos"];

  /* ================= PRODUCTS  (price = 1 kg price) ================= */
  const products = {

    Spices: [
      { name: "Organic Turmeric Powder", price: 149, oldPrice: 240, rating: 4.8, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop" },
      { name: "Black Pepper",            price: 220, oldPrice: 320, rating: 4.9, image: "https://images.unsplash.com/photo-1565323396060-f6a8f3c15dc5?q=80&w=1200&auto=format&fit=crop" },
      { name: "Red Chilli Powder",       price: 180, oldPrice: 280, rating: 4.7, image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=1200&auto=format&fit=crop" },
      { name: "Green Cardamom",          price: 490, oldPrice: 680, rating: 4.9, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop" },
      { name: "Cloves (Grambu)",         price: 320, oldPrice: 450, rating: 4.8, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop" },
      { name: "Cinnamon Sticks",         price: 280, oldPrice: 390, rating: 4.7, image: "https://images.unsplash.com/photo-1614527155305-9b9a3c9614a2?q=80&w=1200&auto=format&fit=crop" },
      { name: "Star Anise",              price: 240, oldPrice: 340, rating: 4.6, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop" },
      { name: "Coriander Powder",        price: 120, oldPrice: 180, rating: 4.5, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop" },
      { name: "Garam Masala",            price: 190, oldPrice: 260, rating: 4.8, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop" },
      { name: "Mustard Seeds",           price:  90, oldPrice: 140, rating: 4.5, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop" },
      { name: "Fenugreek Seeds",         price: 110, oldPrice: 170, rating: 4.4, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop" },
      { name: "Fennel Seeds",            price: 130, oldPrice: 200, rating: 4.6, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop" },
    ],

    Vegetables: [
      { name: "Fresh Tomato",   price:  49, oldPrice:  70, rating: 4.5, image: "https://images.unsplash.com/photo-1546470427-e5ac89cd0b5b?q=80&w=1200&auto=format&fit=crop" },
      { name: "Organic Carrot", price:  89, oldPrice: 120, rating: 4.8, image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?q=80&w=1200&auto=format&fit=crop" },
      { name: "Broccoli",       price:  99, oldPrice: 150, rating: 4.6, image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=1200&auto=format&fit=crop" },
      { name: "Capsicum",       price:  79, oldPrice: 120, rating: 4.4, image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=1200&auto=format&fit=crop" },
      { name: "Fresh Onion",    price:  69, oldPrice: 100, rating: 4.6, image: "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=1200&auto=format&fit=crop" },
    ],

    Fruits: [
      { name: "Fresh Apple",  price: 199, oldPrice: 280, rating: 4.9, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1200&auto=format&fit=crop" },
      { name: "Orange",       price: 120, oldPrice: 180, rating: 4.7, image: "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=1200&auto=format&fit=crop" },
      { name: "Banana",       price:  69, oldPrice: 100, rating: 4.5, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=1200&auto=format&fit=crop" },
      { name: "Watermelon",   price: 149, oldPrice: 220, rating: 4.6, image: "https://images.unsplash.com/photo-1563114773-84221bd62daa?q=80&w=1200&auto=format&fit=crop" },
    ],

    "Dry Fruits": [
      { name: "Premium Cashew",    price: 540, oldPrice: 760, rating: 4.9, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop" },
      { name: "California Almond", price: 690, oldPrice: 920, rating: 4.8, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop" },
      { name: "Pistachio",         price: 740, oldPrice: 980, rating: 4.9, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop" },
    ],

    Combos: [
      { name: "Vegetable Combo Box", price: 399, oldPrice: 699, rating: 5.0, image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop" },
      { name: "Spice Combo Pack",    price: 499, oldPrice: 899, rating: 4.9, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop" },
    ],
  };

  /* ================= ADD TO CART ================= */
  const addToCart = (item) => {
    const packIdx   = selectedPack[item.name] ?? 2;
    const pack      = packSizes[packIdx];
    const count     = getCount(item.name);
    const unitPrice = calcPrice(item.price, packIdx);
    const cartKey   = `${item.name}__${pack.label}`;

    if (cart.find((p) => p.cartKey === cartKey)) return; // already in cart

    setCart([...cart, {
      ...item,
      packLabel: pack.label,
      packIdx,
      unitPrice,
      count,
      price: unitPrice * count,
      cartKey,
    }]);
  };

  /* ================= UPDATE COUNT IN CART ================= */
  const updateCartCount = (cartKey, delta) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.cartKey !== cartKey) return item;
        const newCount = Math.max(1, item.count + delta);
        return { ...item, count: newCount, price: item.unitPrice * newCount };
      })
    );
  };

  /* ================= REMOVE FROM CART ================= */
  const removeFromCart = (cartKey) =>
    setCart(cart.filter((item) => item.cartKey !== cartKey));

  /* ================= TOTAL ================= */
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  /* ================= TIMESTAMP ================= */
  const getOrderTimestamp = () => {
    const now    = new Date();
    const days   = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const day    = days[now.getDay()];
    const date   = now.getDate();
    const month  = months[now.getMonth()];
    const year   = now.getFullYear();
    let   hours  = now.getHours();
    const mins   = now.getMinutes().toString().padStart(2, "0");
    const ampm   = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${day}, ${date} ${month} ${year}  •  ${hours}:${mins} ${ampm}`;
  };

  /* ================= PLACE ORDER ================= */
  const placeOrder = () => {
    if (!customer.name || !customer.phone || !customer.address) {
      alert("Please fill in your name, phone and address.");
      return;
    }
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const timestamp = getOrderTimestamp();
    const items = cart
      .map((item, i) =>
        `${i + 1}. ${item.name} — ${item.packLabel} × ${item.count} = ₹${item.price}`
      )
      .join("\n");

    const message =
`🛒 *De-Home ORDER*
🗓️ ${timestamp}

${items}

💰 *Total: ₹${total}*

👤 Name: ${customer.name}
📞 Phone: ${customer.phone}
📍 Address: ${customer.address}`;

    window.open(
      `https://wa.me/919633228352?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  /* ================= FILTER ================= */
  const filteredProducts = products[activeCategory].filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  /* ========================================================= */
  /*  RENDER                                                     */
  /* ========================================================= */
  return (
    <div className="app">

      {/* ===== NAVBAR ===== */}
      <div className="navbar">
        <div className="logo">🛒 De-Home</div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search groceries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="nav-icons">
          ❤️
          <div className="cart-count">🛍️ {cart.length}</div>
        </div>
      </div>

      {/* ===== OFFER BAR ===== */}
      <div className="offer-bar">
        🔥 BIG SUMMER SALE | FREE DELIVERY ABOVE ₹499
      </div>

      {/* ===== HERO ===== */}
      <div className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <span>Premium Grocery Marketplace</span>
            <h1>Fresh Spices &<br />Organic Vegetables</h1>
            <p>Freshness Delivered Daily</p>
            <button>Explore Now</button>
          </div>
        </div>
      </div>

      {/* ===== CATEGORIES ===== */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ===== PRODUCTS GRID ===== */}
      <div className="products-grid">
        {filteredProducts.map((item, index) => {
          const packIdx        = selectedPack[item.name] ?? 2;
          const pack           = packSizes[packIdx];
          const count          = getCount(item.name);
          const unitPrice      = calcPrice(item.price, packIdx);
          const totalCardPrice = unitPrice * count;
          const cartKey        = `${item.name}__${pack.label}`;
          const isAdded        = !!cart.find((p) => p.cartKey === cartKey);

          return (
            <div className="card" key={index}>

              <div className="discount">
                {Math.floor(((item.oldPrice - item.price) / item.oldPrice) * 100)}% OFF
              </div>

              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                onError={(e) => (e.target.src = fallbackImage)}
              />

              <div className="card-content">

                <div className="rating">⭐ {item.rating}</div>
                <h3>{item.name}</h3>

                {/* live price */}
                <div className="price-row">
                  <span className="price">₹{totalCardPrice}</span>
                  <span className="old-price">₹{item.oldPrice} / kg</span>
                </div>

                {/* pack-size pills  250g | 500g | 1kg */}
                <div className="pack-selector">
                  {packSizes.map((ps, idx) => (
                    <button
                      key={ps.label}
                      className={`pack-btn ${packIdx === idx ? "pack-active" : ""}`}
                      onClick={() => setPack(item.name, idx)}
                    >
                      <span className="pack-label">{ps.label}</span>
                      <span className="pack-price">₹{calcPrice(item.price, idx)}</span>
                    </button>
                  ))}
                </div>

                {/* +/- stepper */}
                <div className="count-stepper">
                  <button
                    className="step-btn"
                    onClick={() => decrement(item.name)}
                    aria-label="Decrease"
                  >−</button>
                  <span className="step-count">{count}</span>
                  <button
                    className="step-btn"
                    onClick={() => increment(item.name)}
                    aria-label="Increase"
                  >+</button>
                </div>

                <button
                  className={isAdded ? "added-btn" : ""}
                  onClick={() => addToCart(item)}
                >
                  {isAdded ? "✔ Added To Cart" : "🛒 Add To Cart"}
                </button>

              </div>
            </div>
          );
        })}
      </div>

      {/* ===== CART ===== */}
      <div className="cart-section">
        <h2>🛍️ Your Cart</h2>

        {cart.length === 0 ? (
          <p className="empty-cart">No items added yet</p>
        ) : (
          cart.map((item, i) => (
            <div className="cart-item" key={i}>

              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p className="cart-item-meta">
                  {item.packLabel} · ₹{item.unitPrice} each
                </p>
              </div>

              <div className="cart-stepper">
                <button
                  className="step-btn small"
                  onClick={() => updateCartCount(item.cartKey, -1)}
                >−</button>
                <span className="step-count">{item.count}</span>
                <button
                  className="step-btn small"
                  onClick={() => updateCartCount(item.cartKey, 1)}
                >+</button>
              </div>

              <div className="cart-item-price">₹{item.price}</div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.cartKey)}
                aria-label="Remove"
              >✖</button>

            </div>
          ))
        )}

        <h3 className="cart-total">Total : ₹{total}</h3>

        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone Number"
          onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
        />
        <textarea
          placeholder="Delivery Address"
          rows={3}
          onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
        />
        <button className="checkout-btn" onClick={placeOrder}>
          📲 Order via WhatsApp
        </button>
      </div>

      {/* ===== FOOTER ===== */}
      <div className="footer">
        <h2>De-Home</h2>
        <p>Freshness Delivered Daily</p>
        <div className="footer-divider" />
        <p className="footer-credit">
          🌿 Website Designed &amp; Developed by{" "}
          <span className="footer-author">Jissmon Poulose M O</span>
        </p>
        <p className="footer-sub">
          Bringing the finest spices &amp; fresh produce to your doorstep — from the heart of Kerala.
        </p>
      </div>

    </div>
  );
}

export default App;
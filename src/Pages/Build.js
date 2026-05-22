import React, { useState } from 'react';
import './Build.css';

const Build = () => {
  const [websiteType, setWebsiteType] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [templateType, setTemplateType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const businessCategories = [
    {
      name: "Retail Stores",
      items: ["Clothing Store", "Electronics Store", "Furniture Store"]
    },
    {
      name: "Food & Beverage",
      items: ["Coffee Shop", "Tea Shop", "Bakery"]
    },
    {
      name: "Services",
      items: ["Online Tutoring", "Therapy", "Cooking Services"]
    }
  ];

  const filteredBusinesses = businessCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="menu-container">

      {/* WEBSITE TYPE */}
      <div className="menu-section">
        <h2>Select Website Type</h2>
        <div className="menu-grid">
          <div
            className={`menu-card ${websiteType === 'business' ? 'active' : ''}`}
            onClick={() => setWebsiteType('business')}
          >
            🏢 Business
          </div>

          <div
            className={`menu-card ${websiteType === 'ecommerce' ? 'active' : ''}`}
            onClick={() => setWebsiteType('ecommerce')}
          >
            🛒 E-Commerce
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className="menu-section">
        <input
          type="text"
          placeholder="Search business type..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* BUSINESS MENU */}
      {filteredBusinesses.map((category, index) => (
        <div key={index} className="menu-section">
          <h3>{category.name}</h3>
          <div className="menu-grid">
            {category.items.map((item, i) => (
              <div
                key={i}
                className={`menu-card ${businessType === item ? 'active' : ''}`}
                onClick={() => setBusinessType(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* TEMPLATE */}
      <div className="menu-section">
        <h2>Select Template</h2>
        <div className="menu-grid">
          <div
            className={`menu-card ${templateType === 'single' ? 'active' : ''}`}
            onClick={() => setTemplateType('single')}
          >
            📄 Single Page
          </div>

          <div
            className={`menu-card ${templateType === 'multi' ? 'active' : ''}`}
            onClick={() => setTemplateType('multi')}
          >
            📚 Multi Page
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="menu-footer">
        <button
          disabled={!websiteType || !businessType || !templateType}
          className="build-button"
        >
          🚀 Build My Website
        </button>
      </div>

    </div>
  );
};

export default Build;
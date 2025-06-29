import React, { useState } from 'react';
import './Build.css';

const Build = () => {
  const [step, setStep] = useState(1);
  const [websiteType, setWebsiteType] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [templateType, setTemplateType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample business categories
  const businessCategories = [
    {
      name: "Retail Stores",
      items: [
        "Clothing Store",
        "Health and Beauty Products Store",
        "Pet Supply Store",
        "Grocery Store",
        "Toy Store",
        "Electronics Store",
        "Furniture Store"
      ]
    },
    {
      name: "Specialty Stores",
      items: [
        "Jewelry Store",
        "Sports Equipment Store",
        "Craft Supply Store",
        "Office Supply Store",
        "Bookstore",
        "Art Supply Store"
      ]
    },
    {
      name: "Food & Beverage",
      items: [
        "Wine Store",
        "Baked Goods Store",
        "Tea Shop",
        "Coffee Shop",
        "Meat and Seafood Market",
        "Vegan Food Store"
      ]
    },
    {
      name: "Services",
      items: [
        "Personal Shopping and Styling Services",
        "Online Tutoring Services",
        "Online Therapy and Counseling Services",
        "Virtual Event Planning Services",
        "Online Language Courses",
        "Online Cooking and Recipe Services"
      ]
    }
  ];

  // Filter businesses based on search
  const filteredBusinesses = businessCategories.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="builder-container">
      <div className="builder-card">
        {/* Progress Steps */}
        <div className="progress-steps">
          <div className={`step ${step >= 1 ? 'active' : ''}`}>
            <div className="step-number">1</div>
            <div className="step-label">Website Type</div>
          </div>
          <div className={`step ${step >= 2 ? 'active' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-label">Business Type</div>
          </div>
          <div className={`step ${step >= 3 ? 'active' : ''}`}>
            <div className="step-number">3</div>
            <div className="step-label">Template</div>
          </div>
        </div>

        {/* Step 1: Website Type */}
        {step === 1 && (
          <div className="step-content">
            <h2>What type of website do you need?</h2>
            <div className="option-grid">
              <div 
                className={`option-card ${websiteType === 'business' ? 'selected' : ''}`}
                onClick={() => setWebsiteType('business')}
              >
                <div className="option-icon">🏢</div>
                <h3>Business</h3>
                <p>Showcase your company and services</p>
              </div>
              <div 
                className={`option-card ${websiteType === 'ecommerce' ? 'selected' : ''}`}
                onClick={() => setWebsiteType('ecommerce')}
              >
                <div className="option-icon">🛒</div>
                <h3>E-Commerce</h3>
                <p>Sell products online with a store</p>
              </div>
            </div>
            <div className="action-buttons">
              <button 
                className="next-button" 
                onClick={handleNext}
                disabled={!websiteType}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Business Type */}
        {step === 2 && (
          <div className="step-content">
            <h2>Business Type</h2>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search business type"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="search-icon" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </div>
            
            <div className="business-categories">
              {filteredBusinesses.map((category, index) => (
                <div key={index} className="category-section">
                  <h3>{category.name}</h3>
                  <div className="business-options">
                    {category.items.map((business, idx) => (
                      <div 
                        key={idx}
                        className={`business-option ${businessType === business ? 'selected' : ''}`}
                        onClick={() => setBusinessType(business)}
                      >
                        {business}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="action-buttons">
              <button className="back-button" onClick={handleBack}>
                Back
              </button>
              <button 
                className="next-button" 
                onClick={handleNext}
                disabled={!businessType}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Template Selection */}
        {step === 3 && (
          <div className="step-content">
            <h2>Select Web Template</h2>
            <div className="option-grid">
              <div 
                className={`option-card ${templateType === 'single' ? 'selected' : ''}`}
                onClick={() => setTemplateType('single')}
              >
                <div className="template-preview single-page"></div>
                <h3>Single Page</h3>
                <p>All content on one scrollable page</p>
              </div>
              <div 
                className={`option-card ${templateType === 'multi' ? 'selected' : ''}`}
                onClick={() => setTemplateType('multi')}
              >
                <div className="template-preview multi-page"></div>
                <h3>Multi-Page</h3>
                <p>Traditional navigation between pages</p>
              </div>
            </div>
            
            <div className="action-buttons">
              <button className="back-button" onClick={handleBack}>
                Back
              </button>
              <button 
                className="next-button" 
                onClick={handleNext}
                disabled={!templateType}
              >
                Next
              </button>
              <button className="skip-button">
                Skip
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="step-content confirmation">
            <div className="confirmation-icon">🎉</div>
            <h2>Setup Complete!</h2>
            <p>Your {websiteType} website for {businessType} is ready to be customized.</p>
            <div className="selected-options">
              <div className="option-summary">
                <span>Website Type:</span>
                <strong>{websiteType === 'business' ? 'Business' : 'E-Commerce'}</strong>
              </div>
              <div className="option-summary">
                <span>Business Type:</span>
                <strong>{businessType}</strong>
              </div>
              <div className="option-summary">
                <span>Template:</span>
                <strong>{templateType === 'single' ? 'Single Page' : 'Multi-Page'}</strong>
              </div>
            </div>
            <button className="launch-button">
              Launch Website Builder
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Build;


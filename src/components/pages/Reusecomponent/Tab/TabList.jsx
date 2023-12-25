import React, { useState } from 'react';

function TabList() {
  const [activeTab, setActiveTab] = useState('profile_tab');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className={`nav-link ${activeTab === 'profile_tab' ? 'active' : ''}`}
            id="profile-tab"
            onClick={() => handleTabClick('profile_tab')}
            role="tab"
          >
            Educt
          </button>

          <button
            className={`nav-link ${activeTab === 'edu' ? 'active' : ''}`}
            id="edu"
            onClick={() => handleTabClick('edu')}
            role="tab"
          >
            link
          </button>
        </div>
      </nav>

      <div className="tab-content">
        <div className={`tab-pane ${activeTab === 'profile_tab' ? 'active' : ''}`} id="profile_tab" role="tabpanel">
          {/* Content for the "Educt" tab goes here */}
          {/* This is where you can place your white box */}
          <div className="white-box">
            {/* Your content */}
            Educt" tab goes here
          </div>
        </div>

        <div className={`tab-pane ${activeTab === 'edu' ? 'active' : ''}`} id="edu" role="tabpanel">
          {/* Content for the "edu" tab goes here */}
          {/* This is where you can place your white box */}
          <div className="white-box">
            {/* Your content */}
            Your content a
          </div>
        </div>
        {/* Add more tab panes as needed */}
      </div>
    </div>
  );
}

export default TabList;

import './App.css';
import DisplayGallery from './gallery/DisplayGallery';
import FilterableProducTable from './filterableProductTable/FilterableProducTable';
import { PRODUCTS } from './data/Products';
import { useState } from 'react';

function App() {

  const tabs = [
    { label: 'Gallery', component: <DisplayGallery /> },
    { label: 'Products', component: <FilterableProducTable products={PRODUCTS} /> }
  ];

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index); 
  };

  return (
    <div className="App">
      {/* Tabs */}
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTabIndex === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="tab-content">
        {tabs[activeTabIndex].component}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import "./App.css";
import "./global.styles.css"
import Section from "./components/section.components/Section";
import Header from "./components/header.components/Header";
import SubHeader from "./components/header.components/SubHeader";
import Banner from "./components/banner.components/Banner";
import assignmentData from "./assignment-assets/data.json";

function App() {
 
  return (
    <div className="App">
      <div className="header">
        <Header 
          title={assignmentData['hero-1'].title} 
          description={assignmentData['hero-1'].description}
        />
      </div>
      <Section/>
      <div className="sub-section">
        <SubHeader 
          title={assignmentData['hero-2'].title} 
          subtitle={assignmentData['hero-2'].subtitle}
          description={assignmentData['hero-2'].description}
        />
      </div>
      <Banner/>
    </div>
  );
}

export default App;



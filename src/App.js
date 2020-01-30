import React from "react";

import "./App.css";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name="Eric Bradley"
        avatar="https://randomuser.me/api/portraits/men/33.jpg"
        online={true}
      />
      <Contact
        name="charlene herrera"
        avatar="https://randomuser.me/api/portraits/women/5.jpg"
        online={false}
      />
      <Contact
        name="charlie"
        avatar="https://randomuser.me/api/portraits/men/24.jpg"
        online={false}
      />
    </div>
  );
}

export default App;

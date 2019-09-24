import React from 'react'
import Header from "./Header"
import TabContainer from "./components/tab.js"
import Footer from "./components/footer"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header title="Employee Timesheet" />
      <TabContainer/>

      <Footer/>
    </div>
  );
}

export default App;

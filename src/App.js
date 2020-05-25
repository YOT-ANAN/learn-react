import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

/*function App() {
  return (
    <div className="App">
      <Header />
      <Footer company="PSU" email="5910110270@psu.ac.th" />
    </div>
  );
}*/
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Footer company="PSU" email="5910110270@psu.ac.th" />
      </div>
    );
  }
}

export default App;

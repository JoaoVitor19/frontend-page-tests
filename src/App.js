import React, { Component } from "react";
import api from "./api";

class App extends Component {

  async componentDidMount() {
    const response = await api.get('');
    console.log(response.data)
  }

  render(){
  return(
    <div>
       <a>veja o console</a>
    </div>
  );
 }
}
 export default App
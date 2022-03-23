import logo from './logo.svg';
import './App.css';
import SmsService from './services/SmsService';
import React from 'react';
import Formulario from './components/Formulario';
import {TextField, Button} from '@material-ui/core';
import CargarCsv from './components/CargarCsv.tsx';
const myArray = ['Water', 'Orange Juice', 'Milk'];
class App extends React.Component{
  state = {
    message: ''
  };
  onChangeMessageHandler = (val) => {
      this.setState({ message: val.target.value })
    }
    render(){
      const {message}=this.state;
  return (
    <div className="App">
      <header className="App-header">
      <CargarCsv></CargarCsv>
        <div>
          <Formulario message={message} onChangeMessage={this.onChangeMessageHandler}></Formulario>
        </div>
        <Button onClick={() => SmsService.sender(message)} telefono='123'>Enviar</Button>
        {(sessionStorage.getItem("cargado"))
        ? <>
        <div>
                  <ul>
                  { myArray.map( (drink,index) => (<li key={index} >{drink}</li>)) }
                  </ul>
                </div>
          </>
        : <><p>bbbb</p></>      }
      </header>
    </div>
  );}
}

export default App;

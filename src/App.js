import React, { Component } from 'react';
import logo from './logo.png';
import './index.css';
import Table from './Table'
import Form from './Form'



class App extends Component {

  state = {

        participants: [
           {id: 1, fullName: "Biruk yemane", email: "bir_yem@yahoo.com", phone: "0449252021"}, 
           {id: 2, fullName: "Eric Nisho", email: "eric@gmail.com", phone: "0467896544"}, 
           {id: 3, fullName: "Muhamed Abas", email: "muaha@gmail.com", phone: "0443454567"}, 
           {id: 4, fullName: "Elias Taha", email: "elias@yahoo.com", phone: "0441235678"},
           {id: 5, fullName: "Anne Antti", email: "Anne@gmail.com", phone: "0452435456"},
           {id: 6, fullName: "Elias Sami", email: "elias@gmail.com", phone: "0413435678"},
           {id: 7, fullName: "Emmanuel Fanu", email: "emanuel@gmail.com", phone: "0451343567"},
           {id: 8, fullName: "Roya Ali", email: "Roya@yahoo.com", phone: "0473736534"},
           {id: 9, fullName: "Fabian woyu", email: "Fabian@gmail.com", phone: "0467654328"},
           {id: 10, fullName: "Harri Kimmo", email: "harri@gmail.com", phone: "0409476356"},
           {id: 11, fullName: "Roza Fanues", email: "roza@yahoo.com", phone: "0444563543"},
           {id: 12, fullName: "Petra Jakko", email: "petra@gmail.com", phone: "0454683546"},
           {id: 13, fullName: "Peter George", email: "peter@gmail.com", phone: "0558456378"},
           {id: 14, fullName: "sussana Ilka", email: "susan@gmail.com", phone: "0467834527"},
           {id: 15, fullName: "Yemane habteselassie", email: "yemane@gmail.com", phone: "0446745367"},
           {id: 16, fullName: "Ahmed Muhamed", email: "ahmed@yahoo.com", phone: "0465647632"},
           {id: 17, fullName: "Efrem yemane", email: "efrem@gmail.com", phone: "0456745365"},
           {id: 18, fullName: "Tayech Degefu", email: "tayech@gmail.com", phone: "0503654769"},
           {id: 19, fullName: "Eddison Acha", email: "eddison@gmail.com", phone: "0467456345"},
           {id: 20, fullName: "Rith Tesema", email: "ruth@gmail.com", phone: "0417564546"}
        ],
    nextID: 21
  };

  add = (formData) => {
    const participants = this.state.participants.slice();
    formData.id = this.state.nextID;
    participants.push(formData);
    this.setState({participants: participants, nextID:++this.state.nextID});
  }

  delete = (index) => {
    const participants = this.state.participants.slice();
    participants.splice(index, 1);
    this.setState({participants: participants});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> Nord Software          
        </header>

        <div className="Content-holder">
          <p className="App-intro">
            List of participants
          </p>

          <Form add={this.add} nextID={this.state.nextID}/>          
          <Table participants={this.state.participants} delete={this.delete}/>
          
        </div>
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Alert from "./components/Alert";
import Button from "./components/Button";
import Card from "./components/Card";

class App extends Component {
  handleButtonClick() {
    console.log("button added to the App was clicked!");
  }

  dontHandleButtonClick() {
    console.log("I told you not to click that button!!!");
  }

  render() {

    let alerts = [
      {
        id: 1,
        message: "Alert Me",
        type: "primary"
      },
      {
        id: 2,
        message: "Zombie Attack imiment",
        type: "danger"
      },
      {
        id: 3
      }
    ]

    return (
      <div className="container">
        {alerts.map(a => 
          <Alert 
            key={a.id} 
            message={a.message} 
            type={a.type} 
          />)}

          <Card 
            title="Dubs!!!" 
            imgsrc="dubs.jpg"
            imgalt="Dubs is the cutest!"
            width={300}>
          
              <p>This is my <strong>favorite</strong> mascot</p>
              <p>He is the cutest!</p>
              <Alert message="DUBS UP" />
          
          </Card>

          <Card 
            title="Dubs!!!" 
            imgsrc="dubs.jpg"
            imgalt="Dubs is the cutest!"
            width={300}>
          
              <p>This is my <strong>favorite</strong> mascot</p>
              <p>He <strong>REALLY</strong> is the cutest!</p>
              <Alert message="DUBS UP" type="warning" />
          
          </Card>

          <Button caption="Click Me!!!"
            onClick={() => this.handleButtonClick()}
          />
          <br />
          <br />
          <Button caption="Don't Click Me :("
            onClick={() => this.dontHandleButtonClick()}
          />

      </div>
    );
  }
}

export default App;

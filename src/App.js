import hello from './hello.jpg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: "",
      data2: "",
      data3: "",
      data: "",
      displayImages: {
      img5: false
      }
    };
    this.formRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit called");
    axios.post('http://localhost:5000/model1', { x: this.state.data })
      .then((response1) => {
        this.setState({ data1: response1.data })
        console.log(response1.data)
      })
    axios.post('http://localhost:5000/model2', { x: this.state.data}).then((response2) => {
      this.setState({ data2: response2.data })
      console.log(response2.data)
    })
    axios.post('http://localhost:5000/model3', { x: this.state.data}).then((response3) => {
      this.setState({ data3: response3.data })
      console.log(response3.data)
    })
  }

    

  render() {
    const { data1, data2, data3 } = this.state;
    console.log(this.state)
    return (
      <body>
      <div id="App">
        <h1><b><center>Prediction model</center> </b></h1>
          
            <h4 >
              Click on the button to see trends :
            </h4>
            <div className='bcon'>
            <div className="container">
            <button onClick={() => this.setState({ displayImages: { ...this.state.displayImages, img5: true } })} className="foofall">Trend</button>
            </div>
            <div className="image">
                    {this.state.displayImages.img5 && <img src={hello} alt="footfall image" />}
              </div>
            <div className="container1">
            <button onClick={() => this.setState({ displayImages: { ...this.state.displayImages, img5: false } })} className="foofall1">Close</button>
            </div>
            </div>
            

            
            
          




          <form ref={this.formRef} method='POST' onSubmit={this.handleSubmit}>

            <div className="inputs">
            <h3>Click here for prediction :</h3>
            <br></br>
            <label for="bfj"> 
              <input type="radio"  id="before" name="Date" value = "1" style={{ width: '24px', height: '24px',display: 'flex',
              }} onChange={
                (e) => {
                  console.log("hello")
                  this.setState({ data: e.target.value })
                  console.log("data")
                }
              } />Before 4th of july
            </label>
            <br></br>
            <label for="afj">
            <input type="radio"  id="after" name="Date" value = "2" 
              style={{ width: '24px', 
                      height: '24px',
                      display: 'flex',
                       }}
              onChange={(e) => {
                  console.log("hello")
                  this.setState({ data: e.target.value })
                  console.log("data")
                }
              } />After 4th of july
            </label>
            <br></br>
            <label for="range">
            <input type="radio"  id="range" name="Date" value = "3"
            style={{ width: '24px',
                     height: '24px',
                     display: 'flex',
                      }}
            onChange={(e) => {
                console.log("hello")
                this.setState({ data: e.target.value })
                console.log("data")
                }
              } />Range
            </label>
            
            <br></br>
            
            <button type="button" onClick={this.handleSubmit}>Submit</button>
            </div>
          </form>

          <div id="output">
            <p>{data1}</p>
            <p>{data2}</p>
            <p>{data3}</p>
          </div>
      </div>
      </body>
    );

  }
}
export default App;

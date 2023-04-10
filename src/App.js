//import logo from './logo.svg';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.formRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit called");
    const outputDiv = document.getElementById('output');
    const formData = new FormData(this.formRef.current);
    fetch('http://localhost:5000/', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        outputDiv.innerHTML = data;
      })
      .catch(error => {
        console.error(error);
        outputDiv.innerHTML = "Error: " + error.message;
      });
  }

  render() {
    const { data } = this.state;
  return (
    <div className="App">
   
   <div id="input">
        <form  ref={this.formRef} method='POST' onSubmit={this.handleSubmit}>
          <label for="Date">Date :<br/>
          <input type = "date" id="Date" name="Date" />
          </label>
          <br></br>
          
          <button type="button" onClick={this.handleSubmit}>Submit</button>
          </form>
          </div>
          <div id ="output">
          <p>{data}</p>
          
        
        </div>
      
    </div>
  );

}
}
export default App;

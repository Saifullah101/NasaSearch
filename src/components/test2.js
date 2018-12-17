class App extends Component {

  state = {
      date: "",
      image: ""
    };

componentDidMount(){
  fetch("https://images-assets.nasa.gov/video/NHQ_07_16_1969_Apollo%2011%20Launch%20HD%20_No%20Audio%20/collection.json")
      .then(function(resp){
          return resp.json()
      })
      .then(function(resp){
          document.body.innerHTML = resp.collection.items.map(n=>`<img src="${n.href}"/>`)
      })
    }

render(){
const {astronomy} = this.state;
return(
  <astronomy data = {astronomy} />
)
}
}

export default App;

// import $ from 'jquery';

class App extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

	render() {
		return(
			<h2><center>Shopping Cart Checkout</center></h2>
			)
	}
}

var FormOne = () => (
	<button>Next</button>
	);

ReactDOM.render(<App />, document.getElementById("app"));

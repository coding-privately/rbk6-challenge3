// import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ data: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render() {
    return React.createElement(
      "h2",
      null,
      React.createElement(
        "center",
        null,
        "Shopping Cart Checkout"
      )
    );
  }
}

var FormOne = () => React.createElement(
  "button",
  null,
  "Next"
);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImNvbXBvbmVudERpZE1vdW50IiwiJCIsImFqYXgiLCJ1cmwiLCJkYXRhVHlwZSIsImNhY2hlIiwic3VjY2VzcyIsImRhdGEiLCJzZXRTdGF0ZSIsImJpbmQiLCJlcnJvciIsInhociIsInN0YXR1cyIsImVyciIsImNvbnNvbGUiLCJ0b1N0cmluZyIsInJlbmRlciIsIkZvcm1PbmUiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWlDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQWtCO0FBQ2pCLFVBQU1BLEtBQU47QUFDQTs7QUFFREMsc0JBQW9CO0FBQ2pCQyxNQUFFQyxJQUFGLENBQU87QUFDTEMsV0FBSyxLQUFLSixLQUFMLENBQVdJLEdBRFg7QUFFTEMsZ0JBQVUsTUFGTDtBQUdMQyxhQUFPLEtBSEY7QUFJTEMsZUFBUyxVQUFTQyxJQUFULEVBQWU7QUFDdEIsYUFBS0MsUUFBTCxDQUFjLEVBQUNELE1BQU1BLElBQVAsRUFBZDtBQUNELE9BRlEsQ0FFUEUsSUFGTyxDQUVGLElBRkUsQ0FKSjtBQU9MQyxhQUFPLFVBQVNDLEdBQVQsRUFBY0MsTUFBZCxFQUFzQkMsR0FBdEIsRUFBMkI7QUFDaENDLGdCQUFRSixLQUFSLENBQWMsS0FBS1gsS0FBTCxDQUFXSSxHQUF6QixFQUE4QlMsTUFBOUIsRUFBc0NDLElBQUlFLFFBQUosRUFBdEM7QUFDRCxPQUZNLENBRUxOLElBRkssQ0FFQSxJQUZBO0FBUEYsS0FBUDtBQVdEOztBQUVGTyxXQUFTO0FBQ1IsV0FDQztBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUosS0FERDtBQUdBO0FBdkIrQjs7QUEwQmpDLElBQUlDLFVBQVUsTUFDYjtBQUFBO0FBQUE7QUFBQTtBQUFBLENBREQ7O0FBSUFDLFNBQVNGLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkcsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiB0aGlzLnByb3BzLnVybCxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IGRhdGF9KTtcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wcm9wcy51cmwsIHN0YXR1cywgZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGgyPjxjZW50ZXI+U2hvcHBpbmcgQ2FydCBDaGVja291dDwvY2VudGVyPjwvaDI+XG5cdFx0XHQpXG5cdH1cbn1cblxudmFyIEZvcm1PbmUgPSAoKSA9PiAoXG5cdDxidXR0b24+TmV4dDwvYnV0dG9uPlxuXHQpO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xuIl19
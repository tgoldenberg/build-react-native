
var App = React.createClass({
  componentDidMount(){
    $('body').children().css({'height':'inherit'});
  },
  render: function() {
    return (
      <div>
        <Navigation />
        <Homepage />
      </div>
    );
  }
});

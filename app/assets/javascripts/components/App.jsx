
var App = React.createClass({
  componentDidMount(){
    $('body').children().css({'height':'inherit'});
  },
  submitForm(){

  },
  render: function() {
    return (
      <div>
        <Navigation />
        <Homepage submitForm={this.submitForm}/>
      </div>

    )
  }
});

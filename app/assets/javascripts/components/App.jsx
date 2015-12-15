
var App = React.createClass({
  getInitialState(){
    return {
      showModal: false
    }
  },
  componentDidMount(){
    $('body').children().css({'height':'inherit'});
  },
  openModal(){
    this.setState({showModal: true});
  },
  render: function() {
    return (
      <div>
        <Navigation />
        {this.state.showModal ? <Modal closeModal={() => this.setState({showModal: false}) } /> : null}
        <Homepage openModal={this.openModal}/>
      </div>
    );
  }
});

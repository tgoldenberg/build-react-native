
var Homepage = React.createClass({
  getInitialState(){
    return {email: ''};
  },
	handleSubmit() {
    console.log('SUBMIT', this.state.email);
    // this.setState({ ajaxSending: true });
    // $.ajax({
		// 	url: `/customers/${1}`,
		// 	method: 'get',
		// 	dataType: 'json',
		// })
		// .done((res) => {console.log('RES', res)})
		// .fail((err) => {console.log('ERR', err)})
	},
  render() {
    return (
      <div className="homepage-hero">
        <img className="iphone-landing hidden-xs-down" src="/assets/iphone-landing.png" />
        <img className="nexus-landing hidden-xs-down" src="/assets/nexus-landing.png" />
        <div className="container homepage-container">
          <div className="row hero-cta text-center">
            <div className="col-sm-6 col-sm-offset-3">
              <h1 id="homepage-h1">The React Native guide<br></br> you've been waiting for.</h1>
              <h2 id="homepage-h2"><i>Build React Native</i> teaches you to create incredible native iOS and Android apps.</h2>
            </div>
          </div>
          <div className="signup-form row">
            <div className="col-md-4 col-md-offset-4">
              <p>Get early access:</p>
              <form className="form-group" onSubmit={this.handleSubmit}>
                <input placeholder="Email" ref="email" onChange={(e)=> this.setState({email: React.findDOMNode(this.refs.email).value }) } className="input input-lg form-control" value={this.state.email}/>
                <button className="btn btn-lg btn-block btn-primary hvr-hollow">sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
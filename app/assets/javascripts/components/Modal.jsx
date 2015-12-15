var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Modal = React.createClass({
	_handleClick(e) {
		e.stopPropagation();
		this.props.closeModal();
	},
  render() {
		console.log('ADDONS', React.addons.CSSTransitionGroup);
    return (
    	<div className="modal-container">
      	<div className="modal-backdrop">
	      	<ReactCSSTransitionGroup transitionName="modal" transitionAppear={true} transitionAppearTimeout={0} transitionEnterTimeout={0} transitionLeaveTimeout={0}>
      		<div className="modal-background">
  		      <h3>Thanks for signing up!</h3>
  		      <h4>We’re just putting the finishing touches on Build React Native - we’ll let you know when it’s ready.</h4>
  		      <p>Tell your friends:</p>
  		      <div className="icon-row">
    					<img className="twitter-icon" src="/assets/twitter.png" />
      				<img className="facebook-icon" src="/assets/facebook.png" />
  		      </div>
  		      <a href="#" className="btn btn-lg btn-default" onClick={this._handleClick}>close</a>
      		</div>
      		</ReactCSSTransitionGroup>
      	</div>
    	</div>
    )
  }
});

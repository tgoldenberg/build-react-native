
var Homepage = React.createClass({
  getInitialState(){
    return {email: 'test@test.com'};
  },
	handleClick() {
    // this.setState({ ajaxSending: true });
    $.ajax({
			url: `/customers/${1}`,
			method: 'get',
			dataType: 'json',
		})
		.done((res) => {console.log('RES', res)})
		.fail((err) => {console.log('ERR', err)})
	},
    render() {
        return (
        	<div></div>
        )
    }
});

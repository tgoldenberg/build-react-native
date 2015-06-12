var PostsIndex = React.createClass({
  handleClick: function(e) {
    e.preventDefault();
    this.props.onCreate();
  },
  render: function() {
    return (
      <div className="container">
        <div className="well">
        <h1>Posts</h1>
        <a href="" onClick={this.handleClick}><button className="btn btn-primary btn-lg">Create a Post!</button></a>
        </div>
        { this.props.posts }
      </div>
    );
  }
});

var PostsIndex = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="well">
        <h1>Posts</h1>
        </div>
        { this.props.posts }
      </div>
    );
  }
});

var PostsShow = React.createClass({
  handleClick: function(e) {
    e.preventDefault();
    this.props.onBackClick();
  },
  render: function() {
    var post = this.props.posts[this.props.id - 1];
    return (
      <div className="container">
        <div>{ post }</div>
        <a href="" onClick={this.handleClick}><button className="btn btn-success">Back to Posts Home Page</button></a>
        <div className="comment-container">
          <h1>Comments</h1>
        </div>
      </div>
    );
  }
});

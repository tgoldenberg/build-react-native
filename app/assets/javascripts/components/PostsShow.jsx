var PostsShow = React.createClass({
  handleClick: function(e) {
    e.preventDefault();
    this.props.onBackClick();
  },
  handleEdit: function(e) {
    e.preventDefault();
  },
  handleDelete: function(e) {
    e.preventDefault();
    var func = this.props.onDelete;
    var postId = this.props.index;
    $.ajax({
      url: "/posts/" + postId,
      method: "delete",
      data: {method: "delete"},
      dataType: "json",
      success: function(data) {
        console.log(data);
        func(data);
      }
    })
  },
  render: function() {
    var post = this.props.posts[this.props.id - 1];
    return (
      <div className="container">
        <div>{ post }</div>
        <a href="" onClick={this.handleClick}><button className="btn btn-primary">Back to Posts Home Page</button></a>
        <a href="" onClick={this.handleEdit}><button className="btn btn-success">Edit Post</button></a>
        <a href="" onClick={this.handleDelete}><button className="btn btn-warning">Delete Post</button></a>

        <div className="comment-container">
          <h1>Comments</h1>
        </div>
      </div>
    );
  }
});

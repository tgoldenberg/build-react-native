var App = React.createClass({
  getInitialState: function() {
    return {posts: this.props}
  },
  render: function() {
    var posts = new Array;
    var startPosts = this.state.posts;
    $.each(startPosts, function(i, post) {
      posts.push(
        <div className="post-wrapper">
          <h3>{parseInt(i)+1}. {post.title}</h3>
          <p>{post.body}</p>
          <p><b>{post.author}</b></p>
          <hr />
        </div>
        );
    })
    return (
      <div className="container">
        <div className="well">
        <h1>Posts</h1>
        </div>
        { posts }
      </div>
    );
  }
});

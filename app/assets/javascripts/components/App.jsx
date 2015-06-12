var App = React.createClass({
  getInitialState: function() {
    return {posts: this.props, page: "posts_index", id:""}
  },
  setPage: function() {
    this.setState({page: "posts_index"});
  },
  deletePost: function(posts) {
    this.setState({posts: posts, page: "posts_index"});
    return false;
  },
  createPost: function(data) {
    this.setState({page: "posts_create"});
    return false;
  },
  createNewPost: function(data) {
    this.setState({posts: data, page: "posts_index"});
  },
  handlePostClick: function(author, title, body, index, id) {
    this.setState({id: index, page: "posts_show", index: id});
    return false;
  },
  render: function() {
    var app = this;
    var posts = new Array;
    var startPosts = this.state.posts;
    console.log
    var func = this.handlePostClick;
    $.each(startPosts, function(i, post) {
      posts.push(
        <Post onPostClick={ func } id={post.id} index={posts.length + 1} title={post.title} body={post.body} author={post.author}  />
        );
    });
    var page = "";

    if (this.state.page == "posts_index" ) {
      page = <PostsIndex posts={posts} onCreate={this.createPost} />;
    } else if (this.state.page == "posts_show") {
      page = <PostsShow id={this.state.id} index={this.state.index} posts={posts} onBackClick={this.setPage} onDelete={this.deletePost} />;
    } else if (this.state.page == "posts_create") {
      page = <PostsNew handleCreate={this.createNewPost} />;
    }
    return (
      page
    );
  }
});

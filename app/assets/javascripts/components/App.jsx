var App = React.createClass({
  getInitialState: function() {
    return {posts: this.props, page: "posts_index", id:"", post: ""}
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

  editPost: function(id) {
    var postData = {};
    var func = this.setState;
    $.ajax({
      url: "/posts/" + id,
      method: "get",
      dataType: "json",
      success: function(data) {
        if (this.isMounted()) {
          this.setState({post: data});
        }
      }.bind(this)
    });
    this.setState({page: "posts_edit", id: id});
    return false;
  },

  handlePostClick: function(author, title, body, index, id) {
    this.setState({id: index, page: "posts_show", index: id});
    return false;
  },

  render: function() {
    var app = this;
    var posts = new Array;
    var startPosts = this.state.posts;
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
      page = <PostsShow id={this.state.id} index={this.state.index} posts={posts} onBackClick={this.setPage} onDelete={this.deletePost} onEdit={this.editPost} />;
    } else if (this.state.page == "posts_create") {
      page = <PostsNew handleCreate={this.createNewPost} />;
    } else if (this.state.page == "posts_edit") {
      page = <PostsEdit id={this.state.id} post={this.state.post} />;
    }
    return (
      page
    );
  }
});

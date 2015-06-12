var PostsEdit = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    console.log(this.props);
  },

  render: function() {
    console.log(this.props.post);
    return (
      <div className="container">
        <div className="well">
          <h1>Edit Post</h1>
        </div>
        <p className="error-messages"></p>
        <form action="/posts/{this.props.id}" method="post" id="posts_edit_form" className="form-horizontal" onSubmit={this.handleSubmit} >
          <input type="hidden" method="put" name="_method" />
          <div className="form-group">
            <input type="text" name="post[title]" placeholder="title" id="post_title" className="form-control" value={this.props.post.title}/>
          </div>
          <div className="form-group">
            <input type="text" name="post[body]" placeholder="content" id="post_body" className="form-control" value={this.props.post.body}/>
          </div>
          <div className="form-actions">
            <input type="submit" name="commit" className="btn btn-success btn-lg" /><br />
            <a href=""><button className="btn btn-default">Back</button></a>
          </div>
        </form>
      </div>
    );
  }
});

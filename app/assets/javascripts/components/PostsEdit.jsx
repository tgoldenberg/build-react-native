var PostsEdit = React.createClass({
  getInitialState: function(  ) {
    console.log(this.props.post.title);
    return {title: this.props.post.title, body: this.props.post.body};
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var title = $('#post_title').val();
    var body = $('#post_body').val();
    var func = this.props.onEditSubmit;
    $.ajax({
      method: "put",
      url: "posts/" + this.props.id,
      dataType: "json",
      data: {post: {title: title, body: body}},
      success: function(data) {
        func(data);
      }
    });
  },

  handleTitleChange: function(event) {
    this.setState({title: event.target.value});
  },

  handleBodyChange: function(event) {
    this.setState({body: event.target.value})
  },

  render: function() {

    return (
      <div className="container">
        <div className="well">
          <h1>Edit Post</h1>
        </div>
        <p className="error-messages"></p>
        <form action="/posts/{this.props.id}" method="post" id="posts_edit_form" className="form-horizontal" onSubmit={this.handleSubmit} >
          <input type="hidden" method="put" name="_method" />
          <div className="form-group">
            <input type="text" name="post[title]" id="post_title" onChange={this.handleTitleChange} className="form-control" value={this.state.title}/>
          </div>
          <div className="form-group">
            <input type="text" name="post[body]" id="post_body" onChange={this.handleBodyChange} className="form-control" value={this.state.body}/>
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

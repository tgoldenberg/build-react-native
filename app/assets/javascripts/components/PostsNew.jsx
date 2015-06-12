var PostsNew = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var form = e.target;
    var title = $('#post_title').val();
    var body = $('#post_body').val();
    var func = this.props.handleCreate;
    $.ajax({
      method: form.method,
      url: form.action,
      data: {post: {title: title, body: body}},
      dataType: 'json',
      success: function(data) {
        console.log(data);
        func(data);
      },
      error: function(data) {
        $('.error-messages').html("Invalid submission");
      }
    });
  },
  render: function() {
    return (
      <div className="container">
        <div className="well">
          <h1>New Post</h1>
        </div>
        <p className="error-messages"></p>
        <form action="/posts" method="post" id="posts_form" className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <input type="text" name="post[title]" placeholder="title" id="post_title" className="form-control" />
          </div>
          <div className="form-group">
            <input type="text" name="post[body]" placeholder="content" id="post_body" className="form-control" />
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

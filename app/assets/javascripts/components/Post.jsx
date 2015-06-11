var Post = React.createClass({
  handleClick: function(e) {
    e.preventDefault();
    var author = this.props.author;
    var title = this.props.title;
    var body = this.props.body;
    var index = this.props.index;
    var id = this.props.id;
    this.props.onPostClick(author, title, body, index, id);
  },
  render: function() {
    return (
      <div className="post-wrapper">
        <a href="" onClick={this.handleClick}><h3>{this.props.index}. {this.props.title}</h3></a>
        <p>{this.props.body}</p>
        <p><b>{this.props.author}</b></p>
        <hr />
      </div>
    );
  }
});

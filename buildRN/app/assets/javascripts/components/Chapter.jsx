class Chapter extends React.Component{
  rawMarkup(){
    let rawMarkup = marked(this.props.chapter.content, {sanitize: true});
    return { __html: rawMarkup }
  }
  render(){
    let {chapter} = this.props;
    return (
      <div>
        <p>{chapter.authors}</p>
        <p>{chapter.title}</p>
        <p><span dangerouslySetInnerHTML={this.rawMarkup()} /></p>
      </div>
    )
  }
}

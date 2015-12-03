class Chapters extends React.Component{
  render(){
    let {chapters} = this.props;
    return (
      <ul>
        {chapters.map((chapter, index) => {
          return <li><a href={`/chapters/${chapter.id}`}>{chapter.title}</a></li>
        })}
      </ul>
    )
  }
}

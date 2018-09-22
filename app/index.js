var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
//Component has State, life cycle methods/events and UI
var USER_DATA = {
  name: 'Tyler Mcginnis',
  username: 'tylermcginnis',
  img:'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
}
class Avatar extends React.Component
{
  render(){
    return(
      <img src={this.props.img} />
    )
  }
}
class Label extends React.Component{
  render()
  {
    return(
      <h1> Name: {this.props.label} </h1>
    )
  }
}

class ScreenName extends React.Component{
  render()
  {
    return(
      <h3> username: {this.props.username} </h3>
    )
  }
}
class Badge extends React.Component
{
  render()
  {
    console.log(this.props);
    return(
      <div>
        <Avatar img={this.props.user.img}/>
        <Label label={this.props.user.name}/>
        <ScreenName username={this.props.user.username}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Badge user={USER_DATA}/>,
  document.getElementById('app')
)

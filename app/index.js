var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var PropTypes = require('prop-types')
//Component has State, life cycle methods/events and UI
/**class Users extends React.Component
{
  render(){
    return(
      <ul>
        {this.props.list.map(function(user){
          return (<li key={user}> {user}</li>)
        })}
      </ul>
    )
  }
}
Users.propTypes = {
  list : PropTypes.array.isRequired
}

ReactDOM.render(
  <Users list={['ramu','anusha','achyuth','bhargav']}/>, document.getElementById('app')
)*/

class Friends extends React.Component{
  render()
  {
    var friends = this.props.list.filter(function(user){
    return  user.friend === true
    });

    var nonFriends = this.props.list.filter(function(user){
      return user.friend === false
    })

    return(
      <div>
      <h1> Friends </h1>
      <ul>
        {friends.map(function(user)
          {
            return <li key={user.name}>{user.name}</li>
          })}
      </ul>
      <hr />

      <h1> Non Friends </h1>
      <ul>
       {nonFriends.map(function(user)
     {
       return <li key={user.name}> {user.name} </li>
     })}
      </ul>
      </div>
    )
  }
}

Friends.propTypes = {
  list : PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired
  }))
}

ReactDOM.render(
  <Friends list={[{name:'ramu',friend:true},
{name:'anusha',friend:true},
{name:'achyuth',friend:true},
{name:'ramesh',friend:false}]} />, document.getElementById('app')
)

/**class Badge extends React.Component{
  render()
  {
    return(
      <div>
      <img src={this.props.img}
            alt='Avatar'
            style={{width:100, height:100}}/>
      <h1>Name: {this.props.name}</h1>
      <h3>User Name: {this.props.username} </h3>
      </div>
    )
  }
}
Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}
ReactDOM.render(<Badge name='Tyler McGinnis' username='tylermcginnis' img={'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'}/>,document.getElementById('app'))*/

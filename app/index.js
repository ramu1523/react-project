var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
//Component has State, life cycle methods/events and UI
/**class Users extends React.Component
{
  render(){
    return(
      <ul>
        {this.props.list.map(function(user){
          return (<li> {user}</li>)
        })}
      </ul>
    )
  }
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

ReactDOM.render(
  <Friends list={[{name:'ramu',friend:true},
{name:'anusha',friend:true},
{name:'achyuth',friend:true},
{name:'ramesh',friend:false}]} />, document.getElementById('app')
)

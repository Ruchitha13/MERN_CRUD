import React , {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const User = props => (
    <tr>
      <td>{props.user.name}</td>
      <td>{props.user.phoneNum}</td>
      <td>{props.user.profilePic}</td>
      <td>{props.user.address}</td>
      <td>{props.user.facebookLink}</td>
      <td>{props.user.instagramLink}</td>
      <td>{props.user.linkedinLink}</td>
      
      <td>
        <Link to={"/edit/"+props.user._id}>edit</Link> | <a href="#" onClick={() => { props.deleteUser(props.user._id) }}>delete</a>
      </td>
    </tr>
  )

export default class UsersList extends Component{
    constructor(props){
        super(props);
        this.deleteUser=this.deleteUser.bind(this);
        this.state={users:[]};

    }
    componentDidMount(){
        axios.get('http://localhost:5000/users/')
        .then(res=>{
            this.setState({users:res.data})
        })
        .catch((err)=>{
            console.log('Error while getting users '+err);
        })
    }
    deleteUser(id){
        axios.delete('http://localhost:5000/users/'+id)
        .then(res=>console.log('res.data'))
        .catch(err=>console.log('error'+ err));
        this.setState({
            users:this.state.users.filter(e=>e._id !== id)
        })
    }
    UsersList(){
        return this.state.users.map(currentUser => {
            return <User user={currentUser} deleteUser={this.deleteUser} key={currentUser._id}/>;
          })
    }
    render(){
      return(  
        <div>
        <h3>Users</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Profilepic Link</th>
              <th>Address</th>
              <th>Facebook Link</th>
	      <th>Instagram Link</th>
	      <th>Linkedin Link</th>
          <th>Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            { this.UsersList() }
          </tbody>
        </table>
	</div>
      )
    }
}
import React , {Component} from 'react';
import axios from 'axios';



export default class CreateUser extends Component{
    constructor(props){

        
        super(props);
        this.state={
            name: '',
            phoneNum: 0,
            profilePic: '',
            address: '',
            facebookLink: '',
            instagramLink: '',
            linkedinLink: '',
            // skills: [],
            // projects: {
            //     projectname:'',
            //     description:'',
            //     technologies:[]
            //         }
            
        }
        this.onChangename=this.onChangename.bind(this);
        this.onChangephoneNum=this.onChangephoneNum.bind(this);
        this.onChangelinkedinLink=this.onChangelinkedinLink.bind(this);
        this.onChangeprofilePic=this.onChangeprofilePic.bind(this);
        this.onChangefacebookLink=this.onChangefacebookLink.bind(this);
        this.onChangeinstagramLink=this.onChangeinstagramLink.bind(this);
        this.onChangeaddress=this.onChangeaddress.bind(this);
        this.onChangeprojects=this.onChangeprojects.bind(this);
        this.onChangeskills=this.onChangeskills.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        
    }
   componentDidMount(){
       this.setState({
           name:'Test user'
       })
   }
    onChangeprojects(e){
        this.setState({
            projects : e.target.value
        })
    }
    onChangeskills(e){
        this.setState({
            skills: e.target.value
        })
    }
    onChangelinkedinLink(e){
        this.setState({
            linkedinLink: e.target.value
        })
    }
    onChangeinstagramLink(e){
        this.setState({
            instagramLink: e.target.value
        })
    }
    onChangefacebookLink(e){
        this.setState({
            facebookLink: e.target.value
        })
    }
    onChangeaddress(e){
        this.setState({
            address: e.target.value
        })
    }
   
    onChangeprofilePic(e){
        this.setState({
            profilePic: e.target.value
        })
    }
    onChangename(e){
        this.setState({
            name: e.target.value
        })
    }
    onChangephoneNum(e){
        this.setState({
            phoneNum: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const user = {
            name: this.state.name,
            phoneNum: this.state.phoneNum,
            profilePic: this.state.profilePic,
            address: this.state.address,
            facebookLink: this.state.facebookLink,
            instagramLink: this.state.instagramLink,
            linkedinLink: this.state.linkedinLink
            // skills: this.state.skills,
            // projects: this.state.projects
        }
        console.log(user);
        axios.post('http://localhost:5000/users/add',user)
        .then(res=> console.log(res.data)).catch(err=> console.log('error after submit '+ err));
        window.location ='/';
    }
    render(){
      return(  
        <div>
        <h3>Create New User Log</h3>
        <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
                <label>Name: </label>
                <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangename}
                />
            </div>
            <div className="form-group"> 
                <label>Phone Number: </label>
                <input  type="number"
                required
                className="form-control"
                value={this.state.phoneNum}
                onChange={this.onChangephoneNum}
                />
            </div>
            <div className="form-group"> 
                <label>Profile Pic URL </label>
                <input  type="text"
                required
                className="form-control"
                value={this.state.profilePic}
                onChange={this.onChangeprofilePic}
                />
            </div>
            <div className="form-group"> 
                <label>Address </label>
                <input  type="text"
                required
                className="form-control"
                value={this.state.address}
                onChange={this.onChangeaddress}
                />
            </div>
            <div className="form-group"> 
                <label>Facebook Link </label>
                <input  type="text"
                required
                className="form-control"
                value={this.state.facebookLink}
                onChange={this.onChangefacebookLink}
                />
            </div>
            <div className="form-group"> 
                <label>Instagram Link </label>
                <input  type="text"
                required
                className="form-control"
                value={this.state.instagramLink}
                onChange={this.onChangeinstagramLink}
                />
            </div>
            <div className="form-group"> 
                <label>linkedin  Link </label>
                <input  type="text"
                required
                className="form-control"
                value={this.state.linkedinLink}
                onChange={this.onChangelinkedinLink}
                />
            </div>

          <div className="form-group">
            <input type="submit" value="Create User Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
      )
    }
}
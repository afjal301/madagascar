import react from 'react';
import '../App.css';
import importImg from '../img/logo.png';
import { NavLink } from 'react-router-dom';
class Header extends react.Component{
    constructor(props){
        super(props);
        console.log(props.Email)
        this.first=new Date();
        this.state = {
            now:new Date(),
            Email : '' ,
            Password : '' ,
            forgot : false
        }
        this.timer=null;
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }
    componentDidMount(){
        this.timer =window.setInterval(this.stick.bind(this),1000);
    }
    componentWillUnmount(){
        window.clearInterval(this.timer);

    }
    handleChange(event){
        const name = event.target.name
        const type = event.target.type
        const value = type === 'checkbox' ? event.target.checked : event.target.value
        this.setState({
            [name]: value

        })
    }
    stick(){
        this.setState({now:new Date()});
    }
    connected(){
        return this.first.toLocaleTimeString() - this.state.now.toLocaleTimeString();
    }
    handleSubmit(event){
        event.preventDefault()
        const data =JSON.stringify(this.state);
        console.log(data);
    }
    render(){
        return (
            <div className="first">
        <div className="menu">
            

            <img src={importImg} width="150px"className='logo'/>
            {this.state.now.toLocaleDateString()} <br />
            {this.state.now.toLocaleTimeString()} <br />
            
            
        </div>
        <div className="contenu">
            <h1>Welcome To Madagascar Will Rise</h1>
            <div className="formulaire">
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor='Email'>Sign In</label>
                    <input type="email" placeholder='Email' name='Email' value={this.state.Email} onChange={this.handleChange} id='Email'/> <br />
                    <input type="password"  placeholder='Password' name='Password' value={this.state.Password} onChange={this.handleChange}/> <br /> 
                    <label htmlFor="checked">Forgot Password ?</label>
                    <input type="checkbox" checked={this.state.forgot} id="checked" onChange={this.handleChange} name='forgot'/>
                    <input type="submit"  className='submit'/>
                </form>
            </div>
        </div>
    </div>
        )
    }
}
/*
const Header= ()=>{return (
    <div className="first">
        <div className="menu">
            
        </div>
        <div className="contenu">
            <h1>Welcome To Madagascar Will Rise</h1>
            <div className="formulaire">
                <form action="">
                    <label htmlFor="">Sign In</label>
                    <input type="text" placeholder='Email' /> <br />
                    <input type="text" placeholder='Passsword' /> <br />
                    <input type="submit"  className='submit'/>
                </form>
            </div>
        </div>
    </div>
)}*/
export default Header;


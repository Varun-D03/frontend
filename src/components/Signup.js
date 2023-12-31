import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Navbar from './Navbar';
import M from 'materialize-css';
import {Link} from 'react-router-dom';

function Signup() {
    const [fullName, setfullName] = useState("")
    const [userName, setuserName] = useState("")
    const [passWord, setpassWord] = useState("")
    const [email, setEmail] = useState("")
    const history = useHistory()
    const postData = (e)=>{
        
        fetch("http://52.65.227.234:5050/signup",{
            method: "post",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                fullName,
                userName,
                email,
                passWord
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html:data.error,classes:"#c62828 red darken-3"})
            }
            else{
            console.log(data)
            M.toast({html:"Account created!",classes:"#43a047 green darken-1"})
            history.push("/signin")
            }
        })
        .catch(err=>{
            
            console.log(err)
        })
    }

    return (
        <div>
             
            <div className="neu card auth-card">
                    <h2 style={{color: "#ed6663"}}>BlogFeed</h2>
                    
                    <input required type="text" placeholder="Full Name" onChange={(e)=>setfullName(e.target.value)}/>
                    <input required type="text" placeholder="Username" onChange={(e)=>setuserName(e.target.value)}/>
                    <input required type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                    <input required type="password" placeholder="Password" onChange={(e)=>setpassWord(e.target.value)}/>
                    <br/><br></br><button onClick={(e)=>postData(e)} style={{backgroundColor: "#ed6663", color:"whitesmoke"}} className="btn waves-effect waves-light">Register</button>
                    <br/><br></br>
                    <span>Already have an account? <Link to="/signin">Sign In</Link></span>
                    <br/>
                    
                    
            </div>
        </div>
    )
}

export default Signup;

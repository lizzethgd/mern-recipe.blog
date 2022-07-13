import {useState, useContext} from 'react'
import {authLogin, authRegister} from '../services/AuthService'
import {AuthContext} from '../context/AuthContext';
import {useHistory } from "react-router-dom";
import '../assets/css/login.scss'

const Login = () => {

    const [userLogin, setUserLogin] = useState({username: '', password: ''}) 
    const [userLogup, setUserLogup] = useState({username: '', password: ''}) 
    const authContext = useContext(AuthContext);
    const [message,setMessage] = useState();
    const [ inputTypeLogin, setInputTypeLogin] = useState('password')
    const [ eyeSlashLogin, setEyeSlashLogin] = useState('-slash')
    const [ inputTypeLogup, setInputTypeLogup] = useState('password')
    const [ eyeSlashLogup, setEyeSlashLogup] = useState('-slash') 

    const history = useHistory()  

    const handleChangeLogin = e => {
        e.preventDefault();
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
      }

      const handleChangeLogup = e => {
        e.preventDefault();
        setUserLogup({ ...userLogup, [e.target.name]: e.target.value })
      }  

    const handleSubmitLogin =  (e) => {
        e.preventDefault();
            authLogin(userLogin).then(data=>{
                console.log(data);
                const { isAuthenticated,user} = data;    
                if(isAuthenticated){
                    authContext.setUser(user);
                    authContext.setIsAuthenticated(isAuthenticated);
                    localStorage.setItem('AuthData', JSON.stringify(data))
                    history.push('/myprofile');
                }
                else
                    setMessage('wrong credentials');
            })
    }


    const handleSubmitLogup = e => {
        try{
        e.preventDefault();
        authRegister(userLogup)
    }catch(err){console.log(err.message)}
    
      }   

     
    const logupShow = e => {
        e.preventDefault(); 
        let parent = e.target.parentNode.parentNode;
        let loginDiv = document.getElementById('login');
        Array.from(e.target.parentNode.parentNode.classList).find((element) => {
            if(element !== 'slide-up') {
                parent.classList.add('slide-up')
            }else{
                loginDiv.parentNode.classList.add('slide-up')
                parent.classList.remove('slide-up')
            }
        });
    }
    
    const loginShow = e => {
        e.preventDefault(); 
        let parent = e.target.parentNode;
        let logupDiv = document.getElementById('logup');
        Array.from(e.target.parentNode.classList).find((element) => {
            if(element !== 'slide-up') {
                parent.classList.add('slide-up')
            }else{
                logupDiv.parentNode.parentNode.classList.add('slide-up')
                parent.classList.remove('slide-up')
            }
        });
    }


    const onClouseFullSizeImage = () => {
        document.getElementById("log-container").style.display='none'
        history("/");
      }

      const showLoginPass = e => {
        e.preventDefault()
        setInputTypeLogin(inputTypeLogin==='password' ? 'text' : 'password')
        setEyeSlashLogin(eyeSlashLogin==='-slash' ? '' : '-slash') 
      }  

      const showLogupPass = e => {
        e.preventDefault()
        setInputTypeLogup(inputTypeLogup==='password' ? 'text' : 'password')
        setEyeSlashLogup(eyeSlashLogup==='-slash' ? '' : '-slash') 
      } 
  
    return (
<div id="log-container" className="w3-modal w3-light-green" style={{display: 'block'}}>
    <button className="w3-button w3-deep-orange w3-large  w3-display-topright" title="Close Modal Image" onClick={onClouseFullSizeImage} ><i className="fa-solid fa-rectangle-xmark"/></button>
    <div className="w3-modal-content w3-animate-zoom log-form-structor ">
        
        <div className="login ">
        {message ? <p className="msg">{message}</p>: null}
            <h2 className="log-form-title" id="login" onClick={e => loginShow(e)}><span>or</span>Login </h2>
            <form onSubmit={handleSubmitLogin} target="_self">
              <div className="log-form-holder">
                <input type="text" className="log-input" placeholder="Username" required name="username"  onChange={handleChangeLogin}/>    
                <div className="log-input " style={{display: "flex", padding: 0}} >
                    <input  type={inputTypeLogin} className="log-input" placeholder='Password' required name="password" onChange={handleChangeLogin} />
                    <i className={`fa-solid fa-eye${eyeSlashLogin} w3-text-theme `} name='showPass' style={{width: '15%', padding: '7px' , backgroundColor: 'transparent'}} onClick={showLoginPass}/>
                </div>   
              </div>
                <button className="log-submit-btn"  type='submit'>Sign in</button>
            </form> 
        </div>

        <div className="signup slide-up">
        {message ? <p>{message}</p>: null}
            <div className="log-center">
                <h2 className="log-form-title" id="logup" onClick={e => logupShow(e)}><span>or</span>Register</h2>
                <form onSubmit={handleSubmitLogup} target="_self">
                    <div className="log-form-holder">
                        <input type="text" className="log-input" placeholder="First name" name="firstName" onChange={handleChangeLogup}/>

                        <input type="text" className="log-input" placeholder="Last name" name="lastName" onChange={handleChangeLogup}/>

                        <input type="text" className="log-input" placeholder="E-mail" required name="email" onChange={handleChangeLogup}/>

                        <input type="text" className="log-input" placeholder="Username" required name="username" onChange={handleChangeLogup}/>
                          
                        <div className="log-input " style={{display: "flex", padding: 0}} >
                         <input  type={inputTypeLogup} className="log-input" placeholder='Password' required name="password" onChange={handleChangeLogup} />
                         <i className={`fa-solid fa-eye${eyeSlashLogup} w3-text-theme`} name='showPass' style={{width: '15%', padding: '7px'}} onClick={showLogupPass}/>
                        </div>
                    </div>
                    <button className="log-submit-btn"type='submit'>Sign up</button>
                </form>
            </div>
        </div>
        
    </div>
</div> 
    
    )
}

export default Login


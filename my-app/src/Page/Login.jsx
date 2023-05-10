import React, { useState, useContext,useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Styles from  "../Style/SIgnUp.module.css";
import axios from 'axios';
import { useToast } from '@chakra-ui/react'
import { useNavigate ,Link} from 'react-router-dom'

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" })
    const [signupData, setSignupData] = useState([])
    const navigate = useNavigate()
    const { handleLogin, setIsAuth } = useContext(AuthContext)
    const toast = useToast()


    useEffect(() => {
        axios.get("https://render-api-go2p.onrender.com/signup").then((res) => {
            setSignupData(res.data)
        })
    }, [])


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let flag = false;
        let name = null
        signupData.map((el) => {
            if (el.email === formData.email && el.password === formData.password) {
                flag = true;
                name = el.name
                return
            }
        })
        if (flag === true) {
            handleLogin(name)
            toast({
                title: 'Login Successful.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: "top",
            })
            navigate("/")
        } else {
            toast({
                title: 'Login failed',
                description: "Invalid Credentials",
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: "top",
            })
        }
    }


  return (
    <div className={Styles.form}>
            <div className={Styles.center}>
                <h1>LogIn</h1>
                <form onSubmit={handleSubmit}>
                    <div className={Styles.inputbox}>
                        <input type="email" required="required" placeholder='email' name="email" onChange={handleChange} />
                    </div>
                    <div className={Styles.inputbox}>
                        <input type="password" required="required" placeholder='password' name="password" onChange={handleChange} />
                    </div>

                    <input className={Styles.btn} type="submit" />
                    <div style={{textAlign:"center",marginTop:"10px"}}>
                        New to Account?<span style={{color:"dodgerblue"}}><Link to="/signup">SignUp</Link></span>
                    </div>

                </form>
            </div>
        </div>
  );
};

export default Login;
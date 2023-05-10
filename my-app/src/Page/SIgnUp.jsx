import React, { useState, useContext } from 'react';
import Styles from  "../Style/SIgnUp.module.css";
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


const SIgnUp = () => {
  const navigate = useNavigate()
  const toast = useToast()

  const [formData, setFormData] = useState({ name: "", email: "", password: "" })

  const handleChange = (e) => {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })

  }
  const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("https://render-api-go2p.onrender.com/signup", formData).then((res) => {
          console.log(res.data)
          toast({
              title: 'SignUp Sucess',
              description: "Account have Created",
              status: 'success',
              duration: 3000,
              isClosable: true,
              position: "top",
          })
          setFormData({ name: "", email: "", password: "" })
          navigate("/login")
      })

  }
 

  return (
    <div className={Styles.form}>
    <div className={Styles.center}>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
            <div className={Styles.inputbox}>
                <input type="name" required="required" placeholder='name' name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className={Styles.inputbox}>
                <input type="email" required="required" placeholder='email' value={formData.email} name="email" onChange={handleChange} />
            </div>
            <div className={Styles.inputbox}>
                <input type="password" required="required" placeholder='password' value={formData.password} name="password" onChange={handleChange} />
            </div>

            <input className={Styles.btn} type="submit" />

        </form>
    </div>
</div>
  );
};

export default SIgnUp;
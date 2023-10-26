import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import './Visit_request.css';
const Request_visite = () => {
    const [user_first_name, setFirstName] = useState("");
    const [user_last_name, setLastName] = useState("");
    const [user_email, setEmail] = useState("");
    const [user_phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ghecu7d', 'template_jvf8uwt', form.current, 'Sk_Kpnky3f-4wXnHh')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
        }, (error) => {
            console.log(error.text);
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
    };
  return (
    <div className='conatainer'>
        <h1>request your visit</h1>
        <div className='box'>
            <div className='left-part'>
           
             <form ref={form} onSubmit={sendEmail} action="#">
            
              <label >First Name <em>&#x2a;</em></label>
              <input  type="text" placeholder= " First Name " name="user_first_name" value= { user_first_name} onChange={(e)=>setFirstName(e.target.value)} required  />
              <label >Last Name <em>&#x2a;</em></label>
              <input  type="text" placeholder= " Last Name " name="user_last_name" value= { user_last_name} onChange={(e)=>setLastName(e.target.value)} required  />
              <label >Email <em>&#x2a;</em></label> 
              <input  type="email" placeholder= " Email "name="user_email" value= { user_email} onChange={(e)=>setEmail(e.target.value)}required />
              <label >Phone Number <em>&#x2a;</em></label>
              <input  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" placeholder= " Phone "name="user_phone" value= { user_phone} onChange={(e)=>setPhone(e.target.value)}required />
              <label >YOUR MESSAGE <em>&#x2a;</em> </label>
             <textarea  name="message" required="" rows="4" value= { message} onChange={(e)=>setMessage(e.target.value)}></textarea>
    <h3>
      Please provide all detaill.
    </h3>
    <div className='btn'>
    <input type="submit" value="Send"/>
    </div>
                </form>
               
            </div>
            <div className='right-part'>

            </div>

        </div>
      
    </div>
  )
}

export default Request_visite

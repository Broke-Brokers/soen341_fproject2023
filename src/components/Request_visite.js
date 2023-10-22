import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Visit_request.css';
const Request_visite = () => {
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
    };
  return (
    <div className='conatainer'>
        <h1>request your visit</h1>
        <div className='box'>
            <div className='left-part'>
             <form ref={form} onSubmit={sendEmail} >
                <form action="#">
    <label for="customerName">First Name <em>&#x2a;</em></label>
    <input id="customerName" type="text" placeholder= " First Name " name="user_first_name" required  />
    <label for="customerName">Last Name <em>&#x2a;</em></label>
    <input id="customerName" type="text" placeholder= " Last Name " name="user_first_name" required  />
    <label for="customerEmail">Email <em>&#x2a;</em></label> 
    <input id="customerEmail" type="email" placeholder= " Email "name="user_email" required />
    <label for="customerPhone">Phone Number <em>&#x2a;</em></label>
    <input id="customerPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" placeholder= " Phone "name="user_phone" required />
    <label for="customerNote">YOUR MESSAGE <em>&#x2a;</em> </label>
    <textarea id="customerNote" name="customerNote" required="" rows="4"></textarea>
    <h3>
      Please provide all detaill.
    </h3>
    

    <button id="customerOrder">SUBMIT</button>
  </form>
                </form>

            </div>
            <div className='right-part'>

            </div>

        </div>
      
    </div>
  )
}

export default Request_visite

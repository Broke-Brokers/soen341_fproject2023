import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Visit_request.css';

const VisitRequest = () => {
    const [userFirstNameRv, setUserFirstNameRv] = useState("");
    const [userLastNameRv, setUserLastNameRv] = useState("");
    const [userEmailRv, setUserEmailRv] = useState("");
    const [userPhoneRv, setUserPhoneRv] = useState("");
    const [messageRv, setMessageRv] = useState("");
    const formRv = useRef();

    const sendEmailRv = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ghecu7d', 'template_jvf8uwt', formRv.current, 'Sk_Kpnky3f-4wXnHh')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
            }, (error) => {
                console.log(error.text);
            });

        setUserFirstNameRv("");
        setUserLastNameRv("");
        setUserEmailRv("");
        setUserPhoneRv("");
        setMessageRv("");
    };

    return (
        <div className='bodyrv'>
        <div className='container1rv'>
            <h1>Request Your Visit</h1>
            <div className='boxrv'>
                <div className='left-partrv'>
                    <form ref={formRv} onSubmit={sendEmailRv} action="#">
                        <label className='labelrv'>First Name <em>&#x2a;</em></label>
                        <input className='inputrv' type="text" placeholder="First Name" name="user_first_name" value={userFirstNameRv} onChange={(e) => setUserFirstNameRv(e.target.value)} required />
                        <label className='labelrv'>Last Name <em>&#x2a;</em></label>
                        <input className='inputrv' type="text" placeholder="Last Name" name="user_last_name" value={userLastNameRv} onChange={(e) => setUserLastNameRv(e.target.value)} required />
                        <label className='labelrv'>Email <em>&#x2a;</em></label>
                        <input className='inputrv' type="email" placeholder="Email" name="user_email" value={userEmailRv} onChange={(e) => setUserEmailRv(e.target.value)} required />
                        <label className='labelrv'>Phone Number <em>&#x2a;</em></label>
                        <input className='inputrv' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" placeholder="Phone" name="user_phone" value={userPhoneRv} onChange={(e) => setUserPhoneRv(e.target.value)} required />
                        <label className='labelrv'>YOUR MESSAGE <em>&#x2a;</em></label>
                        <textarea className='textarearv' name="message" required="" rows="4" value={messageRv} onChange={(e) => setMessageRv(e.target.value)}></textarea>
                        <h3 className='h3rv'>Please provide all details.</h3>
                        <div className='btnrv'>
                            <input className='inputrv'type="submit" value="Send" />
                        </div>
                    </form>
                </div>
                <div className='right-partrv'></div>
            </div>
        </div>
        </div>
    );
}

export default VisitRequest;

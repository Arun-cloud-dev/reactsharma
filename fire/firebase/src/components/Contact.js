import React , {useState , useEffect } from 'react'
import {db} from "../firebase"


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message , setMessage] = useState("");


    const [loader,setLoader]=  useState(false);



    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        db.collection("contacts").add({
            name:name,
            email:email,
            message:message,
        }) .then (
            ()=> {
                setLoader(false);
                alert("your message has beeen sent to sharama")
            }
        )
        .catch (
            (error) =>{
                alert(error.message);
                setLoader(false)
            }
        );


        setName("");
        setEmail("");
        setMessage("");
    };
    

 return (
    <form className="form" onSubmit={handleSubmit}>
<h1>
    contact sharma
</h1>

<label>Name</label>
<input
placeholder="Name"
value={name}
onChange={(e)=> setName (e.target.value)}>
</input>

<label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>


      <button type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}>
        Submit
      </button>
    </form>
 );

};

export default Contact;
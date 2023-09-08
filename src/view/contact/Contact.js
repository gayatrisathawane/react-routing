import Button from "../../component/button/Button";

import Navbar from "../../component/navbar/Navbar";

export default function Contact()
{
    return(
        <>
      <Navbar/>
     <label>Name:</label> <input type="text"/>
     <label>Contact:</label> <input type="text"/>
     <label>Addres:</label> <input type="text"/>
     <Button text="Send Message" />
      </>
    );
}
import React from "react"
import Mobile from "../Mobile"
import { Link, Routes } from "react-router-dom"
 

function Contact(){


   return(

    <div>
        <h1 className="head1"> Get Conected With Us  </h1>
        {/* <button>
        <Link to="/mobile">Mobile </Link>
    
        </button> */}

        <div className="contact">
            
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, rerum reiciendis! Nisi laborum quod porro commodi eos rerum unde id. Optio, voluptas ex. Officia eius minus, necessitatibus tenetur reprehenderit porro.
Doloremque ipsam unde iste, doloribus, sint et cum illo obcaecati nesciunt alias fugiat explicabo ipsum odit quae maiores. Accusamus blanditiis numquam doloremque. Quis quas veniam eligendi sint rerum delectus cum.
</p>

      <label htmlFor="Name"  >NAME</label>
      <input type="text"  />

      <label htmlFor="Name">Email</label>
      <input type="text"  />

      <label htmlFor="Name">Message</label>
      <input type="text"  />

      <button type="submit">Submit</button>
        </div>
    </div>
   )
}

export default Contact
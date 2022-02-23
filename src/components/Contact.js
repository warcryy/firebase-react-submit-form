import ContactForm from "./ContactForm"
import React from "react"
import firebaseDb from "../firebase";
const Contact = () => {

    const addOrEdit = obj => {
 firebaseDb.child('contacts').push(
    obj,
    err => {
        if(err)
        console.log(err)
    }
)

    }
  return (
      <>
  <div class="mt-4 p-5 text-black text-centre">
  <h1 class="display-4">Contact Register</h1>
  
</div>
   <div className="row" style={{marginTop:'20px'}}>
       <div className="col-md-5">
      <ContactForm addOrEdit={addOrEdit}/>
       </div>
      
   </div>
   </>
  )
}

export default Contact
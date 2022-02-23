import React , {useState , useEffects} from "react"

const ContactForm = (props) => {
    const initialFieldValues = {
        fullname: '',
        mobile: '',
        email: '',
        address:''
    }

    var[values, setValues] = useState(5)
    
    const handleInputChange = e => {
        var{name,value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
        <div className="form-group input-group col-md-6 py-2">
            <div className="input-group-prepend">
                <div className="input-group-text">
                    <i className="fa fa-user"></i>

                </div>
            </div>
            <input className="form-control" placeholder="Full Name" name="fullname" value={values.fullname}
           onChange={handleInputChange}
           />
        </div>
       <div className="form-row">

       <div className="form-group input-group col-md-6 py-2">
            <div className="input-group-prepend">
                <div className="input-group-text">
                    <i className="fa fa-mobile-alt"></i>

                </div>
            </div>
            <input className="form-control" placeholder="Mobile" name="mobile" value={values.mobile}
             onChange={handleInputChange}
            />
        </div>
        <div className="form-group input-group col-md-6 py-2">
            <div className="input-group-prepend">
                <div className="input-group-text">
                    <i className="fa fa-envelope"></i>

                </div>
            </div>
            <input className="form-control" placeholder="Email" name="email" value={values.email}
             onChange={handleInputChange}
            />
        </div>
        </div>
       <div className="form-group">
           <textarea className="form-control py-2" placeholder="Address" name="address" value={values.address} onChange={handleInputChange} />
       </div>
       <div className="form-group">
           <input type="submit" value="Save" class="btn btn-primary btn-block py-2" />
       </div>
       
    </form>
  )
}

export default ContactForm

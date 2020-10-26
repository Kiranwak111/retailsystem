import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  })

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      }
    })

  }

  const formSubmit = (event) => {
    event.preventDefault();
    alert(`my full name is ${data.fullname}. my mobile numberis ${data.phone},also my mail Id is ${data.email} and msf to you ${data.msg}
      }`)
  }

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>
      <div className="row">
        <div className="col-md-5 col-10 mx-auto">
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="fullname"
                placeholder="Enter your name"
                value={data.fullname}
                onChange={inputEvent}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Mobile Number</label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="phone"
                placeholder="Enter your Mobile Number"
                value={data.phone}
                onChange={inputEvent}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                placeholder="Enter your Email"
                value={data.email}
                onChange={inputEvent}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Massage</label>
              <textarea
                type="text"
                className="form-control"
                rows="3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="msg"
                value={data.msg}
                onChange={inputEvent}>

              </textarea>
            </div>
            <div className="col-10">
              <button type="submit" className="btn btn-outline-primary mb-3">Submit Form</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact;
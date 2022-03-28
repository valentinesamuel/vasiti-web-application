import React, { useState } from 'react'
import { AttachFile, Close } from '@mui/icons-material';


const TestimonyModal = () => {
      const [fileName, setFileName] = useState("nothi")
      const [fileIcon, setFileIcon] = useState("attach")
      const [testimony, setTestimony] = useState({
            picture: "nothi",
            firstName: "",
            lastName: "",
            story: "",
            status: ""
      })


      const selectFileHandler = event => {
            setTestimony(prevTestimony => ({ ...prevTestimony, picture: event.target.files[0].name }))
            // setFileName(event.target.files[0].name)
            // console.log(fileName)
            setFileIcon("close")
      }

      function handleSubmit(event) {
            event.preventDefault();
            console.log(testimony)
      }

      return (
            <form className='modal' onSubmit={handleSubmit}>
                  <h2 className='title'>Share your amazing story!</h2>
                  <p className="input-label">Upload your picture</p>
                  <label className='input-field'>
                        <p><span className={fileName === "nothi" ? "name-field" : ""}>{testimony.picture}</span> </p>
                        <span>{fileIcon === "attach" ? <AttachFile className='icon' /> : <Close className='icon' />}</span>
                        <input className='file-input' type="file" onChange={selectFileHandler} />
                  </label>
                  <div className="names">
                        <div className="name">
                              <label className="input-label" for="label">First name</label>
                              <input type="text" onChange={(e) => setTestimony((prevTestimony) => ({ ...prevTestimony, firstName: e.target.value }))} className="input-field" name="name" />
                        </div>
                        <div className="name">
                              <label className='input-label' for="label">Last name</label>
                              <input type="text" onChange={(e) => setTestimony((prevTestimony) => ({ ...prevTestimony, lastName: e.target.value }))} className="input-field" name="name" />
                        </div>
                  </div>
                  <div className="testimony">
                        <label className='input-label'> Share your story</label>
                        <textarea className='story' onChange={(e) => setTestimony((prevTestimony) => ({ ...prevTestimony, story: e.target.value }))} name="label" cols="30" rows="10"></textarea>
                  </div>
                  <div className="status">
                        <label>What did you interact with Vasiti as?</label>
                        <input type="radio" value="customer" name="status" onChange={(e) => setTestimony(prevTestimony => ({ ...prevTestimony, status: "customer" }))} checked={testimony.status === "customer"} /> Customer
                        <input type="radio" value="vendor" name="status" onChange={(e) => setTestimony(prevTestimony => ({ ...prevTestimony, status: "vendor" }))} checked={testimony.status === "vendor"} /> Vendor
                  </div>
                  <button>Submit</button>
            </form>
      )
}

export default TestimonyModal
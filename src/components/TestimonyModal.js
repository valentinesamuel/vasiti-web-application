import React, { useState } from 'react'
import { AttachFile, Close } from '@mui/icons-material';
import funnel from '../assets/funnel.svg';


const TestimonyModal = () => {
      const [shared, setShared] = useState(true)
      const [fileIcon, setFileIcon] = useState("attach")
      const [testimony, setTestimony] = useState({
            picture: "nothi",
            firstName: "",
            lastName: "",
            story: "",
            status: "",
            location: ""
      })
      // const [sendtoDB, setSendtoDB] = useState(false)


      const selectFileHandler = event => {
            setTestimony(prevTestimony => ({ ...prevTestimony, picture: event.target.files[0].name }))
            setFileIcon("close")
      }

      function handleSubmit(event) {
            event.preventDefault();
            console.log(testimony)
            console.log("Thanks for sharing");
            setShared(false)
      }

      const sendData = () => {
            // setSendtoDB(true)
            console.log("sent data");
      }

      return (
            <>
                  <div className='modal' >

                        {shared ? <form onSubmit={handleSubmit}>
                              <h2 className='title'>Share your amazing story!</h2>
                              <p className="input-label">Upload your picture</p>
                              <label className='input-field'>
                                    <p><span className={testimony.picture === "nothi" ? "name-field" : ""}>{testimony.picture}</span> </p>
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
                                    <div className="radios">

                                          <input type="radio" value="customer" name="status" onChange={(e) => setTestimony(prevTestimony => ({ ...prevTestimony, status: "customer" }))} checked={testimony.status === "customer"} /> Customer
                                          <input type="radio" className='status-option' value="vendor" name="status" onChange={(e) => setTestimony(prevTestimony => ({ ...prevTestimony, status: "vendor" }))} checked={testimony.status === "vendor"} /> Vendor
                                    </div>
                              </div>
                              <div className="location">

                                    <label className="input-label" for="label">City or Higher Institution (for Students)</label>
                                    <input type="text" onChange={(e) => setTestimony((prevTestimony) => ({ ...prevTestimony, location: e.target.value }))} className="input-field" name="name" />
                              </div>
                              <div className="submit-btn">

                                    <button className='btn'>Share Your Story!</button>
                              </div>
                        </form> : <div className='shared'>
                              <img src={funnel} alt="funell" className='shared-image' />
                              <h3 className='shared-heading'>Thank you for sharing your story</h3>
                              <p className='shared-body'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              </p>
                              <button className='btn shared-btn' onClick={sendData}>Close</button>
                        </div>
                        }
                  </div>
            </>
      )
}

export default TestimonyModal
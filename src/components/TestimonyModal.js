import React, { useState } from 'react'
import { AttachFile, Close } from '@mui/icons-material';


const TestimonyModal = () => {
      const [fileName, setFileName] = useState("nothi")
      const [fileIcon, setFileIcon] = useState("attach")
      // const [testimony, setTestimony] = useState({

      // })

      
      const selectFileHandler = event => {
            setFileName(event.target.files[0].name)
            setFileIcon("close")
      }

      return (
            <section className='modal'>
                  <h2 className='title'>Share your amazing story!</h2>
                  <p className="input-label">Upload your picture</p>
                  <label className='input-field'>
                        <p><span className={fileName === "nothi" ? "name-field" : ""}>{fileName}</span> </p>
                        <span>{fileIcon === "attach" ? <AttachFile className='icon' /> : <Close className='icon' />}</span>
                        <input className='file-input' type="file" onChange={selectFileHandler} />
                  </label>
                  <div className="names">
                        <div className="name">
                              <label className="input-label" for="label">First name</label>
                              <input type="text" className="input-field" name="name" />
                        </div>
                        <div className="name">
                              <label className='input-label' for="label">Last name</label>
                              <input type="text" className="input-field" name="name" />
                        </div>
                  </div>
                  <div className="testimony">
                        <label className='input-label'> Share your story</label>
                        <textarea className='story' name="label" cols="30" rows="10"></textarea>
                  </div>
            </section>
      )
}

export default TestimonyModal
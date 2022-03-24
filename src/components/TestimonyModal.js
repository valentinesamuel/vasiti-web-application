import React, { useState } from 'react'
import { AttachFile, Close } from '@mui/icons-material';


const TestimonyModal = () => {
      const [fileName, setFileName] = useState("nothi")
      const [fileIcon, setFileIcon] = useState("attach")
      const selectFileHandler = event => {
            setFileName(event.target.files[0].name)
            setFileIcon("close")
      }

      return (
            <section className='modal'>
                  <h2 className='title'>Share your amazing story!</h2>
                  <p className="pic-title">Upload your picture</p>
                  <label className='input-field'>
                        <p><span className={fileName === "nothi" ? "name-field" : ""}>{fileName}</span> </p>
                        <span>{fileIcon === "attach" ? <AttachFile className='icon' /> : <Close className='icon' />}</span>
                        <input className='file-input' type="file" onChange={selectFileHandler} />
                  </label>
                  <div className="names">
                        <div className="name">
                              <label className='pic-title' for="label">First name</label>
                              <input type="text" className="name-field"  name="name" />
                        </div>
                        <div className="name">
                              <label className='pic-title' for="label">Last name</label>
                              <input type="text" className="name-field" name="name" />
                        </div>
                  </div>
            </section>
      )
}

export default TestimonyModal
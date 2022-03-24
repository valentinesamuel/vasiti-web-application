
import shareStroke from "../assets/images/share-button-stroke.svg"
import Modal from '@mui/material/Modal';
import { useState } from "react";
import TestimonyModal from "./TestimonyModal";
import { Box } from "@mui/material";

const HeroTestimony = ({ heroTestimony }) => {
      const [ShowModal, setShowModal] = useState(false);
      
      const handleOpen = () => setShowModal(true);
      const handleClose = () => setShowModal(false);


     
      const postTestimony = () => {
            //setShowModal(false)
            console.log("Testimony posted");
      }
      return (
            <>
                  {
                        heroTestimony.statusColor == 'grey' ? <section className="hero-testimony" >
                              <div className="picture">
                                    <img src={heroTestimony.potrait} alt="women" className="women" />
                                    <img src={heroTestimony.backdrop} alt="women-backdrop" className="women-backdrop" />
                              </div>
                              <div className="testimony">
                                    <h3 className="testifier">Tolu & Jay's Experience</h3>
                                    <p className={heroTestimony.statusColor == 'gray' ? 'customer-tag' : 'vendor'}>customer</p>
                                    <p className="testimony-body">
                                          I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
                                    <button className="shareStory">share your own story
                                          <img src={shareStroke} alt="share-stroke" /></button>
                              </div>
                        </section > : <section className="hero-testimony orange-vendor hero-testimony-orange" >
                              <div className="picture">
                                    <img src={heroTestimony.potrait} alt="women" className="women" />
                                    <img src={heroTestimony.backdrop} alt="women-backdrop" className="women-backdrop" />
                              </div>
                              <div className="orange-testimony testimony ">
                                    <h3 className="testifier">{heroTestimony.firstName}'s Experience</h3>
                                    <p className={heroTestimony.statusColor == 'gray' ? 'customer-tag' : 'vendor'}>{heroTestimony.status}</p>
                                    <p className="testimony-body">
                                          {heroTestimony.testimony}</p>
                                    <button onClick={handleOpen} className="shareStory orange">share your own story
                                          <img src={shareStroke} alt="share-stroke" /></button>
                              </div>
                        </section >
                  }
                  <Modal open={ShowModal} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box>
                              <TestimonyModal></TestimonyModal>
                    </Box>
             </Modal>

            </>
      )
}

export default HeroTestimony
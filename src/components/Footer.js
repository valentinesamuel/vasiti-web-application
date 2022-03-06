import fb from '../assets/sm-icons/fb.svg'
import ig from '../assets/sm-icons/ig.svg'
import ln from '../assets/sm-icons/ln.svg'
import tw from '../assets/sm-icons/tw.svg'

const Footer = () => {
      return (
            <footer className='footer'>
                  <div className="column" xs={4} lg={1}>
                        <h3 className="column-header">Company</h3>
                        <p>About us</p>
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                        <p>Press & Media</p>
                  </div>
                  <div className="column" >
                        <h3 className="column-header">Products</h3>
                        <p>Marketplace</p>
                        <p>Magazine</p>
                        <p>Seller</p>
                        <p>Wholesale</p>
                        <p>Services</p>
                  </div>
                  <div className="column" >
                        <h3 className="column-header">Careers</h3>
                        <p>Become a Campus Rep</p>
                        <p>Become a Vasiti Influencer</p>
                        <p>Become a Campus Writer</p>
                        <p>Become an Affliate</p>
                  </div>
                  <div className="column" >
                        <h3 className="column-header">Get In Touch</h3>
                        <p>Contact us</p>
                        <p>Partner with us</p>
                        <p>Avertise with us</p>
                        <p>Help/FAQs</p>
                  </div>
                  <div className="column membership" >
                        <h3 className="column-header">Join our community</h3>
                        <div className='socials'>
                              <img className='social' src={fb} alt="fb" />
                              <img className='social' src={ig} alt="ig" />
                              <img className='social' src={tw} alt="tw" />
                              <img className='social' src={ln} alt="ln" />
                        </div>
                        <p className='email-newsletter'>Email Newsletter</p>
                  </div>



            </footer>
      )
}

export default Footer
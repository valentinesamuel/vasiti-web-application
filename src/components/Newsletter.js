import phoneImage from "../assets/images/half-phone.svg"

const Newsletter = () => {
      return (
            <section className="newsletter">
                  <div className="phone-image-container">
                        <img src={phoneImage} alt="phone-image" className="phone-image"/>
                  </div>
                  <div className="newsform">
                        <h1 className="form-header">Be a member of our community🎉</h1>
                        <p className="form-paragraph">We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</p>
                  <form className="form">
                        <input className="email-input" type="email" placeholder="enter your emial address" />
                        <button className="subscription-btn">subscribe</button>
                  </form>
                  </div>
            </section>
      )
}

export default Newsletter
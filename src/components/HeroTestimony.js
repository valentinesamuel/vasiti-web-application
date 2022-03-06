
import women from "../assets/images/black-girls.svg"
import womenBackDrop from "../assets/images/black-girls-backdrop.svg"
import shareStroke from "../assets/images/share-button-stroke.svg"


const HeroTestimony = () => {
      return (
            <section className="hero-testimony">
                  <div className="picture">
                        <img src={women} alt="women" className="women" />
                        <img src={womenBackDrop} alt="women-backdrop" className="women-backdrop" />
                  </div>
                  <div className="testimony">
                        <h3 className="testifier">Tolu & Jay's Experience</h3>
                        <p className="customer-tag">customer</p>
                        <p className="testimony-body">
                              I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
                        <button className="shareStory">share your own story
                              <img src={shareStroke} alt="share-stroke" /></button>
                  </div>
            </section>
      )
}

export default HeroTestimony
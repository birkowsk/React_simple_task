import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

const data = [{ "id": "recAGJfiU4CeaV0HL", "order": 3, "title": "Full Stack Web Developer", "dates": "December 2015 - Present", "duties": ["Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.", "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.", "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian."], "company": "TOMMY" }, { "id": "recIL6mJNfWObonls", "order": 2, "title": "Front-End Engineer", "dates": "May 2015 - December 2015", "duties": ["Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.", "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester", "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1", "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1"], "company": "BIGDROP" }, { "id": "rec61x18GVY99hQq5", "order": 1, "title": "Engineering Intern", "dates": "May 2014 - September 2015", "duties": ["I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.", "YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.", "Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism."], "company": "CUKER" }]

function App() {
  const [isLoading, setLoading] = useState(true)
  const [companyData, setCompanyData] = useState([])
  const [job, setJob] = useState(0)


  useEffect(() => {
    setCompanyData(data)
    setLoading(false)
  }, [])

  // if (!loading) {
  // if (loading) {
  // if (loading == true) { String(x), String(y) x == y
  // if (loading === true) { typeof x, typeof y, type(x) == type(y), x==y

  if (loading) {
    return (
      <div><h2>TEST</h2></div>
    )
  }


  const { title, dates, duties, company } = companyData[job]

  return (
    <div className="root">
      <section className="main-section">
        <div className="main-title-wrapper">
          <h1>Experience</h1>
          <div className="underline"></div>
        </div>
        <div className="main-content">
          <div className="btn-container">
            {companyData.map((singleData, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setJob(index)}
                  className="job-btn">{singleData.company}
                </button>
              )
            })}
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>

            {duties.map((singleDuty, index) => {
              return (
                <div key={index} className="job-desc">
                  <span className="job-arrow"></span>
                  <p>{singleDuty}</p>
                </div>
              )
            })}
            <button className="btn-info">More info</button>
          </article>
        </div>

      </section>
    </div>


  )
}

export default App;
import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../assets/css/section_2.css"

export default function Keynote() {
  return (
    <div>
      <Navbar />
      <div className="heading"> Keynote Speakers</div>

      <div className="card-container">
        <div className="cards">
          <div className="img-container">
            <img
              src="keynote-speakers/image-1.png"
              alt="speaker"
              className="speaker-img"
            />
            {/* <div className="img-overlay"></div> */}
          </div>

          <div className="speaker-information">
            <h1>	Askhan Jahanbani Ghahfarokhi</h1>
            <h2>Associate Professor NTNU Norway</h2>
            {/* <p>Some text</p> */}
          </div>
        </div>
        <div className="cards">
          <img
            src="keynote-speakers/image-2.png"
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>	Dr. Sandeep D. Kulkarni</h1>
            <h2>Associate Professor IIT Kharagpur, India</h2>
            <p>Deysarkar Centre of Excellence in Petroleum Engineering</p>
          </div>
        </div>
        <div className="cards">
          <div className="img-container">
            <img
              src="keynote-speakers/image-3.png"
              alt="speaker"
              className="speaker-img"
            />
          </div>
          <div className="speaker-information">
            <h1>Prof. Subrata Borgohain Gogoi</h1>
            <h2>
              Dibrugarh University, Assam, India.
            </h2>
             <p>Dean, Faculty of Earth Sciences and Energy
              Professor & Head, Department of Petroleum Technology</p>
          </div>
        </div>
        <div className="cards">
          <img
            src="keynote-speakers/image-4.png"
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>Dr. Himanshu Sharma </h1>
            <h2> Assistant Professor, IIT Kanpur, India</h2>
            {/* <p>Some text</p> */}
          </div>
        </div>
        <div className="cards">
          <img
            src="keynote-speakers/image-5.png"
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>Dr. Pankaj Khanna</h1>
            <h2>Asssistant Professor IIT Gandhinagar</h2>
            {/* <p>Some text</p> */}
          </div>
        </div>
        <div className="cards">
          <img
            src="keynote-speakers/image-6.png"
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>	Professor Anirbid Sircar</h1>
            <h2>Director-School of Energy Technology </h2>
            <p>Pandit Deendayal Energy University </p>
          </div>
        </div>
        <div className="cards">
          <img
            src="keynote-speakers/image-7.png "
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>	Professor Rakeshkumar Vij</h1>
            <h2>Dean Placement</h2>
            <p>Dean Placement</p>
          </div>
        </div>

        {/* <div className="cards">
           <img
             src="keynote-speakers/image-6.png"
             alt="speaker"
             className="speaker-img"
           />
          <div className="speaker-information">
             <h1>Prof. Damaraju</h1>
             <h2>ONGC Energy Center, Faridabad</h2>
             <p>Some text</p>
           </div>
         </div> */}






      </div>

      <Footer />
    </div>

  )
}

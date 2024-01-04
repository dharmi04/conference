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
            <h1>	Prof. Askhan Jahanbani Ghahfarokhi</h1>
            <h4>Department of Petroleum Engineering, NTNU Norway</h4>
            {/* <p>Some text</p> */}
          </div>
        </div>
        <div className="cards">
          <div className="img-container">

          <img
            src="keynote-speakers/image-2.png"
            alt="speaker"
            className="speaker-img"
          />
          </div>
          <div className="speaker-information">
            <h1>	Prof. Sandeep D. Kulkarni</h1>
            <h4>Deysarkar Centre of Excellence in Petroleum Engineering</h4>
            <h4>IIT Kharagh4ur, India.</h4>
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
            <h1>Prof. Subrata Borgohain Gogoi, </h1>
            <h4>
            Department of Petroleum Technology, Dibrugarh University, Assam, India.
            </h4>
             {/* <p>Dean, Faculty of Earth Sciences and Energy
              Professor & Head, Department of Petroleum Technology</p> */}
          </div>
        </div>
        <div className="cards">
          <img
            src="keynote-speakers/image-4.png"
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>Prof. Himanshu Sharma </h1>
            <h4> Department of Chemical Engineering, IIT Kanpur, India</h4>
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
            <h1>Prof. Pankaj Khanna</h1>
            <h4>Department of Earth Science, IIT Gandhinagar, India</h4>
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
            <h1>Professor Anirbid Sircar</h1>
            <h4>Pandit Deendayal Energy University, Gandhinagar, India  </h4>
            {/* <p>Pandit Deendayal Energy University </p> */}
          </div>
        </div>
        <div className="cards">
          <img
            src="keynote-speakers/image-8.png "
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>	Prof. Anugrah Singh</h1>
            <h4>Department of Chemical Engineering, IIT Guwahati, India</h4>
            {/* <p>Dean Placement</p> */}
          </div>
        </div>
        <div className="cards">
          <img
            src="keynote-speakers/image-9.png "
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>	Prof. Prem Bikkina, </h1>
            <h4>Department of Chemical Engineering, Oklahoma State University, USA</h4>
            {/* <p>Dean Placement</p> */}
          </div>
        </div>
        <div className="cards">
          <img
            src="keynote-speakers/image.png"
            // alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>	Prof. Prashant Jadhawar, Department of Petroleum Engineering, </h1>
            <h4>University of Aberdeen, UK
</h4>
            {/* <p>Dean Placement</p> */}
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

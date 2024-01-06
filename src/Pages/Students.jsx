import React from "react";
import Navbar from '../Components/Navbar.js';
import Footer from "../Components/Footer.js";

const Students = () => {
    return (
        <>
            <Navbar />
            <div className="subheading">
                <h3>Students</h3>
                <div className="subheading-details">
                    <h3 className="committe-location">Isaac Wilson</h3>
                </div>
                <div className="subheading-details">
                    <h3 className="committe-location">Nguessan Kouassi Jean Patrick</h3>
                </div>
                <div className="subheading-details">
                    Prof. T.P Singh, <br />
                    <h3 className="committe-location">Dean Student Affairs, PDEU Gandhinagar</h3>
                </div>
                <div className="subheading-details">
                    Prof. Surendra Singh Kachhwaha, <br />
                    <h3 className="committe-location">Dean SOT, PDEU Gandhinagar</h3>
                </div>
                <div className="subheading-details">
                    Dr. Bhawanisingh Desai, <br />
                    <h3 className="committe-location">Dean R&D, PDEU Gandhinagar</h3>
                </div>
                <div className="subheading-details">
                    Dr. Praghnesh Bhatt, <br />
                    <h3 className="committe-location">Dean SOET, PDEU Gandhinagar</h3>
                </div>
                <div className="subheading-details">
                    Dr. Vishvesh J Badheka, <br />
                    <h3 className="committe-location">Dean Academic Affairs, PDEU Gandhinagar</h3>
                </div>
                <div className="subheading-details">
                    Dr. Rajesh Patel, <br />
                    <h3 className="committe-location">Dean Admission, PDEU Gandhinagar</h3>
                </div>
                <div className="subheading-details">
                    Prof. R.K.Vij, <br />
                    <h3 className="committe-location">Dean of Placements, PDEU Gandhinagar</h3>
                </div>
                <div className="subheading-details">
                    Prof. Ranjan Sengupta, <br />
                    <h3 className="committe-location">PDEU Gandhinagar</h3>
                </div>
                <div className="subheading-details">
                    Dr. Ramesh Guduru, <br />
                    <h3 className="committe-location">PDEU Gandhinagar</h3>
                </div>
                <div className="subheading-details">
                    Dr. Nitin Chaudhari,
                    <br />
                    <h3 className="committe-location">PDEU Gandhinagar</h3>
                </div>
                <div className="subheading-details">
                    Dr. Abhijit D Ray,
                    <br />
                    <h3 className="committe-location">PDEU Gandhinagar</h3>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Students;
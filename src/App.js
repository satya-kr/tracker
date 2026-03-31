import React from "react";
import "./App.css";
import BG from "./kats-weil-CLD1i8hp008-unsplash.jpg";
export default function App() {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="card">

        {/* Header */}
        <h1 className="title">🎉 Bachelor Party 🎉</h1>
        <p className="subtitle">
          You are invited to celebrate the Bachelor Party!
        </p>

        {/* Party Section */}
        <div className="section">
          <p >📅 <strong >Planned Date: <span className="x-title">5th April 2026</span></strong></p>
          <p>Let’s gather, enjoy, and make unforgettable memories!</p>
        </div>

        <div className="note">
          ⚠️ Date may change depending on group availability.
        </div>

        {/* <button className="btn">Confirm Availability</button> */}

        {/* Divider */}
        <div className="divider" />

        {/* Wedding Section */}
        <h2 className="wedding-title">💍 Wedding Invitation 💍</h2>

        <p className="invite-text">
          To be held on <strong>27th April, 2026 (Monday)</strong>, you are
          cordially invited to attend and solicit your blessings for the new
          couple for their happy conjugal life.
        </p>

        {/* Program List */}
        <div className="program">
          <h3 align="center">📜 Programme</h3>
          <ul>
            <li><span className="x-title">Haldi & Mehendi</span><br/> 26th April 2026 (Sunday)</li>
            <li><span className="x-title">Marriage Ceremony</span><br/> 27th April 2026 (Monday)</li>
            <li><span className="x-title">Reception & Dinner</span><br/> 29th April 2026 (Wednesday - 07:00 PM)</li>
          </ul>
        </div>

        {/* Venue */}
        <div className="venue">
          📍 <strong>Venue:</strong><br />
          Sakti Sangh Lodge, Chawk Bazar, Purulia
        </div>

      </div>
    </div>
  );
}
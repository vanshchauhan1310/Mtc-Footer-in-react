import React from 'react'
import logo3 from './Assets/Bugymania.png'
import './Event.css'

function EventPage() {
  return (
    <div>
      <main>
  <section className="hero">
    <div className="col-left">
      <div className="text">
        <h1>
          MTC PRESENTS
          <br />
          BUGYMANIA 2.0
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <a className="scroll-link" href="#about">
          Read More
        </a>
      </div>
    </div>
    <div className="col-right">
      <div className="bugymania">
        <img src={logo3} alt="img" />
      </div>
    </div>
  </section>
  <section id="about">
    <div className="about-content">
      <h2>About Event</h2>
      {/* Add your content for the "about" section here */}
      <div className="paras">
        <p>
          <span className="highlight">Bugymania 2.0 Round 1</span> took place
          online on March 1st, featuring multiple choice questions (MCQs) with a
          single correct answer. Participants could select from four programming
          languages: C, C++, Java, and Python, with approximately 30 MCQs for
          each language. Backtracking was not permitted. The online portal was
          accessible from 11:00 am to 11:30 am, with 31 out of 70 participants
          qualifying for the next round.{" "}
        </p>
        <p>
          <span className="highlight">Bugymania 2.0 Round 2 </span> took place
          offline on March 4th at UPES, Bidholi campus, in 10th Block, Room no.
          10105 at 3:30 pm. Qualifiers were organized into groups of three, each
          tasked with cracking four unique codes. Two groups successfully
          advanced to the final round.{" "}
        </p>
        <p>
          <span className="highlight">In the final round</span> ,the 6 finalists
          were tasked with creating codes to solve a given situation. Two
          champions emerged from this group: Anvesh Kumar Raj secured the top
          position, while Arkaprava Trip claimed the second spot.
        </p>
      </div>
    </div>
  </section>
</main>

    </div>
  )
}

export default EventPage

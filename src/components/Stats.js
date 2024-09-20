import React from 'react'
import Points from './PlayerStats/Points'
import Rebounds from './PlayerStats/Rebounds'
import Threes from './PlayerStats/Threes'
import bgImage from '../images/image-3.jpeg'

const Stats = () => {
  return (
    <>
      {/* Subtitle */}
      <div className="title m-4" 
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${bgImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center" }}>
        <h1 className="display-5 p-3 text-white fw-bolder">20-21 Playoff Leaders</h1>
      </div>

      {/* Points Card */}
      <Points />

      {/* Rebounds Card */}
      <Rebounds />

      {/* Threes Card */}
      <Threes />

      {/* Glossary */}
      <p className="container-lg p-4 pt-0 text-secondary">
        Glossary: G - Guard, F - Forward, C - Center, PTS - Points, REB - Rebounds, 3P% - 3 Point Field Goal Percentage
      </p>
    </>
  )
}

export default Stats
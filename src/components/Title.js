import titleImage from '../images/image-2.jpeg'

const Title = () => {
  return (
    /* Title */
    <div className="title m-3 p-5 text-white" 
    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${titleImage})`, 
    backgroundRepeat: "no-repeat", 
    backgroundSize: "cover",
    backgroundPosition: "center" }}>
      <h1 className="display-1 pb-2 fw-bolder">Lakers<br/>20-21 Playoff<br/>Summary</h1>
      <p className="fw-bolder">Coming off the 17th title in franchise history, won on Oct. 11, 2020 in the NBA finals against Miami, the Lakers entered the 2020-21 season with a clear goal of defending their crown, a mission that fell victim to injuries and the resulting lack of cohesion.</p>
    </div>
  )
}

export default Title
import farewellImage from '../images/image-6.jpeg'

const Farewell = () => {
  return (
    /* Thank You Note */
    <div className="title m-3 p-5 text-white" 
    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${farewellImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center" }}>
      <h1 className="display-3 pb-2 fw-bolder">Thank You!</h1>
      <p className="fw-bolder">We’re immensely proud of our team’s effort and resilience, and though this wasn’t the outcome we hoped for, it only fuels our determination for the future. With your continued support, we’re excited and motivated to come back stronger and reclaim our place at the top. Here’s to brighter days ahead and many more unforgettable moments together.</p>
    </div>
  )
}

export default Farewell
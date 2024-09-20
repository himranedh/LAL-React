import { useState } from 'react'

const StatAccordian = ({ title, index, playerData }) => {
    // Toggles the active state of accordian arrow
    const [arrow, arrowActive] = useState(true);
    const handleClick = () => {
        arrowActive(!arrow);
    }

    // Variable that shows desired number of stat leaders
    const topPlayers = 3;
    return (
        <div className="container-lg p-4">
            <div className="card">
                <div className="card-header sticky-top">
                    <h5 className="mb-0 fw-bold">{title}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    {/* Displays data for top players of each stat */}
                    {playerData.slice(0, topPlayers).map((element) => {
                        return (
                            <li key={element.pid} className="list-group-item d-flex justify-content-between pb-0">
                                <section>
                                    <p className="playerPosition">
                                        {element.pos}
                                    </p> 
                                    <p className="playerName ps-5 fw-medium">
                                        {element.fn} {element.ln}
                                    </p>
                                </section>
                                <section className="stat fw-medium">
                                    {/* Checks and print percent values with less than 2 decimals places */}
                                    {(index === 2) ? `${Math.round(element.val * 10000) / 100}%` : `${element.val}`}
                                </section>
                            </li>
                        );
                    })}
                    <div className="accordion-item">
                        <div id={"panelsStayOpen-collapse" + index} className="accordion-collapse collapse">
                            <div className="accordion-body">
                                {/* Displays data for the rest of the team within an accordian */}
                                {playerData.slice(topPlayers).map((element) => {
                                    return (
                                        <li key={element.pid} className="list-group-item d-flex justify-content-between border-start-0 border-top-0 border-end-0 pb-0">
                                            <section>
                                                <p className="playerPosition">
                                                    {element.pos}
                                                </p> 
                                                <p className="playerName ps-5 fw-medium">
                                                    {element.fn} {element.ln}
                                                </p>
                                            </section>
                                            <section className="stat fw-medium">
                                                {/* Checks and print percent values with less than 2 decimals places */}
                                                {(index === 2) ? `${Math.round(element.val * 10000) / 100}%` : `${element.val}`}
                                            </section>
                                        </li>
                                    );
                                })}
                            </div>
                        </div>
                        <h2 className="accordion-header">
                            <button className="flex-column accordion-button"
                            onClick={handleClick} 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target={"#panelsStayOpen-collapse" + index} 
                            aria-expanded="true" 
                            aria-controls={"panelsStayOpen-collapse" + index}>
                                {/* Toggles arrow's state */}
                                <i className={arrow ? "arrow display-5 fa-solid fa-angle-down" : "arrow active display-5 fa-solid fa-angle-down"}></i>
                            </button>
                        </h2>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default StatAccordian
import player from '../../json/points.json'
import StatAccordian from '../StatAccordian'

const Points = () => {
    // Provides index for each stat obtains data from json file
    const index = 0;
    const playerData = player.pts.pl;
    return (
        <>
            <StatAccordian
            key={playerData.pid}
            title="Points (PTS)"
            index={index}
            playerData={playerData}
            /> 
        </>
    )
}

export default Points
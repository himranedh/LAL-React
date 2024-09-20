import player from '../../json/rebounds.json'
import StatAccordian from '../StatAccordian'

const Rebounds = () => {
    // Provides index for each stat obtains data from json file
    const index = 1;
    const playerData = player.reb.pl;
    return (
        <>
            <StatAccordian
            key={playerData.pid}
            title="Rebounds (REB)"
            index={index}
            playerData={playerData}
            />
        </>
    )
}

export default Rebounds
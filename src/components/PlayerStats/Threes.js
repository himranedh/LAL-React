import player from '../../json/threepointers.json'
import StatAccordian from '../StatAccordian'

const Threes = () => {
    // Provides index for each stat obtains data from json file
    const index = 2;
    const playerData = player.tpp.pl;
    return (
        <>
            <StatAccordian
            key={playerData.pid}
            title="3 Point Percentage (3P%)"
            index={index}
            playerData={playerData}
            />
        </>
    )
}

export default Threes
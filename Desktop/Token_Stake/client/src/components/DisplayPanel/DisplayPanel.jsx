import EarnedReward from "./EarnedReward"
import RewardRate from "./RewardRate"
import StakedAmount from "./StakedAmount"




const DisplayPanel = () => {
    
    return (
        <div>
            <StakedAmount />
            <br />
            <RewardRate />
            <br />
            <EarnedReward />
            <br />
        </div>
    )  
}

export default DisplayPanel
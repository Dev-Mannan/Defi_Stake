import { useState,useContext,useEffect } from "react"
import { ethers, formatUnits } from "ethers"
import Web3Context from "../../context/Web3Context"



const RewardRate = () => {
    const {stakingContract,account}=useContext(Web3Context);
    const [rewardRate, setRewardRate] = useState("0")


    useEffect(() => {
        const fetchRewardRate = async () => {
            try{
                const rewardrategwei = await stakingContract.REWARD_RATE();
                const rewardRateeth =  ethers.formatUnits(rewardrategwei.toString(), 18);
                console.log(rewardRateeth);
                setRewardRate(rewardRateeth);
            }catch(error){
                console.log("Error while fetching data", error);
        }
    }
    stakingContract && fetchRewardRate();
    },[stakingContract,account])

    return (
        <div>
            <p className="text-2xl font-bold text-white">Reward Rate👉 {rewardRate} Token/per second</p>
        </div>
    )

}

export default RewardRate
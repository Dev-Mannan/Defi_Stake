import { useState,useContext,useEffect } from "react"
import { ethers, formatUnits } from "ethers"
import Web3Context from "../../context/Web3Context"



const EarnedReward = () => {

    const {stakingContract,account}=useContext(Web3Context);
    const [rewardVal,setRewardVal]=useState("0");

    useEffect(()=>{
      const fetchStakeRewardInfo =async()=>{
          try{
            //fetching earned amount of a user
             const rewardValueWei = await stakingContract.earned(account);
             const rewardValueEth = ethers.formatUnits(rewardValueWei.toString(), 18)
             const roundedReward = parseFloat(rewardValueEth).toFixed(2)
            //  console.log(rewardValueEth)
             setRewardVal(roundedReward)
          }catch(error){
            console.error(error.message)
          }
        }
          const interval = setInterval(()=>{
            stakingContract && fetchStakeRewardInfo();
          },2000)
          return ()=> clearInterval(interval)
    },[stakingContract,account])
  
    return(
      <div>
        <p className="text-2xl font-bold text-white">Earned Reward👇</p>
        <span className="text-2xl text-white">{rewardVal}</span>
    </div>
    )
  }
  export default EarnedReward;
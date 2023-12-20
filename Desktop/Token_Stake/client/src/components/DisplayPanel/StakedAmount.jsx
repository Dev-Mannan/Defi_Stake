import { useState, useEffect, useContext } from "react";
import Web3Context from "../../context/Web3Context";
import { ethers, formatUnits } from "ethers";

const StakedAmount = () => {
  const { stakingContract, account } = useContext(Web3Context);
  const [stakedAmount, setStakedAmount] = useState("0");

  useEffect(() => {
    const fetchStakedBalance = async () => {
      try {
        const amountStakedWei = await stakingContract.stakedBalance(account);
        const amountStakedETH = formatUnits(amountStakedWei.toString(), 18);
        console.log(amountStakedETH);
        setStakedAmount(amountStakedETH);
      } catch (error) {
        console.log("Error while fetching data", error)
      }
    };
    stakingContract && fetchStakedBalance();
  }, [stakingContract, account]);

  return (
    <div>
      <p className="text-2xl font-bold text-white">Staked Amount 👉 {stakedAmount}</p>
    </div>
  );
};

export default StakedAmount;

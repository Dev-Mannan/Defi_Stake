import { useContext, useRef, useState } from "react";
import Web3Context from "../../context/Web3Context";
import { ethers } from "ethers";
import Button from "../Button/Button";

const ClaimReward = () => {
  const { stakingContract } = useContext(Web3Context);
  const [transactionstatus, setTransactionstatus] = useState("");

  const ClaimReward = async () => {
    try {
      const transaction = await stakingContract.getReward();
      setTransactionstatus("Transaction is in progress");
      const receipt = await transaction.wait();
      if (receipt.status === 1) {
        setTransactionstatus("Transaction is Successful");
        setTimeout(() => {
          setTransactionstatus("");
        }, 5000);
      } else {
        setTransactionstatus("Transaction Failed");
      }
      console.log(transaction);
    } catch (err) {
      console.log(err, "Claim reward Failed");
    }
  };

  return (
    <div>
      {transactionstatus && <div>{transactionstatus}</div>}
      <Button type='button' label="Claim Reward" onClick={ClaimReward} />
    </div>
  );
};

export default ClaimReward;

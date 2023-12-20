import { useContext } from "react";
import Web3Context from "../../context/Web3Context";

const ConnectedAccount = () => {
  const {account} = useContext(Web3Context);
  return (
    <div className="flex flex-wrap ">
        <h2 className="text-2xl font-bold text-gray-300">Connected Account &nbsp;{account }</h2>
        
        <br />
    </div>
  );
};

export default ConnectedAccount;
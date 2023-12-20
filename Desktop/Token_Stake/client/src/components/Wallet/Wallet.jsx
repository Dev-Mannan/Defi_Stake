import React, { useEffect, useState } from "react";
import { connectWallet } from "../../utils/connectWallet";
import Web3Context from "../../context/Web3Context";
import { HandleChange } from "../../utils/HandleChange";
import { HandleAccountChange } from "../../utils/HandleAccountChange";
import Button from '../Button/Button';


const Wallet = ({children}) => {
  const [state, setState] = useState({
    provider: null,
    account: null,
    stakingContract: null,
    StakeTokenContract: null,
    chainId: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      window.ethereum.on('accountsChanged', () =>HandleAccountChange(setState));
      window.ethereum.on('chainChanged', () =>HandleChange(setState));

    return () => {
        window.ethereum.removeListener('accountsChanged',() =>handleAccountsChanged(setState));
        window.ethereum.removeListener('chainChanged',()=> handleChainChanged(setState));
    }



  }, []);

  const handleWallet = async () => {
    try {
      setIsLoading(true);
      const { provider, account, stakingContract, StakeTokenContract, chainId } = await connectWallet();
      // console.log(provider, account, stakingContract, StakeTokenContract, chainId);
      setState({ provider, account, stakingContract, StakeTokenContract, chainId });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Web3Context.Provider value={state}>
        {children}
      </Web3Context.Provider>
    {isLoading && <p className="text-gradient">Loading...</p>}
      <br />
      <Button
        onClick={handleWallet} type="button" label="Connect Wallet"/>
    </div>
  );
};

export default Wallet;

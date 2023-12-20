import {Contract, ethers } from 'ethers'
import stakingAbi from "../ABI/stakingAbi.json"
import stakeTokenAbi from "../ABI/stakeTokenAbi.json";


export const connectWallet = async () => {
    try{
        let [signer,provider,stakingContract,StakeTokenContract,chainId] = [null,null,null,null,null,null]
        if(window.ethereum===null){
            throw new Error('No crypto wallet found')
        }
        const accounts = await window.ethereum.request({method:'eth_requestAccounts'})
        let chainIdHex = await window.ethereum.request({method:'eth_chainId'})
        chainId = parseInt(chainIdHex,16)
        let selectedAccount = accounts[0]
        if(!selectedAccount){
            throw new Error('No  ethereum available')
        }

        provider = new ethers.BrowserProvider(window.ethereum)
        signer = await provider.getSigner()

        const stakingContractAddress = '0x4910B7A89D3BaD6B6331c6cA497F8e057670cB82'
        const stakeTokenContractAddress = '0x9e83c806b4e18565eb06a02e3ef5a60d3b90dd06'

        stakingContract = new Contract(stakingContractAddress,stakingAbi,signer)
        StakeTokenContract = new Contract(stakeTokenContractAddress,stakeTokenAbi,signer)

        return{provider,account:selectedAccount,stakingContract,StakeTokenContract,chainId}

    }catch(error){
        console.log(error)
    }
}

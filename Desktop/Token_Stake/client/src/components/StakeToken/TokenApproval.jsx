import { ethers } from "ethers"
import { useState,useContext,useRef } from "react"
import Button from "../Button/Button"
import Web3Context from "../../context/Web3Context"


const TokenApproval = () => {

    const {StakeTokenContract,stakingContract,provider} = useContext(Web3Context)

    const approvedTokenRef = useRef()

    const [transactionstatus, setTransactionstatus] = useState("")

    const approveToken = async(e)=>{
        e.preventDefault()
        const amount = approvedTokenRef.current.value.trim()

        if(isNaN(amount) || amount <= 0){
            console.log("Please enter valid positive number")
            return;
        }

        const amounttosend = ethers.parseUnits(amount, 18).toString();
        try{
            const transaction = await StakeTokenContract.approve(stakingContract.target,amounttosend)
            setTransactionstatus("Transaction is in progress")
            const receipt = await transaction.wait()
            if(receipt.status === 1){
                setTransactionstatus("Transaction is Successful")
                setTimeout(()=>{
                    setTransactionstatus("")
                },5000)
                approvedTokenRef.current.value = ""
            }else{
                setTransactionstatus("Transaction Failed")
            }
            console.log(transaction)
        }catch(err){
            console.log(err)
        }

    }


    return (
        <div>
            <form onSubmit={approveToken}>

                <label htmlFor="" className="text-2xl font-bold text-white">Token Approval &nbsp;</label>
                <input className="white-glassmorphism text-2xl" type="text"ref={approvedTokenRef} placeholder="&nbsp;Enter Approve Token"></input>
                <span>&nbsp;</span>
                <Button onClick={approveToken}  type="submit" label="Token Approval"/>
                <br />
                <p className="text-1xl text-white">{transactionstatus}</p>

            </form>
        </div>
    )
}

export default TokenApproval
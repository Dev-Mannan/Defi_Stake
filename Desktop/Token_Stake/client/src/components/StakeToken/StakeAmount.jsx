import { useContext,useRef,useState } from "react"
import Web3Context from "../../context/Web3Context"
import { ethers } from "ethers"
import Button from "../Button/Button"



const StakeAmount = () => {

    const {stakingContract,provider} = useContext(Web3Context)
    const [transactionstatus, setTransactionstatus] = useState("")
    const stakeAmountRef = useRef()

    const stakeToken = async(e)=>{
        e.preventDefault()
        const amount = stakeAmountRef.current.value.trim()

        if(isNaN(amount) || amount <= 0){
            console.log("Please enter valid positive number")
            return;
        }
        const amountToStake = ethers.parseUnits(amount, 18).toString()
        try{
            const transaction = await stakingContract.stake(amountToStake)
            setTransactionstatus("Transaction is in progress")
            const receipt = await transaction.wait()
            if(receipt.status === 1){
                setTransactionstatus("Transaction is Successful")
                setTimeout(()=>{
                    setTransactionstatus("")
                },5000)
                stakeAmountRef.current.value = ""
            }else{
                setTransactionstatus("Transaction Failed")
            }
            console.log(transaction)

        }catch(err){
            console.log(err,"Token Approved Failed")
        }
    }

    return (
        <div>
            {transactionstatus && <div>{transactionstatus}</div>}
            <form onSubmit={stakeToken}>
                <label htmlFor="" className="text-2xl font-bold text-white" >Stake Amount &nbsp; </label>
                <input className="white-glassmorphism text-2xl" type="text" ref={stakeAmountRef} placeholder="&nbsp;Enter Stake Amount"></input> 
                <span>&nbsp; &nbsp;</span>
                <Button onClick={stakeToken}  type="submit" label="Stake Token"/>
            </form>
        </div>
    )
    
}

export default StakeAmount
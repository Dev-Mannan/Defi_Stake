import { useContext,useRef,useState } from "react"
import Web3Context from "../../context/Web3Context"
import { ethers } from "ethers"
import Button from "../Button/Button"



const WithdrawStakeAmount = () => {

    const {stakingContract,provider} = useContext(Web3Context)
    const [transactionstatus, setTransactionstatus] = useState("")
    const WithdrawstakeAmountRef = useRef()

    const stakeToken = async(e)=>{
        e.preventDefault()
        const amount = WithdrawstakeAmountRef.current.value.trim()

        if(isNaN(amount) || amount <= 0){
            console.log("Please enter valid positive number")
            return;
        }
        const Withdrawamount = ethers.parseUnits(amount, 18).toString()
        try{
            const transaction = await stakingContract.WithdrawstakeToken(Withdrawamount)
            setTransactionstatus("Transaction is in progress")
            const receipt = await transaction.wait()
            if(receipt.status === 1){
                setTransactionstatus("Transaction is Successful")
                setTimeout(()=>{
                    setTransactionstatus("")
                },5000)
                WithdrawstakeAmountRef.current.value = ""
            }else{
                setTransactionstatus("Transaction Failed")
            }
            console.log(transaction)

        }catch(err){
            console.log(err,"Token Withdraw Failed")
        }
    }

    return (
        <div>
            {transactionstatus && <div>{transactionstatus}</div>}
            <form onSubmit={WithdrawstakeToken}>
                <label htmlFor="" className="text-2xl font-bold">Withdraw Amount : </label>
                <input type="text" ref={WithdrawstakeAmountRef}></input> 
                <span>&nbsp;</span>
                <Button onClick={WithdrawstakeToken}  type="submit" label="Withdraw Stake Token"/>
            </form>
        </div>
    )
    
}

export default WithdrawStakeAmount
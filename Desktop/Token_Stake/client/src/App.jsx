import Wallet from "./components/Wallet/Wallet"
import './App.css'
import Navigation from "./components/Navigation/Navigation"
import DisplayPanel from "./components/DisplayPanel/DisplayPanel"
import TokenApproval from "./components/StakeToken/TokenApproval"
import StakeAmount from "./components/StakeToken/StakeAmount"
import Withdraw from "./components/Withdraw/Withdraw"
import ClaimReward from "./components/ClaimReward/ClaimedReward"



function App() {
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">Stake Token on Sepolia Test</h1>
      <Wallet >
        <Navigation  />
        <DisplayPanel />
        <br />
        <StakeAmount />
        <br />
        <TokenApproval /> &nbsp;<ClaimReward /> 
        <br />
       
         
        
      </Wallet>
      
    </div>
  )
}

export default App

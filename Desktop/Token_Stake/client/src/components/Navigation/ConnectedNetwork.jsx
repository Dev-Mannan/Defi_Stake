
import Web3Context from "../../context/Web3Context"
import { useContext } from "react"

const ConnectedNetwork = () => {
    const {chainId} = useContext(Web3Context)

    if(chainId===11155111){

        return  <div className="flex flex-col gap-2 p-3">
        <p className="text-2xl font-bold text-gray-300" >  Connected Network : Sepolia Test</p>
        </div>
        
    }else if(chainId===1){
        return <p className="text-2xl font-bold text-gray-300">Connected Network : Ethereum</p>
    }
    else{
        return <p className="text-2xl font-bold text-gray-300">Connected Network : Unsupported Network</p>
    }
    }

export default ConnectedNetwork
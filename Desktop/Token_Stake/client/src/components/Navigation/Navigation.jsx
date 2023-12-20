import ConnectedAccount from "./ConnectedAccount"
import ConnectedNetwork from "./ConnectedNetwork"

const Navigation = () => {
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <ConnectedAccount />
            <ConnectedNetwork />
        </nav>
    )
}

export default Navigation
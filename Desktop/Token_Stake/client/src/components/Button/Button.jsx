const Button = ({onClick,label,type}) => {
    return (
        <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-2 rounded"  type={type} onClick={onClick}>{label}</button>
    )
}

export default Button
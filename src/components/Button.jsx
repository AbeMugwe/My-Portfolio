const Button=({tx},{functionality,color})=>{
    <button onClick={functionality} className={`${color} h-10 w-28}`}>
        {tx}
    </button>
}

export default Button
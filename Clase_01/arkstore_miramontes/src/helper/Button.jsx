export const Button = ( {children, click} ) => {
    return (
        <button className="border-2 border-gray-300 text-yellow-300 bg-black font-semibold mx-10 rounded-2xl my-1 hover:bg-yellow-500 hover:text-black hover:border-black text-base px-1" onClick={click}>{children}</button>
    )
}

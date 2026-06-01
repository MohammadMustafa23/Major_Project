import Logo from '../../assets/Logo.png'
export default function Head() {
    return (
        <div className="h-20 w-screen flex justify-center items-center border-b-2 border-gray-300">
            
                <div className=" h-15 w-screen flex justify-start items-center" >
                    <img src={Logo} className='h-15' w-15 ml-10/>
                    <div className='ml-10 flex  w-60 align-center justify-between'>
                        <a href="">Home</a>
                        <a href="">All Listing</a>
                        <a href="">Add Home</a>
                    </div>
               </div>
        </div>
    )
}
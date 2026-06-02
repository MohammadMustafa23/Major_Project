import HouseCard from '../Main/HouseCard'
export default function HomeScreen() {
    return (
        <div className="h-screen w-screen ">
            <div className="h-10 w-screen text-2xl flex justify-start items-center pl-25 mt-5 "> All Listings </div>
            <HouseCard/>
        </div>
    )
}
import HouseCard from '../Main/HouseCard'
export default function HomeScreen() {
    return (
        <div className="h-screen w-screen bg-red-500">
            <div className="h-10 w-screen bg-yellow-400 text-2xl flex justify-start items-center pl-15 "> All Listings </div>
            <HouseCard/>
        </div>
    )
}
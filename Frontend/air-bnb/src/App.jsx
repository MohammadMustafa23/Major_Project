import Head from "./Components/Header/Head"
import HomeScreen from "./Components/Main/HomeScreen"
export default function App() {
  return (
     <div className="h-screen w-screen flex-col">
        <Head/>
        <HomeScreen/>
     </div>
  )
}


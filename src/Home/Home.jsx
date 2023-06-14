import Header from "./Header"
import Layout from "../Components/Layout"

const Home = () => {
  return (
    <div
     className="h-screen w-screen overflow-x-hidden"
      style={{background: 'radial-gradient(61.44% 64.31% at 55% 97.85%, #DC2626 0%, #7F1D1D 100%)'}}
    >
      <Layout />
      <Header />
    </div>
  )
}

export default Home
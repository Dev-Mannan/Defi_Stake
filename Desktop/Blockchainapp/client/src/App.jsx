import { Navbar , Transactions, Loader , Welcome, Footer, Services } from "./Components"

const App = () => {
  

  return (
    <>
        <div className='min-h-screen'>

          <div className="gradient-bg-welcome">
            <Navbar />
            <Welcome />

          </div>
          <Services />
          <Footer />
          <Transactions />
         
          
        </div>
    </>
  )
}

export default App

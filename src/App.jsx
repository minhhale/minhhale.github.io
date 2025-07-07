import { BrowserRouter} from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'

const App = () => {
  return (
   <BrowserRouter>
    <div className="relative z-0 text-white bg-gradient-to-r from-violet-600 to-indigo-600">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Tech />
      <Works />
      <Experience />
      {/* <Feedbacks /> */}
      <div className="relative z-0">
        <Contact />
      </div>      
      {/* <StarsCanvas /> */}
    </div>
   </BrowserRouter>
  )
}

export default App
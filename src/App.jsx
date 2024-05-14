
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainSection from './Components/Main/MainSection'
import Project from './Components/Projects/ProjectSection'
import Contact from './Components/Contact/ContactSection'
import Resume from './Components/Resume/ResumeSection'

function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' className="home-one" element={<MainSection />} />
           <Route path='/Resume' className="home-one" element={<Resume/>} /> 
           <Route path='/Projects' className="home-one" element={<Project />} />
            <Route path='/Contact' className="home-one" element={<Contact />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App

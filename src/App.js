import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Container} from './components/index'
import { Home } from './Pages'
import Profile from './Pages/Profile/Profile'
import {Header, Footer} from './sections/index'

const App = () => {
  return (
    <>
      <Router basename = {'/react/cyborg'}>
        <Header />
        <Container>
          <Routes>
            <Route path='/' element = {<Home />}/> 
            <Route path='/profile' element = {<Profile />}/> 
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;

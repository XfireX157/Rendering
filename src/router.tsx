
import GlobalStyle from 'GlobalStyle'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'

const RouterDom = () => {
    return(
        <Router>
            <GlobalStyle/>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        </Router>
    )
}

export default RouterDom
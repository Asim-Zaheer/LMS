
import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Signup from "./Signup"
import Login from "./login"
export default function AppRouter(){
    return(
        <>
    <Router>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="signup" element={<Signup/>}  />

        </Routes>
    </Router>
        </>
    )
}
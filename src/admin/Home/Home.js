import { Footer } from "../Footer/Footer"
import {Navbar} from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"





export const AdminHome=()=>{
    return(
        <div>
            <Navbar/>
                <Sidebar/>
            <Footer/>
        </div>
    )
}
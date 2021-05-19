import logo from '../Assets/logo.png'
import Cart from '../Assets/Cart.png'
import wishlist from '../Assets/wishlist.png'
import users from '../Assets/users.png'
import search from '../Assets/searchiicon.png'
import './Navbar.css'
import {features} from './localdatal'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className="Body">
            <div className="Container">
                <div className="ImageDiv">
               <Link  to="/"> <img className="image" src={logo} alt="" /></Link>  
                </div>
                <div className="SearchBar">
                    <div className="CategoryBar">
                       <select name="Category" className="cat">
                       <option value="all Categories">All Category</option>
                           <option value="ornamental">Ornamental</option>
                           <option value="vagetable">vagetable</option>
                           <option value="flower">Flower</option>
                       </select>

                    </div>
                    <div className="SearchInput" >
                        <input type="text" placeholder="Search"  />
                    </div>
                    <div className="searchIcon">
                        <img src={search} alt="" />
                    </div>
                    </div>
                    <div className="DataContainer">
                        <div>
                        <img src={Cart} alt="cart" />
                        <Link className="link" to="/cart" > Cart</Link>
                        </div>
                        <div>
                        <img src={wishlist} alt="wishlist" />
                      <Link className="link" to="/wishlist" >  Wishlist</Link>
                        </div>
                        <div>
                        <img src={users} alt="user" />
                        <Link className="link" to="/user" > User</Link>
                        </div>
                    </div>
            </div>
            <div className="CategoryContainer" >
            {features.map(el=><Link className="link" to={el.to}>{el.contain}</Link>)}       
          </div>
            
        </div>
    )
}

export default Navbar

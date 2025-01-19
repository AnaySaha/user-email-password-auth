import { Link, NavLink } from "react-router-dom";


const header = () => {

    const navLinks = <>
    <li><NavLink to={"/src/Home/Home.jsx"}>Home</NavLink></li>
    <li><NavLink to={"/src/components/Login/Login.jsx"}>Login</NavLink></li>
    <li><NavLink to={"/src/components/Register/Register.jsx"}></NavLink>Register</li>
    </>
    return (
        <div className="join">
  <input
    className="join-item btn btn-square"
    type="radio"
    name="options"
    aria-label="1"
    defaultChecked />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
</div>
    );
};

export default header;
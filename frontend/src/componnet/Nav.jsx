import { Link, useNavigate } from "react-router";
import { getUser } from "../Api/apiUsers";

export default function Nav() {
    const navigate = useNavigate()
    async function handleClick() {
        localStorage.removeItem('token')
        navigate("/login")
    }
    async function handleClickAlret() {
        const user = await getUser()
        console.log(user);
        
        alert(`username: ${user.username} role: ${user.user_type}`)
    }

    return (
        <>
            <nav>
                <Link to="/">Home</Link> | {""}
                <Link to="/launcher">Add launcher</Link> | {""}
                <Link to="/register">Register</Link>
                <button onClick={handleClickAlret}>alret user clike</button>
                <button onClick={handleClick}>Log Out</button>
            </nav>
        </>
    )
}


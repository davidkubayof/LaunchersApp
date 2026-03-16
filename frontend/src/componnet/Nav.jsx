import { Link } from "react-router";

export default function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/launcher">add launcher</Link>
        </nav>
    )
}

import { useState } from "react"
import { loginUser } from "../Api/apiUsers"

export default function LoginPage() {
    const [data, setData] = useState({
        username: "",
        password: ""
    })
    console.log(data);
    
    async function handleSumbite() {
        event.preventDefault()
        const res = await loginUser(data)
        console.log(res);
    }
    return (
        <>
            <div>LoginPage</div>
            <form onSubmit={ handleSumbite }>
                <input type="text" required placeholder="username" onChange={(e) => { setData({ ...data, username: e.target.value }) }} />
                <input type="password" required placeholder="password" onChange={(e) => { setData({ ...data, password: e.target.value }) }} />
                <button type="submit">login</button>
            </form>
        </>
    )
}

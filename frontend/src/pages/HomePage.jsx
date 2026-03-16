import { useEffect, useState } from "react"
import { getAll } from "../Api/apiLaunchers"

export default function HomePage() {
    const [leunchers, setLeunchers] = useState([])

    useEffect(() => {
        getAllLaunchers()
    }, [])

    async function getAllLaunchers() {
        try {
            const { launchers } = await getAll()
            setLeunchers(launchers)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div>HomePage</div>
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>city</th>
                    <th>rocketType</th>
                    <th>latitude</th>
                    <th>longitude</th>
                </tr>
                {leunchers.map(item => (
                    <tr>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.city}</td>
                        <td>{item.rocketType}</td>
                        <td>{item.latitude}</td>
                        <td>{item.longitude}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}

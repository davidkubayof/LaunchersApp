const url = 'http://localhost:3000/api/auth'

export async function loginUser({ username, password }) {
    const res = await fetch(url + "/login", {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" }
    })
    if (!res.ok) {
        return "faild to fetch"
    }
    return await res.json()
}

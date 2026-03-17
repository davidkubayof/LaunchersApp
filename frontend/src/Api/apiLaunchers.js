const url = 'http://localhost:3000/api/launchers'

export async function getAll() {
    const res = await fetch(url)
    if (!res.ok) {
        return "faild to fetch"
    }
    return await res.json()
}
export async function getById(id) {
    const res = await fetch(url + `/${id}`)
    if (!res.ok) {
        return "faild to fetch"
    }
    return await res.json()
}
export async function createLeunchers(leuncher) {
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(leuncher),
        headers: { "Content-Type": "application/json" }
    })
    if (!res.ok) {
        return "faild to fetch"
    }
    return await res.json()
}
export async function deletById(id) {
    const res = await fetch(url + `/${id}`, {
        method: 'DELETE'
    })
    if (!res.ok) {
        return "faild to fetch"
    }
    return await res.json()
}
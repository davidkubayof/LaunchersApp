const url = 'http://localhost:3000/api/launchers'

export async function getAll() {
    const res = await fetch(url)
    if(!res.ok){
        return "faild to fetch"
    }
    return await res.json()
}
export async function getById(id) {
    const res = await fetch(url + `/${id}`)
    if(!res.ok){
        return "faild to fetch"
    }
    return await res.json()
}
import { playlistURL } from "@/flask/URL"

function getFlaskTest(username){
    return fetch(playlistURL+username, {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
    }).then(res => {
        if (res.ok){
            return Promise.resolve(res.json())
        } else {
            return Promise.reject(new Error(res.json()))
        }
    })
}

export const flaskTest = {
    getFlaskTest
}
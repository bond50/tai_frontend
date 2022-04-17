import {handleResponse, isAuth} from "./auth";
import {API} from "../config";

export const createService = (blog, token) => {
    let blogEndpoint

    if (isAuth() && isAuth().role === 1) {
        blogEndpoint = `${API}/service`
    } else if (isAuth() && isAuth().role === 0) {
        blogEndpoint = `${API}/user/service`
    }

    return fetch(`${blogEndpoint}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: blog
    })
        .then(response => {
            handleResponse(response)
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singlePage = (slug) => {
    return fetch(`${API}/service/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const list = (username) => {
    let listEndpoint
    if (username) {
        listEndpoint = `${API}/${username}/services`
    } else {
        listEndpoint = `${API}/services`
    }


    return fetch(`${listEndpoint}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const removePage = (slug, token) => {
    let deleteEndpoint
    if (isAuth() && isAuth().role === 1) {
        deleteEndpoint = `${API}/service/${slug}`
    } else if (isAuth() && isAuth().role === 0) {
        deleteEndpoint = `${API}/user/service/${slug}`
    }

    return fetch(`${deleteEndpoint}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            handleResponse(response)
            return response.json();
        })
        .catch(err => console.log(err));
};


export const listRelated = (page) => {
    return fetch(`${API}/service/related`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(page)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const updatePage = (page, token, slug) => {
    let updateEndpoint

    if (isAuth() && isAuth().role === 1) {
        updateEndpoint = `${API}/service/${slug}`

    } else if (isAuth() && isAuth().role === 0) {
        updateEndpoint = `${API}/user/service/${slug}`
    }


    return fetch(`${updateEndpoint}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: page
    })
        .then(response => {
            handleResponse(response)
            return response.json();
        })
        .catch(err => console.log(err));
};


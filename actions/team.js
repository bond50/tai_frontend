import {API} from "../config";
import {handleResponse, isAuth} from "./auth";
import fetch from "isomorphic-fetch";


export const create = (user) => {
    return fetch(`${API}/team-member`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const listSingle = username => {
    return fetch(`${API}/team/${username}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getTeamMember = (token, id) => {
    return fetch(`${API}/team-member/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            handleResponse(response)
            return response.json();
        })
        .catch(err => console.log(err));
};
export const update = (token, user, loadedId) => {

    return fetch(`${API}/team-member/${loadedId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: user
    })
        .then(response => {
            handleResponse(response)
            return response.json();
        })
        .catch(err => console.log(err));
};
export const removeMember = (token, id) => {
    if (isAuth() && isAuth().role === 1) {
        return fetch(`${API}/team-member/${id}`, {
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
    }
};

const baseUrl = 'https://baas.kinvey.com';
const appKey = 'kid_ry2IULVyz';
const appSecret = '59e78525e6fc46a7b71b536f3944dc78';

// const kinveyTokens = {baseUrl, appKey, appSecret};
let reqHandler = {
    login: payload => {
       return fetch(`${baseUrl}/user/${appKey}/login`, {
            method: 'POST',
            headers: {
                Authorization: 'Basic ' + btoa(`${appKey}:${appSecret}`),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res =>{
            return res.json()
        })
    },
    register: payload => {
        return fetch(`${baseUrl}/user/${appKey}/`, {
            method: 'POST',
            headers: {
                Authorization: `Basic ` + btoa(`${appKey}:${appSecret}`),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res => {
            return res.json()
        })
    },
    getAllPosts: ()=>{
        return fetch(`${baseUrl}/appdata/${appKey}/posts?query={}&sort={"_kmd.ect": -1}`,{
            method: 'GET',
            headers: {
                Authorization: 'Kinvey ' + localStorage.getItem('token')
            }
        }).then(res=>{
            return res.json();
        })
    },
    createPost: payload=>{
        return fetch(`${baseUrl}/appdata/${appKey}/posts`, {
            method: 'POST',
            headers: {
                Authorization: 'Kinvey ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res=>{
            return res.json();
        })
    },
    editPost: (payload, postId)=>{
        return fetch(`${baseUrl}/appdata/${appKey}/posts/${postId}`, {
            method: 'PUT',
            headers:{
                Authorization: 'Kinvey ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res =>{
            return res.json();
        })
    },
    deletePost: (payload)=>{
        return fetch(`${baseUrl}/appdata/${appKey}/posts/${payload} `,{
            method: 'DELETE',
            headers: {
                Authorization: 'Kinvey ' + localStorage.getItem('token')
            }
        }).then(()=>{
            window.location.reload();
        })
    },
    getMyPosts: () =>{
        return fetch(`${baseUrl}/appdata/${appKey}/posts?query={"author":"${localStorage.getItem('username')}"}&sort={"_kmd.ect": -1}`,{
            method: 'GET',
            headers: {
                Authorization: 'Kinvey ' + localStorage.getItem('token')
            }
        }).then(res=>{
            return res.json();
        })
    },
    getPostDetails: postId =>{
        return fetch(`${baseUrl}/appdata/${appKey}/posts/${postId}`,{
            method: 'GET',
            headers: {
                Authorization: 'Kinvey ' + localStorage.getItem('token')
            }
        }).then(res=>{
            return res.json();
        })
    },
    getPostComments: postId =>{
        return fetch(`${baseUrl}/appdata/${appKey}/comments?query={"postId":"${postId}"}&sort={"_kmd.ect": -1}`, {
            method: 'GET',
            headers: {
                Authorization: 'Kinvey ' + localStorage.getItem('token')
            }
        }).then(res=>{
            return res.json();
        })
    },
    createComment: (payload)=>{
        return fetch (`${baseUrl}/appdata/${appKey}/comments`, {
            method: 'POST',
            headers: {
                Authorization: 'Kinvey ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res =>{
            return res.json();
        })
    },
    deleteComment: (payload)=>{
        return fetch(`${baseUrl}/appdata/${appKey}/comments/${payload}`, {
            method: 'DELETE',
            headers: {
                Authorization: 'Kinvey ' + localStorage.getItem('token')
            }
        }).then(()=>{
            window.location.reload();
        })
}
};

export default reqHandler;
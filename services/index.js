const apiUrl = 'https://messenger-django-api.herokuapp.com/'

export const login = async (user) => {
    const resp = await fetch(apiUrl + 'auth/users/login/',
        {
            method: 'POST',
            headers: {
                "Content-Type": 'Application/JSON'                
            },
            body: JSON.stringify(user)  
        }
    ).then(response => response.json())
    return resp
}

export const getMessages = async (token) => {
    const resp = await fetch(apiUrl + 'cloud_msg/messages/',
        {
            method: 'GET',
            headers: {
                "Content-Type": 'Application/JSON',
                "Authorization": `JWT ${token}`               
            }  
        }
    ).then(response => response.json())
    return resp
}
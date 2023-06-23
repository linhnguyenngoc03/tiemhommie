export const createUserApi = async (email : any, phoneNumber : any, address : any, userUid : any, userName: any) => {
    const response = await fetch('http://localhost:8080/api/user/createUser', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        // Send your data in the request body as JSON
        body: JSON.stringify({
            email: email,
            phoneNumber: phoneNumber,
            address: address,
            userName: userName,
            userUid: userUid,
          })
    })
    return response.ok
}
export const getUserBackendApi =async (userUid: any) => {
    const response = await fetch(`http://localhost:8080/api/user/getUserByUserUid?userUid=${userUid}`)
    if (response.ok) {
        const userBackend : any = await response.json()
        return userBackend
    } else {
        return null
    }
}

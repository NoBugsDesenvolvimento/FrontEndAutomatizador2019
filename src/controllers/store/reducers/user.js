export default function user(state = null, action) {
    switch(action.type){
        case "SET_USER":
            return action.user
        case "LOGIN":
            let expire = new Date();
            expire.setMinutes(expire.getMinutes() + action.data.token.expires)
            document.cookie=`token=${action.data.token.data};expires=${expire.toGMTString()}`
            return action.data.user
        case "LOGOFF":
            return null
        default:
            return state
    }
}
export default function user(state = null, action) {
    switch(action.type){
        case "SET_USER":
            return action.user
        case "LOGIN":
            let expire = new Date();
            expire.setMinutes(expire.getMinutes() + action.data.token.expires)
            document.cookie=`token=${action.data.token.data};expires=${expire.toGMTString()}`
            let user = action.data.user;
            user.token = action.data.token.data
            return user
        case "LOGOFF":
            document.cookie=""
            return null
        default:
            return state
    }
}
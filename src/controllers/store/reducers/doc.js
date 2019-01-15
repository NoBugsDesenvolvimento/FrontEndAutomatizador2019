export default function doc(state={ data: "[]", autor: "" },action) {
    switch(action.type){
        case "SET_BACKUP":
            return action.doc
        default:
            return state
    }
}
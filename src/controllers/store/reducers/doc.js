export default function doc(state={ data: "[]", autor: "" },action) {
    switch(action.type){
        case "SET_DOC":
            return action.doc
        default:
            return state
    }
}
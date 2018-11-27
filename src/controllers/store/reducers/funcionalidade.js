export default function funcionalidade(state= [],action) {
    switch(action.type){
        case("ADD_FUNC"):
            return [...state,action.data]
        default:
            return state
    }
}
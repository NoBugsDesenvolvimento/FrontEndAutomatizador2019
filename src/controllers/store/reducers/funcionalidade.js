/*
    Autor: Matheus dos Reis <matheusdrdj@gmail.com>
    Data: 06/12/2018
*/

export default function funcionalidade(state= [],action) {
    switch(action.type){
        case("ADD_FUNC"):
            return [...state,action.data];
        case("REMOVE_FUNC"):
            console.log("Remover")
            console.log(state.filter((item,id) => id !== action.index))
            return state.filter((item,id) => id !== action.index)
        case("SET_LIST"):
            return JSON.parse(action.list)
        default:
            return state
    }
}
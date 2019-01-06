/*
    Autor: Matheus dos Reis <matheusdrdj@gmail.com>
    Data: 06/12/2018
*/

export default function funcionalidade(state= [],action) {
    switch(action.type){
        case("ADD_FUNC"):
            return [...state,action.data];
        case("REMOVE_FUNC"):
            return state.filter((item,id) => id !== action.index)
        default:
            return state
    }
}
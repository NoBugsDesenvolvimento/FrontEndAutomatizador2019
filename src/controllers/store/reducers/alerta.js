/*
    Autor: Matheus dos Reis <matheusdrdj@gmail.com>
    Data: 06/12/2018
*/

export default function message(state={show: false,message: "",color: "", status: 0},action){
    switch(action.type){
        case("SHOW_MESSAGE"):
            return action.data
        case("HIDE_MESSAGE"):
            return {show: false,message: "",color: "", status: null}
        default:
            return state
    }
}
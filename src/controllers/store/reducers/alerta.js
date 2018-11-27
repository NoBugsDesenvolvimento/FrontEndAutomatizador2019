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
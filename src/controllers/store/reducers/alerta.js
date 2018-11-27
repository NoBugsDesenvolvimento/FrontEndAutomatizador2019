export default function message(state={show: false,message: "",color: "", status: 0},action){
    switch(action.type){
        case("SHOW"):
            return action.data
        case("HIDE"):
            return {show: false,message: "",color: "", status: null}
        default:
            return state
    }
}
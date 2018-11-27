import { combineReducers } from "redux"

import FuncionalidadesReducer from "./reducers/funcionalidade"
import MessageReducer from "./reducers/alerta"

const reducers = combineReducers({
    funcionalidades: FuncionalidadesReducer,
    message: MessageReducer
})

export default reducers
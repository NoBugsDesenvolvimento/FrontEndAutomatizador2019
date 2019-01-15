import { combineReducers } from "redux"

import FuncionalidadesReducer from "./reducers/funcionalidade"
import MessageReducer from "./reducers/alerta"
import DocReducer from "./reducers/doc"

const reducers = combineReducers({
    funcionalidades: FuncionalidadesReducer,
    message: MessageReducer,
    doc: DocReducer
})

export default reducers
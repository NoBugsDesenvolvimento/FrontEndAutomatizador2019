import { combineReducers } from "redux"

import FuncionalidadesReducer from "./reducers/funcionalidade"
import MessageReducer from "./reducers/alerta"
import DocReducer from "./reducers/doc"
import UserReducer from "./reducers/user"

const reducers = combineReducers({
    funcionalidades: FuncionalidadesReducer,
    message: MessageReducer,
    doc: DocReducer,
    user: UserReducer
})

export default reducers
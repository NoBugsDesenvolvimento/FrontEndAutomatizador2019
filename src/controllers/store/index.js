import { combineReducers } from "redux"

import FuncionalidadesReducer from "./reducers/funcionalidade"

const reducers = combineReducers({
    funcionalidades: FuncionalidadesReducer
})

export default reducers
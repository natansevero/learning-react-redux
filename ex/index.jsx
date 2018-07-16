/*
    createStore: Serve para criar o store
    combineReducers: Combina todos os reducers. Cada reducer apontando para uma propriedade
    do objeto de Store. No fim, ele gera um objeto que será o Store. (Reducers combinados geram o store)   
    
    Provider: Consegue pegar o estado e passar para o componentes filhos (Pois todo aplicação tá em 
    dentro da Tag Provider)
*/

import React from 'react'
import ReactDOM from 'react-dom'

import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Field from './field'

const reducers = combineReducers({
    field: () => ({ value: 'Opa' })
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field />
    </Provider>,
    app
)
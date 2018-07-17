import React from 'react'
import ReactDOM from 'react-dom'

import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import counterRecuder from './counterReducer'
import Counter from './counter'

const reducers = combineReducers({
    counter: counterRecuder
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Counter />
    </Provider>,
    app
)
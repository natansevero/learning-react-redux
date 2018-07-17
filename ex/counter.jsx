import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { dec, inc, stepChanged } from './counterActions'

const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>
        <input type="number" onChange={props.stepChanged} value={props.counter.step} />
        <button onClick={props.dec}>Dec</button>
        <button onClick={props.inc}>Inc</button>
    </div>
)

const mapStateToProps = state => ({ counter: state.counter })
const mapDispatchToProps = dispatch => bindActionCreators({ dec, inc, stepChanged }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
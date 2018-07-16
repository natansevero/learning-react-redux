/*
    bindActionCreators: ligar as ações criadas com os dispatchers. Os dispatcher serão chamados
    automaticamente assim que uma ação for chamada (Isso é mapeado no mapDispatcherToProps)
*/

import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldActions'

class Field extends Component {

    render() {
        return (
            <div>
                <label>{this.props.value}</label> <br />
                <input type="text" onChange={this.props.changeValue} value={this.props.value} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        value: state.field.value
    }    
}

function mapDispatchToProps(dispatcher) {
    return bindActionCreators({ changeValue }, dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(Field);
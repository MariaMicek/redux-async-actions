import React from 'react'
import { connect } from 'react-redux'
import { incAsyncActionCreator } from './state/counter'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

const Counter = (props) => {
    return (
        <div
            style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}
        >
            {
                props._number !== null ?
                    <div>
                        <h1>
                            {props._number}
                        </h1>
                        <Button
                            onClick={props._inc}
                            variant='contained'
                            color='secondary'
                        >
                            +
                        </Button>
                    </div>
                    :
                    <CircularProgress
                        style={{ margin: '30px' }}
                        color='secondary'
                    />
            }
        </div>
    )
}

const mapStoreToProps = state => (
    {
        _number: state.counterReducer.number
    }
)

const mapDispatchToProps = dispatch => (
    {
        _inc: () => dispatch(incAsyncActionCreator()),
    }
)

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(Counter)
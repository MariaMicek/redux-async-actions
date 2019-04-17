import React from 'react'
import { connect } from 'react-redux'
import { setUserActionCreator } from './state/users'

const Users = (props) => {
    props._setUsers('Ala')
    return (
        <div>
            users
        </div>
    )
}

const mapDispatchToProps = dispatch => (
    {
        _setUsers: (users) => dispatch(setUserActionCreator(users))
    }
)

export default connect(
    null,
    mapDispatchToProps
)(Users)
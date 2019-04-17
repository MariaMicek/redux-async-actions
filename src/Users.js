import React from 'react'
import { connect } from 'react-redux'
import { setUserActionCreator } from './state/users'

const Users = (props) => {
    fetch('https://randomuser.me/api?results=3')
    .then(response => response.json())
    .then(data => props._setUsers(data.results))   

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
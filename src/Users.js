import React from 'react'
import { connect } from 'react-redux'
import { setUserActionCreator } from './state/users'

const Users = (props) => {
    if (props._users === null) {
        fetch('https://randomuser.me/api?results=5')
            .then(response => response.json())
            .then(data => props._setUsers(data.results))
    }

    return (
        <div>
            {
                props._users && props._users.map(
                    user => (
                        <div
                            key={user.login.uuid}
                        >
                            {user.name.first + ' ' + user.name.last}
                        </div>
                    )
                )
            }
        </div>
    )
}

const mapStoreToProps = state => (
    {
        _users: state.usersReducer.users
    }
)

const mapDispatchToProps = dispatch => (
    {
        _setUsers: (users) => dispatch(setUserActionCreator(users))
    }
)

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(Users)
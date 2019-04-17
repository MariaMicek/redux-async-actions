import React from 'react'
import { connect } from 'react-redux'
import { setUserActionCreator } from './state/users'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

const Users = (props) => {
    if (props._users === null) {
        fetch('https://randomuser.me/api?results=5')
            .then(response => response.json())
            .then(data => props._setUsers(data.results))
    }

    return (
        <div>
            <List>
                {
                    props._users && props._users.map(
                        user => (
                            <ListItem
                                key={user.login.uuid}
                                alignItems={'flex-start'}
                            >
                                <ListItemAvatar>
                                    <Avatar
                                        alt={user.name.first + ' ' + user.name.last}
                                        src={user.picture.thumbnail} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={user.name.first + ' ' + user.name.last}
                                    secondary={user.email}
                                />
                            </ListItem>
                        )
                    )
                }
            </List>
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
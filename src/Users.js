import React from 'react'
import { connect } from 'react-redux'
import { fetchUsersAsyncActionCreator } from './state/users'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

const Users = (props) => {
    return (
        <div
            style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}
        >
            <Button
                style={{ margin: '30px' }}
                variant='contained'
                color='secondary'
                onClick={props._fetchUsers}
            >
                LOAD USERS
            </Button>
            {
                props._isError ?
                    <p
                        style={{ margin: '30px', textAlign: 'center' }}
                    >
                            ERROR
                    </p>
                    :
                    props._isLoading ?
                        <CircularProgress
                            style={{ margin: '30px' }}
                            color='secondary'
                        />
                        :
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
            }
        </div>
    )
}

const mapStoreToProps = state => (
    {
        _users: state.usersReducer.users && state.usersReducer.users.results,
        _isLoading: state.usersReducer.isLoading,
        _isError: state.usersReducer.isError,
    }
)

const mapDispatchToProps = dispatch => (
    {
        _fetchUsers: () => dispatch(fetchUsersAsyncActionCreator())
    }
)

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(Users)
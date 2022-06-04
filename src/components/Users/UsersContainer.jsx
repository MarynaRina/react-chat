import React from 'react';
import { connect } from 'react-redux';
import { Users } from './Users';
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow,
    toggleFollowingProgress,
} from '../../redux/usersReducer';
import { Preloader } from '../common/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);

        usersAPI
            .getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = pageNumber => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
        });
    };

    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <Preloader />
                ) : (
                    <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        toggleFollowingProgress={
                            this.props.toggleFollowingProgress
                        }
                        followingInProgress={this.props.followingInProgress}
                    />
                )}
            </>
        );
    }
}

let mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    toggleFollowingProgress,
})(UsersContainer);

// let mapDispatchToProps = dispatch => {
//     return {
//         follow: userId => {
//             dispatch(followAC(userId));
//         },
//         unFollow: userId => {
//             dispatch(unFollowAC(userId));
//         },
//         setUsers: users => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: pageNumber => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: totalCount => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         setIsFetching: isFetching => {
//             dispatch(setIsFetchingAC(isFetching));
//         },
//     };
// };

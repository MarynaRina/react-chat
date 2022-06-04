import React from 'react';
import { connect } from 'react-redux';
import { Users } from './Users';
import {
    follow,
    setCurrentPage,
    unFollow,
    toggleFollowingProgress,
    getUsers,
} from '../../redux/usersReducer';
import { Preloader } from '../common/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
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
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
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

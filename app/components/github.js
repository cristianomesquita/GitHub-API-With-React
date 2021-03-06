const React = require('react');
const SearchUser = require('./searchUser');
const UserInfo = require('./userInfo');

const GitHub = React.createClass({

    getInitialState: function() {
        return {
            user: null,
            repos: []
        }
    },
    updateUser: function(user) {
        this.setState({ user: user });
    },
    updateRepos: function(repos) {
        this.setState({ repos: repos });
    },
    render: function() {
        return (
           <div className="container">
                <SearchUser updateUser={ this.updateUser } updateRepos={ this.updateRepos }/>
                <UserInfo user={ this.state.user } repos={ this.state.repos }/>
           </div>
        );
    }
});

module.exports = GitHub;
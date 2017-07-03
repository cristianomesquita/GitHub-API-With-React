const React = require('react');
const GitHubUser = require('../services/githubUser');

const SearchUser = React.createClass({

    handleSubmit: function(e) {
        e.preventDefault();

        const self = this;

        GitHubUser.getByUsername(this.refs.username.value)
            .then(function(res) {
                self.props.updateUser(res.data);
            });

        GitHubUser.getReposByUsername(this.refs.username.value)
            .then(function(res) {
                self.props.updateRepos(res.data);
            });    
    },
    render: function() {
        return (
            <div>
                <div className="jumbotron">
                    <h1>GitHub Info</h1>
                    <div className="row">
                        <form onSubmit={ this.handleSubmit }>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" 
                                    ref="username" placeholder="EX: cristianomesquita"/>    
                            </div>
                            <button type="submit" className="btn btn-primary">Buscar</button>         
                        </form>
                    </div>
                </div>
            </div>     
        );
    }
});

module.exports = SearchUser;
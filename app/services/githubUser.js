const axios = require('axios');

const URL = "https://api.github.com/users/";

const GitHubUser = {
    getByUsername: function(username) {
        return axios.get(URL + username);
    },

    getReposByUsername: function(username) {
        return axios.get(URL + username + '/repos');
    }
}

module.exports = GitHubUser;
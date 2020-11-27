var api_config = {
    login:['/sessions/users','post'],
    getUsername:['/sessions/username','get'],
    logout:['/sessions/users','delete'],
    register:['users','post'],
    checkUsername:['users/checkUsername','get']
}

module.exports = api_config;
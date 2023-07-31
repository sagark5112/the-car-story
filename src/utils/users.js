const users = [
    {
        username: 'admin',
        password: 'admin1234',
        encodedPass: function() {
            return window.btoa(this.password)
        },
    },
    {
        username: 'neeraj',
        password: 'neeraj123',
        encodedPass: function() {
            return window.btoa(this.password)
        },
    },
    {
        username: 'baba',
        password: 'baba123',
        encodedPass: function() {
            return window.btoa(this.password)
        },
    }
]

export default users;
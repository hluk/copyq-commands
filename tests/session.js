testSession = {
    sessions: 0,

    session: function() {
        return str(env('COPYQ_SESSION'))
    },

    start: function() {
        test.sessions += 1
        var session = test.session() + '-' + test.sessions
        action('copyq -s ' + session)
        return session
    },

    execute: function(session, cmd) {
        return test.execute('copyq', '-s', session, cmd)
    }
}

test = {
    assertEquals: function(expected, actual) {
        if (expected != actual) {
            throw 'Expected: ' + expected
                + '\nActual: ' + actual
        }
    },

    assertTrue: function(actual) {
        test.assertEquals(true, actual)
    },

    assertFalse: function(actual) {
        test.assertEquals(false, actual)
    },

    waitForEquals: function(label, expected, getter) {
        var actual
        for (var i = 0; i < 10; ++i) {
            actual = getter()
            if (actual == expected)
                return
            sleep(500)
        }

        throw 'Unexpected ' + label + ':'
            + '\nExpected: ' + expected
            + '\nActual: ' + actual
    },

    clipboardTextEquals: function(expected) {
        var getter = function() { return str(clipboard()) }
        test.waitForEquals('clipboard text', expected, getter)
    },

    importCommands: function(ini) {
        var commandConfigFile = new File(ini)
        if (!commandConfigFile.openReadOnly())
            throw 'Failed to open ini file: ' + ini

        var commandConfigContent = commandConfigFile.readAll()
        commandConfigFile.close()

        var commands = importCommands(commandConfigContent)
        if (commands.length == 0)
            throw 'Failed to load ini file: ' + ini

        for (var i in commands) {
            var command = commands[i]

            // Set global shortcut commands to application shortcut Ctrl+F1.
            if (command.isGlobalShortcut) {
                command.isGlobalShortcut = false
                command.shortcuts = ['Ctrl+F1']
                command.inMenu = true
            }
        }

        setCommands(commands)
    },

    importCommandsForTest: function(js) {
        ini = str(js).replace("tests/", "").replace(".js", ".ini")
        if (File(ini).exists())
            test.importCommands(ini)
    },

    run: function(js) {
        // Fail after an interval.
        afterMilliseconds(10000, fail)

        source(js)
    },

    execute: function() {
        var result = execute.apply(this, arguments)
        var cmd = Array.prototype.slice.call(arguments).join(" ")
        if (!result)
            throw 'Failed to execute: ' + cmd

        if (result.exit_code != 0)
            throw 'Non-zero exit code (' + result.exit_code + ') from command: ' + cmd

        return result.stdout
    }
}

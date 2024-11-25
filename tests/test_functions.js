test = {
    objectEquals: function(lhs, rhs) {
        return typeof(lhs) == "object" && lhs.equals && lhs.equals(rhs);
    },

    equals: function(expected, actual) {
        if (expected == actual) {
            return true;
        }

        if (test.objectEquals(expected, actual)) {
            return true;
        }

        if (test.objectEquals(actual, expected)) {
            return true;
        }

        return false;
    },

    assertEquals: function(expected, actual, label) {
        if (test.equals(expected, actual)) {
            return;
        }

        error = `❌ Failed comparison [${label}]:`
            + `\n    Expected: ${expected} [type=${typeof(expected)}]`
            + `\n    Actual: ${actual} [type=${typeof(actual)}]`;
        throw error;
    },

    assertTrue: function(actual, label) {
        test.assertEquals(true, actual);
    },

    assertFalse: function(actual, label) {
        test.assertEquals(false, actual);
    },

    waitForEquals: function(expected, getter, label) {
        let actual = getter();
        for (let i = 0; !test.equals(actual, expected) && i < 10; ++i) {
            sleep(500);
            actual = getter();
        }

        test.assertEquals(expected, actual, label);
    },

    clipboardTextEquals: function(expected) {
        test.waitForEquals(expected, clipboard, 'clipboard text');
    },

    importCommands: function(ini) {
        serverLog('Importing: ' + ini);

        let commandConfigFile = new File(ini);
        if (!commandConfigFile.openReadOnly()) {
            throw 'Failed to open ini file: ' + ini;
        }

        const commandConfigContent = commandConfigFile.readAll();
        commandConfigFile.close();

        const commands = importCommands(commandConfigContent);
        if (commands.length == 0) {
            throw 'Failed to load ini file: ' + ini;
        }

        for (var i in commands) {
            let command = commands[i];

            // Set global shortcut commands to application shortcut Ctrl+F1.
            if (command.isGlobalShortcut) {
                command.isGlobalShortcut = false;
                command.shortcuts = ['Ctrl+F1'];
                command.inMenu = true;
            }
        }

        setCommands(commands);

        test.waitForEquals(true, isClipboardMonitorRunning, 'wait for monitor');
    },

    importCommandsForTest: function(js) {
        const ini = str(js).replace("tests/", "").replace(".js", ".ini");
        if (File(ini).exists()) {
            test.importCommands(ini);
        }
    },

    run: function(js) {
        // Fail after an interval.
        afterMilliseconds(10000, fail);
        source(js);
    },

    execute: function() {
        const result = execute.apply(this, arguments);
        const cmd = Array.prototype.slice.call(arguments).join(" ");
        if (!result) {
            throw 'Failed to execute: ' + cmd;
        }

        if (result.exit_code != 0) {
            throw 'Non-zero exit code (' + result.exit_code + ') from command: ' + cmd;
        }

        return result.stdout;
    },

    // Simulate non-owned copying which would trigger onClipboardChanged
    // instead of onOwnClipboardChanged callback triggered after calling
    // copy(text).
    copy: function(text) {
        global.copy(mimeText, text, mimeOwner, '')
    },
}

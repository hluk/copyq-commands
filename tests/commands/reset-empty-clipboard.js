function lastClipboard() {
    const v = settings('lastClipboard');
    if (v) {
        return v[0];
    }
    return undefined;
}
test.assertEquals(undefined, lastClipboard())

const testText = ByteArray('Test');
test.copy(testText)
test.clipboardTextEquals(testText, 'clipboard after copy')
test.waitForEquals(testText, lastClipboard, 'lastClipboard settings set')

test.copy(ByteArray())
test.waitForEquals(testText, lastClipboard, 'lastClipboard settings unchanged')
test.clipboardTextEquals(testText, 'clipboard after reset')

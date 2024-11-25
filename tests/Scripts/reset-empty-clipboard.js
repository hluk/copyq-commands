const lastClipboard = () => settings('lastClipboard')
test.assertEquals(undefined, lastClipboard())

let copiedFormat = null
let copiedText = null
global.copy = (format, text) => {
    copiedFormat = format
    copiedText = text
}

const testText = ByteArray('Test');
setData(mimeText, testText)
test.assertTrue(hasData())
global.clipboard = () => { return testText; }
onClipboardChanged()

const stored = lastClipboard()
test.assertEquals(testText, stored[0])
test.assertEquals(null, copiedFormat)
test.assertEquals(null, copiedText)

removeData(mimeText)
test.assertFalse(hasData())
global.clipboard = () => { return ByteArray(); }
onClipboardChanged()

test.assertEquals(stored[0], lastClipboard()[0])
test.assertEquals(stored[1], lastClipboard()[1])
test.assertEquals(mimeText, copiedFormat)
test.assertEquals(testText, copiedText)

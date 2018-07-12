lastClipboard = settings('lastClipboard')
test.assertEquals(undefined, lastClipboard)

setData(mimeText, "Test")
test.assertTrue(hasData())
onClipboardChanged()

lastClipboard = str(settings('lastClipboard')[0])
test.assertEquals('Test', lastClipboard)

removeData(mimeText)
test.assertFalse(hasData())
onClipboardChanged()

test.clipboardTextEquals('Test')

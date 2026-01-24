plugins.itemtests.keys('Ctrl+N', 'focus::ItemEditorWidget', ':testABC', 'F2');

plugins.itemtests.keys('Ctrl+F1', 'focus:QLineEdit', ':ABC', 'Tab', ':XYZ', 'Enter');

const expectedText = 'testXYZ';
test.clipboardTextEquals(expectedText);
test.waitForEquals(
    expectedText, function(){ return read(0); }, "item text must be replaced");

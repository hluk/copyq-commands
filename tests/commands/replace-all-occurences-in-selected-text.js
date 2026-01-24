function verifyItemPasted(expectedText)
{
    test.clipboardTextEquals(expectedText);
    test.waitForEquals(
        expectedText, function(){ return read(0); },
        `item text must be replaced with: ${expectedText}`);
}

config('window_paste_with_ctrl_v_regex', 'CopyQ');

plugins.itemtests.keys('Ctrl+N', 'focus::ItemEditorWidget', ':testABC', 'F2');

plugins.itemtests.keys('Ctrl+F1', 'focus:QLineEdit');
// Enter Replace
plugins.itemtests.keys('focus:QLineEdit', ':A.*');
// Enter With
plugins.itemtests.keys('ALT+W', 'focus:QLineEdit', ':XXX');
// Enable regex checkbox
plugins.itemtests.keys('ALT+E', 'focus:QCheckBox');
// Accept dialog
plugins.itemtests.keys('Enter', 'focus:^ClipboardBrowser');

verifyItemPasted('testXXX');

plugins.itemtests.keys('Ctrl+F1', 'focus:QLineEdit');
// Enter Replace
plugins.itemtests.keys('focus:QLineEdit', ':X');
// Enter With
plugins.itemtests.keys('ALT+W', 'focus:QLineEdit', ':O');
// Accept dialog
plugins.itemtests.keys('Enter', 'focus:^ClipboardBrowser');

verifyItemPasted('testOOO');

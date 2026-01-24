tab('Snippets')
add('Snippet 1')

plugins.itemtests.keys('Ctrl+F1', 'focus:ComboBox', 'ENTER')

test.clipboardTextEquals('Snippet 1')

This section contains commands which can be executed with global/system shortcut
(even when the main application window is not active).

### [Copy a Secret](copy-a-secret.ini)

Copies (Ctrl+C) from current window without storing or showing the data in GUI.

### [Copy Text in Image](copy-text-in-image.ini)

Takes screenshot of selected part of the screen and tries to recognize text.

Requires [ImageMagick](https://www.imagemagick.org/script/download.php) and [Tesseract](https://github.com/tesseract-ocr/tesseract/wiki/Downloads).

### [Disable Monitoring State Permanently](disable-clipboard-monitoring-state-permanently.ini)

Disables clipboard monitoring permanently, i.e. the state is restored when clipboard changes even after application is restarted.

### [Edit and Paste](edit-and-paste.ini)

Following command allows to edit current clipboard text before pasting it.

If the editing is canceled the text won't be pasted.

### [Paste Current Date and Time](paste-current-date-time.ini)

Copies current date/time text to clipboard and pastes to current window on global shortcut <kbd>Win</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>.

### [Quickly Show Current Clipboard Content](quickly-show-current-clipboard-content.ini)

Quickly pops up notification with text in clipboard using `Win+Alt+C` system shortcut.

### [Replace All Occurrences in Selected Text](replace-all-occurences-in-selected-text.ini)

### [Screenshot](screenshot.ini)

Take screenshot of the screen.

### [Screenshot Cutout](screenshot-cutout.ini)

Take screenshot of selected part of the screen.

### [Show Clipboard](show-clipboard.ini)

Shows notification with current clipboard content (text or image).

### [Snippets](snippets.ini)

Shows dialog with snippets to paste.

Snippets are loaded from "Snippets" tab. Item notes are used as snippet name.

Items can contain placeholders like:
- `${Name}` (default text is empty),
- `${Name:value}` (default text is "value"),
- `${Name:value1,value2,value3}` (default text is "value1"; allows to select from multiple values),
- `${Name:\n}` (multi-line text field).

When such snippet is selected, user is prompted to replace these placeholders with custom content.

To create your first snippet:

1. create "Snippets" tab (Ctrl+T),
2. add new item (Ctrl+N) with a snippet:

    You picked ${Fruit:apples,oranges,pears}!

3. set optional snippet name (Ctrl+F2), e.g. "Fruit".

Triggering the Snippets command (with a global shortcut) will show a simple
dialog where you can pick the snippet by its name.

To pick different tab name, you have to change the command's code.

    var snippetsTabName = '&Snippets'

### [Capitalize Selected Text for Titles](to-title-case.ini)

E.g. changes "Do androids dream of electric sheep?" to "Do Androids Dream of Electric Sheep?".

### [Change Upper/Lower Case of Selected Text](toggle-upper-lower-case-of-selected-text.ini)

Toggles between upper- and lower-case letters in selected text.


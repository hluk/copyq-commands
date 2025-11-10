Useful commands for [CopyQ clipboard manager](https://github.com/hluk/CopyQ).

You can share your commands and ideas here.
Just open pull request or an issue.

For the list of commands see [Commands](#commands) section below.

# Add a Command to CopyQ

To add a command to CopyQ:

- copy the command code (starts with `[Command]` or `[Commands]` for multiple commands),
- open CopyQ,
- open Command dialog (<kbd>F6</kbd> shortcut),
- click "Paste Commands" button (or <kbd>Ctrl</kbd>+<kbd>V</kbd>),
- apply changes.

To **simplify this** add [command](Automatic/import-commands-after-copied.ini)
which shows notification with button to import all commands copied to clipboard.
This also works if you just copy a link with commands.

![Select Category](images/select-category.png)
![Copy Command Link](images/copy-command-link.png)
![Import Command Notification](images/import-command-notification.png)

# Write new Commands

See following documentation about writing commands and scripting.

- [Writing Commands and Adding Functionality](https://copyq.readthedocs.io/en/latest/writing-commands-and-adding-functionality.html)
- [Scripting](https://copyq.readthedocs.io/en/latest/scripting.html)
- [Scripting API](https://copyq.readthedocs.io/en/latest/scripting-api.html)

Submit new pull request in this repository if you want to share a command.

# Commands

## [Auto Preview Image or Long-text](commands/auto-preview.ini)

Automatically preview images and long-text, and support manual preview with `Space` key. You can set the number of lines and characters for long text.

```
// More than 100 characters and 2 lines are considered as long text
var LongTextCharacters = 100
var LongTextLines = 2
```

## [Backup On Exit](commands/backup-on-exit.ini)

Backs up items and configuration on exit.

## [Big Data Tab](commands/big-data-tab.ini)

Automatically moves larger amount of data copied to clipboard to a special tab
(see the command variables to set the output tab and size limit) to keep the
access to primary clipboard tab swift.

## [Blocklisted Texts](commands/blocklisted_texts.ini)

Blocklists clipboard text to omit adding it in item list and avoid running
automatic commands on it.

Only checksum of the text (salted) is stored in the blocklist so this can be
safely used with passwords (the texts are not stored anywhere).

## [Bookmarks](commands/bookmarks.ini)

Allows you to set a mark on an item, then later restore that mark to the clipboard.

The implementation uses special tags with a "mark:" prefix, and when a mark is set, removes  that tag from any items that contain that tag.

## [Capitalize Selected Text for Titles](commands/to-title-case.ini)

E.g. changes "Do androids dream of electric sheep?" to "Do Androids Dream of Electric Sheep?".

## [Change Upper/Lower Case of Selected Text](commands/toggle-upper-lower-case-of-selected-text.ini)

Toggles between upper- and lower-case letters in selected text.

## [Clear Clipboard After Interval](commands/clear-clipboard-after-interval.ini)

Clears clipboard after an interval (30 seconds by default).

## [Clear Clipboard Tab](commands/clear-clipboard-tab.ini)

Remove all items from clipboard tab using menu item (or custom shortcut).

## [Clipboard Notification](commands/clipboard-notification.ini)

Persistently displays notification with clipboard (and X11 selection) content.

## [Convert Markdown to ...](commands/convert-markdown.ini)

Converts text written in [Markdown syntax](https://daringfireball.net/projects/markdown/syntax)
to desired format, which can be for example:

* HTML
* [Jira markup](https://jira.atlassian.com/secure/WikiRendererHelpAction.jspa?section=all)
* JSON (AST) (JSON representation of the parsed text; useful rather for contributors than users)
* [LaTeX](https://en.wikipedia.org/wiki/LaTeX)

The command can be run on any text selection via a global shortcut or over items selected
in the main window.

#### Installation

This script relies on the [mistletoe](https://github.com/miyuchina/mistletoe) project to do the
actual Markdown parsing and conversion.
This in turn requires that [Python](https://www.python.org/downloads/) is installed on the user computer.

See mistletoe's page linked above for the various possibilities of its installation.

For output format "HTML + code highlighting", an additional Python package needs to be installed:

    pip3 install pygments

## [Copy Clipboard to Window Tabs](commands/copy-clipboard-to-windows-tab.ini)

Automatically adds new clipboard to tab with same name as title of the window where copy operation was performed.

## [Copy Text in Image](commands/copy-text-in-image.ini)

Takes screenshot of selected part of the screen and tries to recognize text.

Requires [GraphicsMagick](http://www.graphicsmagick.org/download.html)
and [Tesseract](https://github.com/tesseract-ocr/tesseract/wiki/Downloads).

## [Copy a Secret](commands/copy-a-secret.ini)

Copies (Ctrl+C) from current window without storing or showing the data in GUI.

## [Copy a Secret If a Modifier Held](commands/copy-a-secret-if-modifier-held.ini)

If any keyboard modifier (Ctrl, Shift, Alt etc) is held for a second after
copying a content, it will not be stored or shown in GUI.

## [Copy and Paste Items in JSON Format](commands/copy-paste-items-as-json.ini)

Allows to easily share items in readable text format.

## [Copy and Search on Web](commands/copy-and-search-on-web.ini)

Copies currently selected text and opens selection menu to search the text on
some well-known websites. New search queries can be easily defined.

## [Cycle Items](commands/cycle-items.ini)

Pops up the main window (if the shortcut is pressed once), cycles through items
(if the shortcut is pressed again) and pastes selected item when the shortcut
is released.

See: https://github.com/hluk/CopyQ/issues/1948

## [Cycle Items - Quick](commands/quick-cycle-items.ini)

Like Cycle Items command but previews items to copy in popups without showing
the main window.

## [Decrypt and Type](commands/decrypt-and-type.ini)

Safely types in decrypted text of selected item instead of using clipboard.

Requires "xdotool" utility which works only on Linux/X11.

## [Diff Latest Items](commands/diff-latest-items.ini)

Compares two clipboard history items with your preferred diff tool.

The latest two items get compared when the command is run as a global command.
You can also run the command on any two items selected in the main window.

By default, this command launches [Beyond Compare 4](https://www.scootersoftware.com/download.php)
for doing the comparison.
You can find examples of launching other tools like [WinMerge](https://winmerge.org/downloads) directly in the command's source code.

## [Disable Monitoring State Permanently](commands/disable-clipboard-monitoring-state-permanently.ini)

Disables clipboard monitoring permanently, i.e. the state is restored when clipboard changes even after application is restarted.

## [Edit Files](commands/edit-files.ini)

Opens files referenced by selected item in external editor (uses "External editor command" from "History" config tab).

Works with following path formats (some editors may not support all of these).

- `C:/...`
- `file://...`
- `~...` (some shells)
- `%...%...` (Windows environment variables)
- `$...` (environment variables)
- `/c/...` (gitbash)

## [Edit Tag](commands/edit-tag.ini)

Replace an existing tag with another (with a custom text).

## [Edit and Paste](commands/edit-and-paste.ini)

Following command allows to edit current clipboard text before pasting it.

If the editing is canceled the text won't be pasted.

## [Filter](commands/filter.ini)
Add a filter menu to quickly filter images, URLs, files, etc.

You can customize the filters：

```
var filter1= {
    [mimeText]: 'File  ---------------- F',    //Text displayed on the menu
    [mimeIcon]: '',
    filter: '(?=^file://)',    //Regular expression of the filter
    shortcut: 'f'    //You need to set the menu shortcut of this command at the same time.
}

var filters = [filter1, filter2, filter3, ...]    //Add filters to the list
```

## [Full Clipboard Text in Title and Tooltip](commands/full-clipboard-in-title.ini)

Shows full clipboard text in window title and tray tooltip.

## [Hide/Show Item Content](commands/hide-item-content.ini)

Hides (or shows if hidden) item content except notes and tags.

## [Highlight Code](commands/highlight-code.ini)

Highlights syntax for recognized code.

Requires Python and [Pygments](https://pygments.org/).

## [Highlight Text](commands/highlight-text.ini)

Highlights all occurrences of a text (change `x = "text"` to match something else than `text`).

## [Ignore Images when Text is Available](commands/ignore-images-when-text-is-available.ini)

This is useful for ignoring cells copied as images from Microsoft Excel and LibreOffice Calc.

## [Ignore Non-Mouse Text Selection](commands/ignore-non-mouse-text-selection.ini)

Linux/X11 only. Some web or other applications can automatically set X11 mouse
selection buffer. This can be quiet annoying so this command tries to reset the
buffer to previous content when this happens.

## [Ignore Passwords/Tokens](commands/ignore-passwords-tokens.ini)

Ignore the clipboard if it contains a password or token based on the text
characteristics (length, uppercase letters, digits).

## [Image Tab](commands/image-tab.ini)

Automatically store images copied to clipboard in a separate tab.

## [Import Commands after Copied to Clipboard](commands/import-commands-after-copied.ini)

Shows notification allowing to easily import commands just copied to clipboard.

The copied text can be either link to a command on github or starts with `[Command]` or `[Commands]`.

## [Indicate Copy in Icon](commands/indicate-copy-in-icon.ini)

Indicates a copy operation by changing the icon tag.

## [Join Selected Items](commands/join-selected-items.ini)

Creates new item containing concatenated text of selected items.

Change the `separator` variable to separate the merged items with a different
string than line break `\n`.

## [KeePassXC protector](commands/keepassxc-protector.ini)

A plugin that prevents saving data from the [KeePassXC](https://github.com/keepassxreboot/keepassxc) password manager.

## [Keep Item in Clipboard](commands/keep-item-in-clipboard.ini)

Keeps the first item (can be pinned) in clipboard at start and after a copy
operation (after custom interval).

## [Linkify](commands/linkify.ini)

Creates interactive link from plain text.

## [Make a selected tab a clipboard tab and put the first item on the clipboard](commands/make-selected-tab-clipboard.ini)

Make the selected tab a clipboard tab and put the first item on the clipboard.

## [Mark Selected Items](commands/mark-selected-items.ini)

Toggles highlighting of selected items.

## [Modify Selected Items](commands/modify-selected-items.ini)

## [Modify Selected Text](commands/modify-selected-text.ini)

## [Navigate Tabs With Alt+Number](commands/tab-alt-navigation.ini)

Enables Alt+1 .. Alt+9, Alt+0 to navigate to the tab based on the order
(instead of the default Ctrl+Number navigation).

## [Next/Previous](commands/next-previous.ini)

Remaps Up/Down arrows for browsing items to Ctrl+P/Ctrl+N or other custom
shortcuts.

## [No Clipboard in Title and Tool Tip](commands/no-clipboard-in-title-and-tooltip.ini)

Stop showing current clipboard content in window title and tray tool tip.

## [Paste Current Date and Time](commands/paste-current-date-time.ini)

Copies current date/time text to clipboard and pastes to current window on global shortcut <kbd>Win</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>.

## [Paste Current Date and Time in ISO8601 Format](commands/paste-current-date-time-in-iso-8601.ini)

Copies current date/time in ISO8601 format to clipboard, adds it to the clipboard history, and then pastes it to the current window.

## [Paste Formatted Json](commands/paste-formatted-json.ini)

Pastes selected Json text as a formatted Json text.
If not Json, just pastes the text as is.

## [Paste Nth Item](commands/paste-nminus1th-item.ini)

Paste items 1-9 in history using ctrl+1 through ctrl+9 shortcuts.

## [Paste and Forget](commands/paste-and-forget.ini)

Pastes selected items and clear clipboard.

## [Paste new UUID](commands/paste-new-uuid.ini)

Generates a new RFC4122 version 4 compliant UUID, adds it to the clipboard history, copies it to the clipboard and pastes it to the current window.
Full credit for UUID generation code goes to Jeff Ward (jcward.com), link: https://stackoverflow.com/a/21963136/11820711

## [Play Sound when Copying to Clipboard - Linux](commands/play-sound-when-copying-to-clipboard-linux.ini)

Following command will play an audio file whenever something is copied clipboard.

Requires `mpv` utility.

## [Play Sound when Copying to Clipboard - Windows](commands/play-sound-when-copying-to-clipboard-windows.ini)

Following command will play an audio file whenever something is copied clipboard.

## [Preview Image Files](commands/preview-image-files.ini)

Shows images instead of just a path (works with `file://...`).

## [Push/Pop Items](commands/push-pop-stack.ini)

A global shortcut to copy selected text/HTML/image as a new top item in "Stack"
tab and another shortcut to paste the top item and remove it from the tab.

See: https://github.com/hluk/CopyQ/issues/597

## [QR Code](commands/qr-code.ini)

From currently selected text items, creates a new item with the QR code for the
text.

Requires [qrcode](https://github.com/lincolnloop/python-qrcode) utility.

## [Quick Save](commands/QuickSave.ini)

Saves an item as file to a preset path using available tags as it's file name, without overwriting. There is no user input dialog.
This works great along the script [show window title](../Automatic/show-window-title.ini) which saves source window title to tags while adding to clipboard.
After installation, you *must edit default folder (xyz) path*: `currentPath('C:/abc/xyz')`

Other options:
Number of words to use from tags (not number of tags): `var words = 3`
Default file name if there are no tags: `var defaultname = 'clip'`

## [Quickly Show Current Clipboard Content](commands/quickly-show-current-clipboard-content.ini)

Quickly pops up notification with text in clipboard using `Win+Alt+C` system shortcut.

## [Remember Clipboard Storing State](commands/remeber-clipboard-storing-state.ini)

Normally, if "Clipboard Storing" is disabled from File menu, it will be
re-enabled automatically on the application start next time.

This command makes the last set state persistent between application launches.

## [Remove Background and Text Colors](commands/remove-background-and-text-colors.ini)

Removes background and text colors from rich text (e.g. text copied from web pages).

Command can be both automatically applied on text copied to clipboard and invoked from menu (or using custom shortcut).

## [Remove Carriage Return, Line Feed and Multiple Space Then Paste](commands/remove-carriage-return-linefeed-and-multiple-space-then-paste.ini)

Removes carriage return, line feed and multiple space in the clipboard, then paste it.

Useful when copy texts from PDF.

## [Render HTML](commands/render-html.ini)

Converts text item with HTML code to HTML item.

## [Render Markdown](commands/render-markdown.ini)

Renders markdown if recognized.

Requires [marked](https://marked.js.org/).

## [Replace All Occurrences in Selected Text](commands/replace-all-occurences-in-selected-text.ini)

## [Reset Empty Clipboard/Selection](commands/reset-empty-clipboard.ini)

Resets last clipboard text (or X11 selection) if it's cleared.

## [Save Item/Clipboard To a File](commands/save-item-clipboard-to-file.ini)

Opens dialog for saving selected item data to a file.

## [Screenshot](commands/screenshot.ini)

Take screenshot of the screen.

## [Screenshot Cutout](commands/screenshot-cutout.ini)

Take screenshot of selected part of the screen.

## [Search & Replace](commands/search-and-replace.ini)

Search and replace specified text in the currently selected items or all items
in the current tab.

## [Search All Tabs](commands/search-all-tabs.ini)

Searches an text in all tabs and stores found items in "Search" tab.

## [Select Nth Item](commands/select-nth-item.ini)

Overrides main window shortcuts Ctrl+1..9 to quickly select items in specific row.

## [Select Nth Item - Global Shortcuts](commands/select-nth-item-global.ini)

Quick shortcuts to activate items 0 to 9 (copy, move to top and paste depending
on preferences in History configuration tab).

## [Show Character Code](commands/show-char-code.ini)

Shows Unicode code info for the first characters of any text. An example of how this looks like:

![Show Character Code Dialog](images/cmd_show-char-code.png)

## [Show Clipboard](commands/show-clipboard.ini)

Shows notification with current clipboard content (text or image).

## [Show Window Title](commands/show-window-title.ini)

Shows source application window title for new items in tag.

Requires "Tags" plugin.

## [Show on Start](commands/show-on-start.ini)

Show main window after application starts.

## [Snippets](commands/snippets.ini)

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

## [Sort Items](commands/sort-items.ini)
Sort items based on copy time, size, pinned status, etc.

- When selecting single item, sort the entire tab
- When selecting multiple items, only sort the selected items

## [Sort Tabs](commands/sort-tabs.ini)

Sorts tabs by name.

## [Stopwatch](commands/stopwatch.ini)

Restarts stopwatch and copies elapsed time since last started.

## [Store Copy Time](commands/store-copy-time.ini)

Store the copy time of new items in a **tag**.

To show tags in the item list the **Tags** plugin is required.

Optionally you can change the appearance of the copy time tag. See this example:

`Tag Name`: `\1`

`Match`: `(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})`

`Style Sheet`: `font-size: 9pt; color: #fff; border: 1px solid #000; background: #000; padding: 0 2px`

## [Store Mouse Selections in Separate Tab](commands/mouse-selections-tab.ini)

Stores Linux/X11 mouse selections in a separate tab.

## [Synchronize Clipboard with Other Sessions](commands/synchronize-clipboard-with-other-sessions.ini)

Synchronizes clipboard with other application session running on different X11 servers.

## [Tab Key to Select Next/Previous](commands/tab-key-select.ini)

Use Tab and Shift+Tab to select next/previous item.

## [Tab Switcher](commands/tab-switcher.ini)

Use a shortcut or a toolbar action to quickly find a tab and focus it on Enter
key or double click.

This uses a separate CopyQ session/app-instance to show the tab list.

## [Tab for Frequent Items](commands/frequent-items-tab.ini)

Two commands to add frequent items to special tab and to show frequent items with global shortcut.

## [Tab for URLs with Title and Icon](commands/tab-for-urls-with-title-and-icon.ini)

For copied URLS tries to get web page title and icon and stores it with item in "url" tab.

## [Tabs navigation](commands/tabs-navigation.ini)

Global shortcuts to select tabs. It is possible to select the Nth tab by order and the next or previous tab.

## [Toggle Clipboard Storing](commands/toggle-clipboard-storing.ini)

Toggles clipboard storing/monitoring with global shortcut or from menu/toolbar.

## [Toggle Show As Plain Text](commands/toggle-show-as-plain-text.ini)

Display command combined with a shortcut that changes how selected items are
displayed: as plain text or rich text (HTML).

## [Toggle Simple Items](commands/toggle-simple-items.ini)

Show/hide more compact items (one line of text or thumbnail).

## [Toggle Tag](commands/toggle-tag.ini)

Instead of two commands, one to tag and other to untag selected items, and see
two actions in toolbar, you can use this command to toggle a tag.

## [Top Item to Clipboard](commands/top-item-to-clipboard.ini)

Whenever a new top item is added to the clipboard tab or is changed, it is also
copied to the system clipboard.

## [Translate to English](commands/translate-to-english.ini)

Passes text to [Google Translate](https://translate.google.com/).

## [Treefy](commands/treefy.ini)

Convert indented line block (tabs, spaces or markdown headers) to an ASCII directory tree with the possibility to add a root element.

Example

```
A1
  B1
    C1
      D1
        E1
      D2
        E2
Z1
  Y1
    X1
```

Output (with root)

```
.
├─ A1
│  └─ B1
│     └─ C1
│        ├─ D1
│        │  └─ E1
│        └─ D2
│           └─ E2
└─ Z1
   └─ Y1
      └─ X1
```

Output (without root)

```
A1
└─ B1
   └─ C1
      ├─ D1
      │  └─ E1
      └─ D2
         └─ E2
Z1
└─ Y1
   └─ X1
```

## [Undoable Move to Trash](commands/undoable-move-to-trash.ini)

Two commands to move items to trash and to undo removals.

## [Wayland Support](commands/wayland-support.ini)

Adds support for some features under Wayland compositors in KDE, Sway, Hyprland
and possibly others.

Command "Paste Items when Activated" pastes items when activated (on
double-click or Enter key) depending on application configuration (History
configuration tab).

Paste behaviour is implemented with Shift+Insert shortcut. It works in most
applications by default, but you may need to enable it for some (for example,
for terminal emulators).
Exact configuration changes vary by application. For example, for alacritty
you should modify your `alacritty.yml` with next line:
```yaml
  - { key: Insert, mods: Shift, action: Paste }
```

Getting window title is currently implemented only for KDE, Sway and Hyprland.

Requirements:

- [kdotool](https://github.com/jinliu/kdotool) for getting window titles on KDE
- [ydotool](https://github.com/ReimuNotMoe/ydotool) for copy/paste commands
- [gnome-screenshot](https://gitlab.gnome.org/GNOME/gnome-screenshot) for
  taking screenshots in Gnome
- [grim](https://github.com/emersion/grim) and
  [slurp](https://github.com/emersion/slurp) for taking screenshots in Sway and
  Hyprland
- [spectacle](https://invent.kde.org/graphics/spectacle) for screenshots in
  other environments

## [Write Clipboard to File](commands/write-clipboard-to-file.ini)

Stores clipboard continuously to a "clipboard.txt" (in home directory).

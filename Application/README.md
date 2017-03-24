This section contains commands which can be executed from tool bar, menu or with shortcut.

### [Edit File](edit-file.ini)

Opens file referenced by selected item in external editor (uses "External editor command" from "History" config tab).

Works with following path formats (some editors may not support all of these).

- `C:/...`
- `file://...`
- `~...` (some shells)
- `%...%...` (Windows environment variables)
- `$...` (environment variables)
- `/c/...` (gitbash)

### [Tab for Frequent Items](frequent-items-tab.ini)

Two commands to add frequent items to special tab and to show frequent items with global shortcut.

### [Highlight Text](highlight-text.ini)

Highlights all occurrences of a text (change `x = "text"` to match something else than `text`).

### [Join Selected Items](join-selected-items.ini)

Creates new item containing concatenated text of selected items.

### [Mark Selected Items](mark-selected-items.ini)

Toggles highlighting of selected items.

### [Paste and Forget](paste-and-forget.ini)

Pastes selected items and clear clipboard.

### [Remove Background and Text Colors](remove-background-and-text-colors.ini)

Removes background and text colors from rich text (e.g. text copied from web pages).

Command can be both automatically applied on text copied to clipboard and invoked from menu (or using custom shortcut).

### [Render HTML](render-html.ini)

Converts text item with HTML code to HTML item.

### [Render Math Equations](render-math-equations.ini)

Renders math equations using [MathJax](http://www.mathjax.org/) (e.g. `$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$`).

### [Save Item/Clipboard To a File](save-item-clipboard-to-file.ini)

Opens dialog for saving selected item data to a file.

### [Search All Tabs](search-all-tabs.ini)

Searches an text in all tabs and stores found items in "Search" tab.

### [Tab for URLs with Title and Icon](tab-for-urls-with-title-and-icon.ini)

For copied URLS tries to get web page title and icon and stores it with item in "url" tab.

### [Translate to English](translate-to-english.ini)

Passes text to [Google Translate](https://translate.google.com/).

### [Undoable Move to Trash](undoable-move-to-trash.ini)

Two commands to move items to trash and to undo removals.


This section contains commands which can be executed from tool bar, menu or with shortcut.

### [Clear Clipboard Tab](clear-clipboard-tab.ini)

Remove all items from clipboard tab using menu item (or custom shortcut).

### [Copy and Paste Items in JSON Format](copy-paste-items-as-json.ini)

Allows to easily share items in readable text format.

Available in CopyQ v3.0.0.

### [Edit File](edit-file.ini)

Opens file referenced by selected item in external editor (uses "External editor command" from "History" config tab).

Works with following path formats (some editors may not support all of these).

- `C:/...`
- `file://...`
- `~...` (some shells)
- `%...%...` (Windows environment variables)
- `$...` (environment variables)
- `/c/...` (gitbash)

### [Next/Previous](next-previous.ini)

Remaps Up/Down arrows for browsing items to Ctrl+P/Ctrl+N or other custom
shortcuts.

### [Tab for Frequent Items](frequent-items-tab.ini)

Two commands to add frequent items to special tab and to show frequent items with global shortcut.

### [Hide/Show Item Content](hide-item-content.ini)

Hides (or shows if hidden) item content except notes and tags.

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

### [Save Item/Clipboard To a File](save-item-clipboard-to-file.ini)

Opens dialog for saving selected item data to a file.

### [Search All Tabs](search-all-tabs.ini)

Searches an text in all tabs and stores found items in "Search" tab.

### [Toggle Simple Items](toggle-simple-items.ini)

Show/hide more compact items (one line of text or thumbnail).

### [Translate to English](translate-to-english.ini)

Passes text to [Google Translate](https://translate.google.com/).

### [Undoable Move to Trash](undoable-move-to-trash.ini)

Two commands to move items to trash and to undo removals.

### [Paste Formatted Json](paste-formatted-json.ini)

Pastes selected Json text as a formatted Json text.
If not Json, just pastes the text as is.

### [Treefy](treefy.ini)

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

This section contains commands which modify or extend default application behavior.

### [Backup On Exit](backup-on-exit.ini)

Backs up items and configuration on exit.

### [Blocklisted Texts](blocklisted_texts.ini)

Blocklists clipboard text to omit adding it in item list and avoid running
automatic commands on it.

Only checksum of the text (salted) is stored in the blocklist so this can be
safely used with passwords (the texts are not stored anywhere).

### [Bookmarks](bookmarks.ini)

Allows you to set a mark on an item, then later restore that mark to the clipboard. 

The implementation uses special tags with a "mark:" prefix, and when a mark is set, removes  that tag from any items that contain that tag.

### [Clear Clipboard After Interval](clear-clipboard-after-interval.ini)

Clears clipboard after an interval (30 seconds by default).

### [Clipboard Notification](clipboard-notification.ini)

Persistently displays notification with clipboard (and X11 selection) content.

### [Full Clipboard Text in Title and Tooltip](full-clipboard-in-title.ini)

Shows full clipboard text in window title and tray tooltip.

### [Ignore Non-Mouse Text Selection](ignore-non-mouse-text-selection.ini)

Linux/X11 only. Some web or other applications can automatically set X11 mouse
selection buffer. This can be quiet annoying so this command tries to reset the
buffer to previous content when this happens.

### [Indicate Copy in Icon](indicate-copy-in-icon.ini)

Indicates a copy operation by changing the icon tag.

### [Keep Item in Clipboard](keep-item-in-clipboard.ini)

Keeps the first item (can be pinned) in clipboard at start and after a copy
operation (after custom interval).

### [Make a selected tab as clipboard tab and put first item to clipboard](make-selected-tab-as-clipboard.ini)

Make the current selected tab as clipboard tab and put first item to clipboard.

### [No Clipboard in Title and Tool Tip](no-clipboard-in-title-and-tooltip.ini)

Stop showing current clipboard content in window title and tray tool tip.

### [Remember Clipboard Storing State](remeber-clipboard-storing-state.ini)

Normally, if "Clipboard Storing" is disabled from File menu, it will be
re-enabled automatically on the application start next time.

This command makes the last set state persistent between application launches.

### [Reset Empty Clipboard/Selection](reset-empty-clipboard.ini)

Resets last clipboard text (or X11 selection) if it's cleared.

### [Show on Start](show-on-start.ini)

Show main window after application starts.

### [Top Item to Clipboard](top-item-to-clipboard.ini)

Whenever a new top item is added to the clipboard tab or is changed, it is also
copied to the system clipboard.

### [Wayland Support](wayland-support.ini)

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

Getting window title is currently implemented only for Sway and Hyprland.

Requirements:

- [kdotool](https://github.com/jinliu/kdotool) for getting window titles on KDE
- [ydotool](https://github.com/ReimuNotMoe/ydotool) for copy/paste commands
- [grim](https://github.com/emersion/grim) for taking screenshots
- [slurp](https://github.com/emersion/slurp) for selecting area for screenshots

### [Write Clipboard to File](write-clipboard-to-file.ini)

Stores clipboard continuously to a "clipboard.txt" (in home directory).

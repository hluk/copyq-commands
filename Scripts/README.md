This section contains commands which modify or extend default application behavior.

### [Backup On Exit](backup-on-exit.ini)

Backs up items and configuration on exit.

### [Blacklisted Texts](blacklisted_texts.ini)

Blacklists clipboard text to omit adding it in item list and avoid running
automatic commands on it.

Only checksum of the text (salted) is stored in the blacklist so this can be
safely used with passwords (the texts are not stored anywhere).

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

### [Keep Item in Clipboard](keep-item-in-clipboard.ini)

Keeps the first item (can be pinned) in clipboard at start and after a copy
operation (after custom interval).

### [No Clipboard in Title and Tool Tip](no-clipboard-in-title-and-tooltip.ini)

Stop showing current clipboard content in window title and tray tool tip.

### [Reset Empty Clipboard/Selection](reset-empty-clipboard.ini)

Resets last clipboard text (or X11 selection) if it's cleared.

### [Show on Start](show-on-start.ini)

Show main window after application starts.

### [Sway and Wayland Support](sway-support.ini)

Adds support for some features under Sway Wayland compositor.

Requirements:

- [ydotool](https://github.com/ReimuNotMoe/ydotool) for copy/paste commands
- [grim](https://github.com/emersion/grim) for taking screenshots
- [slurt](https://github.com/emersion/slurp) for selecting area for screenshots

### [Write Clipboard to File](write-clipboard-to-file.ini)

Stores clipboard continuously to a "clipboard.txt" (in home directory).

**Important:** Refer to [the main README.md](../README.md) for updated list of commands.

This section contains commands which are executed automatically whenever something is copied to clipboard.

### [Big Data Tab](../commands/big-data-tab.ini)

Automatically moves larger amount of data copied to clipboard to a special tab
(see the command variables to set the output tab and size limit) to keep the
access to primary clipboard tab swift.

### [Copy a Secret If a Modifier Held](../commands/copy-a-secret-if-modifier-held.ini)

If any keyboard modifier (Ctrl, Shift, Alt etc) is held for a second after
copying a content, it will not be stored or shown in GUI.

### [Copy Clipboard to Window Tabs](../commands/copy-clipboard-to-windows-tab.ini)

Automatically adds new clipboard to tab with same name as title of the window where copy operation was performed.

### [Ignore Images when Text is Available](../commands/ignore-images-when-text-is-available.ini)

This is useful for ignoring cells copied as images from Microsoft Excel and LibreOffice Calc.

### [Ignore Passwords/Tokens](../commands/ignore-passwords-tokens.ini)

Ignore the clipboard if it contains a password or token based on the text
characteristics (length, uppercase letters, digits).

### [Image Tab](../commands/image-tab.ini)

Automatically store images copied to clipboard in a separate tab.

### [Import Commands after Copied to Clipboard](../commands/import-commands-after-copied.ini)

Shows notification allowing to easily import commands just copied to clipboard.

The copied text can be either link to a command on github or starts with `[Command]` or `[Commands]`.

### [Linkify](../commands/linkify.ini)

Creates interactive link from plain text.

### Play Sound when Copying to Clipboard ([Windows](../commands/play-sound-when-copying-to-clipboard-windows.ini), [Linux](../commands/play-sound-when-copying-to-clipboard-linux.ini))

Following command will play an audio file whenever something is copied clipboard.

### [Store Copy Time](../commands/store-copy-time.ini)

Store the copy time of new items in a **tag**.

To show tags in the item list the **Tags** plugin is required.

Optionally you can change the appearance of the copy time tag. See this example:

`Tag Name`: `\1`

`Match`: `(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})`

`Style Sheet`: `font-size: 9pt; color: #fff; border: 1px solid #000; background: #000; padding: 0 2px`


### [Show Window Title](../commands/show-window-title.ini)

Shows source application window title for new items in tag.

Requires "Tags" plugin.

### [Store Mouse Selections in Separate Tab](../commands/mouse-selections-tab.ini)

Stores Linux/X11 mouse selections in a separate tab.

### [Synchronize Clipboard with Other Sessions](../commands/synchronize-clipboard-with-other-sessions.ini)

Synchronizes clipboard with other application session running on different X11 servers.

### [Tab for URLs with Title and Icon](../commands/tab-for-urls-with-title-and-icon.ini)

For copied URLS tries to get web page title and icon and stores it with item in "url" tab.

### [KeePassXC protector](../commands/keepassxc-protector.ini)

A plugin that prevents saving data from the [KeePassXC](../commands/https://github.com/keepassxreboot/keepassxc) password manager.

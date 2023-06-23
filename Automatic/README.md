This section contains commands which are executed automatically whenever something is copied to clipboard.

### [Big Data Tab](big-data-tab.ini)

Automatically moves larger amount of data copied to clipboard to a special tab
(see the command variables to set the output tab and size limit) to keep the
access to primary clipboard tab swift.

### [Copy a Secret If a Modifier Held](copy-a-secret-if-modifier-held.ini)

If modifier is held for a second after copying a content, it will not be stored
or shown in GUI.

### [Copy Clipboard to Window Tabs](copy-clipboard-to-windows-tab.ini)

Automatically adds new clipboard to tab with same name as title of the window where copy operation was performed.

### [Decode URLs from Google Search](decode-google-search-url.ini)

Automatically decodes a URL from Google Search when it's copied to the clipboard. For example, when the following URL is copied to the clipboard:

> https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj95u6osNn_AhW0hJUCHePPAa8QFnoECA4QAQ&url=https%3A%2F%2Fhluk.github.io%2FCopyQ%2F

It is replaced by:

> https://hluk.github.io/CopyQ/

which is the decoded `&url` part from the original URL. The original URL is also added to the active tab's history, but it is not copied to the clipboard.

Note: needs a Python interpreter to be available at `/bin/python`.

### [Ignore Images when Text is Available](ignore-images-when-text-is-available.ini)

This is useful for ignoring cells copied as images from Microsoft Excel and LibreOffice Calc.

### [Image Tab](image-tab.ini)

Automatically store images copied to clipboard in a separate tab.

### [Import Commands after Copied to Clipboard](import-commands-after-copied.ini)

Shows notification allowing to easily import commands just copied to clipboard.

The copied text can be either link to a command on github or starts with `[Command]` or `[Commands]`.

Available in CopyQ v3.0.0.

### [Linkify](linkify.ini)

Creates interactive link from plain text.

### [Move Images to Other Tab](move-images-to-other-tab.ini)

Omits saving images in the first tab.
This can make application a bit more snappier since big image data won't need to be loaded when main window is displayed or clipboard is stored for the first time.

### Play Sound when Copying to Clipboard ([Windows](play-sound-when-copying-to-clipboard-windows.ini), [Linux](play-sound-when-copying-to-clipboard-linux.ini))

Following command will play an audio file whenever something is copied clipboard.

### [Store Copy Time](store-copy-time.ini)

Store the copy time of new items in a **tag**.

To show tags in the item list the **Tags** plugin is required.

Optionally you can change the appearence of the copy time tag. See this example:

`Tag Name`: `\1`

`Match`: `(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})`

`Style Sheet`: `font-size: 9pt; color: #fff; border: 1px solid #000; background: #000; padding: 0 2px`


### [Show Window Title](show-window-title.ini)

Shows source application window title for new items in tag.

Requires "Tags" plugin.

### [Store Mouse Selections in Separate Tab](mouse-selections-tab.ini)

Stores Linux/X11 mouse selections in a separate tab.

### [Synchronize Clipboard with Other Sessions](synchronize-clipboard-with-other-sessions.ini)

Synchronizes clipboard with other application session running on different X11 servers.

### [Tab for URLs with Title and Icon](tab-for-urls-with-title-and-icon.ini)

For copied URLS tries to get web page title and icon and stores it with item in "url" tab.

### [KeePassXC protector](keepassxc-protector.ini)

A plugin that prevents saving data from the [KeePassXC](https://github.com/keepassxreboot/keepassxc) password manager.

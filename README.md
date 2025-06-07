# CopyQ Command Project

## 🎯 Goal

This project aims to contribute useful custom commands (based on .ini files) to the CopyQ clipboard manager.
It includes the development of text processing commands such as uppercase/lowercase conversion, line sorting, and duplicate removal, all of which are packaged and executable in a Docker container environment.

## 📋 Requirements

The Docker image includes the following software and libraries:

* platform ex) Ubuntu
* curl >= 8.0.0
* CopyQ >= 7.0.0
* Custom command files (.ini format)

## 📦 How to install & Run

Load image from tar file

```bash
docker load -i final_2021040010.v1.tar
```

Check image

```bash
docker images
```

create the container

```bash
docker run -dit final_2021040010:v1
```

find container

```bash
docker ps
```

Access the container

```bash
docker exec -it <CONTAINER_ID> /bin/bash
```

## ⚙ How to run

All command files are stored in /app/Scripts with .ini extension. These commands can be imported into the CopyQ clipboard manager and executed directly.

To use a command:
1. Open CopyQ application.
2. Press F6 to open the Command Editor.
3. Click Paste Commands (or press Ctrl + V) after copying the command content.
4. Apply and test the command using clipboard input.

Each .ini file defines a command using CopyQ's scripting API (JavaScript-like syntax) and can be executed from the toolbar, menu, shortcut, or automatically depending on category.

## 📁 Directory Structure

```
/app/
├── .github/                 # GitHub files
├── Application/             # Toolbar/shortcut commands
├── Automatic/               # Auto-run commands on clipboard change
├── Display/                 # Commands for item appearance
├── Global/                  # System-wide shortcut commands
├── Scripts/                 # Custom commands added in this project (.ini)
├── Templates/               # Templates for new commands
├── images/                  # Reference images in README
├── tests/                   # Test scripts
├── utils/                   # Utility scripts
├── .gitignore
├── LICENSE
└── README.md
```

## 🛑 Exit and Clean Up

Exit the container
```bash
exit
```

Stop the container
```bash
docker stop <CONTAINER_ID>
```

Remove the container
```bash
docker rm <CONTAINER_ID>
```

Remove the image
```bash
docker rmi final_2021040010:v1
```

## 📄 License

This project is licensed under the GPL-3.0 License. See the [LICENSE](https://github.com/02LMJ/copyq-commands/blob/master/LICENSE) file for more details.

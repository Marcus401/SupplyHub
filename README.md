# SupplyHub
### By Aeolipile
###### Bridging companies` to their supply needs in the digital age
- - -
[Technologies Used🛠️](#technologies-used-)

[Group Members👥](#members-)

[Prerequisites📋](#install-first-if-not-yet-installed-)

[Instructions📖](#instructions-)
* [How to create a local repository and import the project](#how-to-create-a-local-repository-and-import-the-project)
* [How to connect to the Azure SQL Database in SSMS](#how-to-connect-to-the-azure-sql-database-in-ssms)

[Terminal Commands💻](#terminal-commands-)
* [Directory Commands](#directory-commands)
* [Node(npm) commands](#nodenpm-commands)

[Git commands🔧](#git-commands-)
  * [Git branch commands](#git-branch-commands)
  * [Git commands for pushing to the cloud repository](#git-commands-for-pushing-to-the-cloud-repository)
  * [Other git commands](#other-git-commands)
- - -

## Technologies Used 🛠️
(take note of these when trying to find solutions to problems):
##### Frontend:
* **ReactJS** _with_ **Typescript**
* Build Tool: **Vite**
* **Tailwind CSS**
* **Axios** _for API calls_
* **Node.js** JavaScript runtime

##### Backend:
* **ASP.NET Core 8.0**
* **Entity Framework Core** _for database management_
* **Azure SQL Database** _for database_

Hosted in Azure Web Services
- - -
# Members 👥:
- Marcus Acaba
- Dawn Ferrer
- Patrick Del Prado
- Rica Sofia Arroyo
- Glenn Batac
- - -
# Install first if not yet installed 📋:
* Git:
  * https://git-scm.com/downloads
* Node.js: 
  * https://nodejs.org/en/download/
* .NET 8 SDK: 
  * https://dotnet.microsoft.com/download/dotnet/8.0
* Azure CLI (_for backend and database devs_): 
  * https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-windows?tabs=azure-cli
- - -
# Instructions 📖
## How to create a local repository and import the project

1. create a folder, this will be where your project and local repository will be
2. open the terminal to the folder
3. run the following commands:
   * (Do this if you have not yet set up your account into git)
     * `git config --global user.name {your Name}`
     * `git config --global user.email {your Email}`
     * (replace with your username and email)
   * `git init`
   * `git add origin https://github.com/Marcus401/SupplyHub.git`
   * `git fetch origin main`
   * `cd supplyhub.client`
   * `npm install` <- this will install react dependencies into the frontend library
   * `cd ..`

> For backend and database developers:

## How to connect to the Azure SQL Database in SSMS
1. Login into azure cli
   * `az login` or `az login --use-device-code`
   * (follow the instructions)
2. in SSMS, open the `Connect to server` window
3. Fill in the following:
   * `Server type:` Database Engine
   * `Server name:` supplyhub-server.database.windows.net (press enter afterward)
   * `Authentication:` Microsoft Entra Default
   * `User Name:` {microsoft email}
   * `Encryption:` Optional
   * `Trust Server Certificate:` Check
4. Connect
- - -
# Terminal Commands 💻
* `Up Arrow Key` <- goes to the previous command
* `Down Arrow Key` <- goes to the next command
* `Tab` <- autocompletes the command
* `Ctrl + C` <- stops the current process
* `cd {path}` <- changes the directory to the specified path
* `cd ..` <- goes back one directory

**Note:** always mind of the current directory you are in before executing commands such as installing packages or running the project

## Node(npm) commands
* `npm install` <- installs all dependencies in the package.json file
* `npm run starts` <- starts the frontend project
* `npm i {package}` <- installs the specified package
  * `npm i {package}@{version}` <- installs the specified package with the specified version
  * `npm i {package} --save` <- installs the specified package as a dependency 
    * **Note:** Use this if the library is required for the project to work properly
  * `npm i {package} --save-dev` <- installs the specified package as a dev dependency
* `npm uninstall {package}` <- uninstalls the specified package

# Git commands 🔧
## Git branch commands
* `git branch` <- shows all branches
* `git branch {branch name}` <- creates a new branch
* `git checkout {branch name}` <- switches to the branch
* `git merge {branch name}` <- merges the branch to the current branch
* `git branch -d {branch name}` <- deletes the branch

## Git commands for pushing to the cloud repository
* `git add .` <- adds all files to the staging area
* `git commit -m "{message}"` <- commits the changes, conventionally say your changes short and concisely in the message
* `git push origin {branch name}` <- pushes the branch to the cloud repository

## Other git commands
* `git pull origin {branch name}` <- pulls the branch from the cloud repository (updates your local repository to the latest one from the cloud)
* `git status` <- shows files ready to be committed and also compares to the cloud repository
* `git diff` <- shows files ready to be committed
* `git log` <- shows the commit history along with respective commit hashes
  * Press `K` or the `Up Arrow Key` to move up **_one line_** at a time
  * Press `Enter` to move down **_one line_** at a time.
  * Press `B` to scroll **_one page_** up
  * Press `Space` to scroll _**one page**_ down.
  * Press `Q` to **_exit_** the log
* `git reset --hard` <- resets the repository to the last commit
* `git reset --hard {commit hash}` <- resets the repository to a specified commit hash

#### Update as needed

```
                          ⠀⢸⠂⠀⠀⠀⠘⣧⠀⠀⣟⠛⠲⢤⡀⠀⠀⣰⠏⠀⠀⠀⠀⠀⢹⡀
                          ⠀⡿⠀⠀⠀⠀⠀⠈⢷⡀⢻⡀⠀⠀⠙⢦⣰⠏⠀⠀⠀⠀⠀⠀⢸⠀
                          ⠀⡇⠀⠀⠀⠀⠀⠀⢀⣻⠞⠛⠀⠀⠀⠀⠻⠀⠀⠀⠀⠀⠀⠀⢸⠀
                          ⠀⡇⠀⠀⠀⠀⠀⠀⠛⠓⠒⠓⠓⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀
                          ⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠀
                          ⠀⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⠀⠀⢀⡟⠀
                          ⠀⠘⣇⠀⠘⣿⠋⢹⠛⣿⡇⠀⠀⠀⠀⣿⣿⡇⠀⢳⠉⠀⣠⡾⠁⠀
                          ⣦⣤⣽⣆⢀⡇⠀⢸⡇⣾⡇⠀⠀⠀⠀⣿⣿⡷⠀⢸⡇⠐⠛⠛⣿⠀
                          ⠹⣦⠀⠀⠸⡇⠀⠸⣿⡿⠁⢀⡀⠀⠀⠿⠿⠃⠀⢸⠇⠀⢀⡾⠁⠀
                          ⠀⠈⡿⢠⢶⣡⡄⠀⠀⠀⠀⠉⠁⠀⠀⠀⠀⠀⣴⣧⠆⠀⢻⡄⠀⠀
                          ⠀⢸⠃⠀⠘⠉⠀⠀⠀⠠⣄⡴⠲⠶⠴⠃⠀⠀⠀⠉⡀⠀⠀⢻⡄⠀
                          ⠀⠘⠒⠒⠻⢦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⠞⠛⠒⠛⠋⠁⠀
                          ⠀⠀⠀⠀⠀⠀⠸⣟⠓⠒⠂⠀⠀⠀⠀⠀⠈⢷⡀⠀⠀⠀⠀⠀⠀⠀
                          ⠀⠀⠀⠀⠀⠀⠀⠙⣦⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⠀⠀⠀⠀⠀⠀⠀
                          ⠀⠀⠀⠀⠀⠀⠀⣼⣃⡀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣆⠀⠀⠀⠀⠀⠀
                          ⠀⠀⠀⠀⠀⠀⠀⠉⣹⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⠀⠀⠀⠀⠀⠀
                          ⠀⠀⠀⠀⠀⠀⠀⠀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡆⠀⠀
```
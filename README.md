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

[Terminal Commands💻](#basic-terminal-commands-)

[Node(npm) commands📦](#nodenpm-commands-)

[How to run the program⚙️](#how-to-run-the-program-)

[Git commands🔧](#git-commands-)
  * [Git branch commands](#git-branch-commands)
  * [Git commands for pushing to the cloud repository](#git-commands-for-pushing-to-the-cloud-repository)
  * [Other git commands](#other-git-commands)

[Important notes in using Github❗](#important-notes-in-using-github-)

[Tips during development✔️](#tips-during-development-)
- - -

## Technologies Used 🛠️
(take note of these when trying to find solutions to problems):
##### Frontend:
* **ReactJS** _with_ **Typescript**
* Build Tool: **Vite** _(Very Important*)_
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
- Marcus Acaba         : Frontend, Backend, Database
- Dawn Ferrer          : Backend, Database
- Patrick Del Prado    : Backend, Database
- Myles Reyes          : Frontend, Database
- Rica Sofia Arroyo    : Frontend
- Glenn Batac          : Frontend
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
   * `git remote add origin https://github.com/Marcus401/SupplyHub.git`
   * `git pull origin main`
   * Do this if the branch you are currently in is called master:
     * `git checkout main`
     * `git branch -d master`
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
# Basic Terminal Commands 💻
* `Up Arrow Key` <- goes to the previous command
* `Down Arrow Key` <- goes to the next command
* `Tab` <- autocompletes the command
* `Ctrl + C` <- stops the current process
* `cd {path}` <- changes the directory to the specified path
* `cd ..` <- goes back one directory

**Note:** always mind of the current directory you are in before executing commands such as installing packages or running the project

# Node(npm) commands 📦
* `npm install` <- installs all dependencies in the package.json file
* `npm run start` <- starts the frontend project
* `npm i {package}` <- installs the specified package
  * `npm i {package}@{version}` <- installs the specified package with the specified version
  * `npm i {package} --save` <- installs the specified package as a dependency 
    * **Note:** Use this if the library is required for the project to work properly
  * `npm i {package} --save-dev` <- installs the specified package as a dev dependency
* `npm uninstall {package}` <- uninstalls the specified package

# How to run the program ⚙️
1. Press the "run" button in your IDE

   **or**
 run the following commands:
 * `cd SupplyHub.Server`
 * `dotnet run`
 
 Note: Accept the security warning to accept the https localhost certificate (prevents you from running into the unsafe url warning)

2. open https://localhost:5173/

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
* `git pull` <- pulls the branch from the cloud repository (updates your local repository to the latest one from the cloud)
* `git status` <- compares your last _commit_ to the cloud repository
* `git diff` <- shows files ready to be committed
* `git log` <- shows the commit history along with respective commit hashes
  * Press `K` or the `Up Arrow Key` to move up **_one line_** at a time
  * Press `Enter` to move down **_one line_** at a time.
  * Press `B` to scroll **_one page_** up
  * Press `Space` to scroll _**one page**_ down.
  * Press `Q` to **_exit_** the log
* `git reset --hard` <- resets the repository to the last commit
* `git reset --hard {commit hash}` <- resets the repository to a specified commit hash

# Important notes in using GitHub ❗
* `commits` are saved states of changes in the project, pushing to the cloud repository will take your last commit to the cloud, and returning to previous states brings you to previous commits.
* `merging` a branch will update that branch to the specified branch it will merge into
* everyone should update their local repository whenever the cloud repository updates using `git pull` to prevent a `merge conflict`, `commit` then use `git status` to see the differences between your local repository and the cloud repository
* `merge conflicts` occur when two people have changed the same lines in a file, or if one developer deleted a file while another developer was modifying it. In these cases, Git cannot automatically determine what is correct. Conflicts only affect the developer conducting the merge, the rest of the team is unaware of the conflict. Git will mark the file as being conflicted and halt the merging process. It is then the developers' responsibility to resolve the conflict.
* In some cases use `--force` if there are conflicts in pulling the repository, this forces your local repository to install the changes in the cloud repository: `git pull --force`
* Make sure to specify if you are in a branch, use `git checkout {branch}` to switch to that branch before using `pull` or `push`

# Tips during Development ✔️
**to avoid conflicts:**
* make sure to frequently `pull` from the base branch
* `Pull` before you `Push`
* Keep coordination very open and active on what part you are working on
* As much as possible, avoid editing the same file at once

#### Plugins you might like to use
* ES7 react snippets for VScode - gives shortcuts to pre defined snippets instead of having to type out the same thing over and over
* Tailwind support - Tailwind css suggestions
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

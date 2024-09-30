# SupplyHub
### By Aeolipile
#### Bridging companies` to their supply needs in the digital age

Created with ReactJS+Vite, ASP.NET Core, and Azure SQL Database
Hosted in Azure Web Services

## Members:
- Marcus Acaba
- Dawn Ferrer
- Patrick Del Prado
- Rica Sofia Arroyo
- Glenn Batac

## Install first if not yet installed:
* Git: https://git-scm.com/downloads
* Node.js: https://nodejs.org/en/download/
* .NET 8 SDK: https://dotnet.microsoft.com/download/dotnet/8.0
* Azure CLI (for backend and database devs): https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-windows?tabs=azure-cli

## How to create a local repository and import the project

1. create a folder, this will be where your project and repository will be
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

> How to connect to the Azure SQL Database in SSMS
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

#### * Update as needed

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
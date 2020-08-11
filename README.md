<div align="center">
  <img src="https://raw.githubusercontent.com/aimsucks/sentry/master/assets/logo-github-color.png" width="150" height="auto" />
</div>

<h1 align="center">Sentry</h1>
<p align="center">
  <b>Simple authentication platform for EVE Online Discord servers</b></br></br>
  <a href="https://sentry.aimsucks.space/">View Demo</a> · <a href="https://github.com/Aimsucks/sentry/issues/new/choose">Report Bugs</a> · <a href="https://github.com/Aimsucks/sentry/issues/new/choose"> Request Features</a>
</p>

# Contents

* [Overview](#Overview)
* [Features](#Features)
* [Development](#Development)
* [Contributing](#Contributing)
* [License](#License)

# Overview

This is an authentication app for Discord servers run by EVE Online entities. The app allows you to set whitelist (and eventually blacklist) permissions for groups of users based on individual characters, corporations, and alliances. It can manage however many servers you want.

# Features

* Character management page
* Favoriting characters to set nickname across all guilds bot manages
* Per-guild (server) management page
* Per-role character/corporation/alliance permissions
* Automatic character/corporation checking at defined intervals
* Automatic Discord user checking at defined intervals

# Development

This project uses the `Node.js` platform. Make sure that's installed. Details can be found [here](https://nodejs.org/en/). 

After you've forked and cloned the repository, you will need to create a Discord application and ESI application.

## Discord

Head over to the Discord [developer site](https://discord.com/developers/applications) and create a new application. Take note of the client ID, client secret, and then create a bot for the application. Also note the token for the bot, and put all three of the values into their respective variables in the `.env` file in the `server` directory. Make sure to enable the two inputs under `Privileged Gateway Intents`. 

Go to the OAuth 2 page and check `bot` under the `scopes` header and copy the link it generates. Once you click `bot`, a new input will appear on the bottom of the page that allows you to select permissions to give the bot. **The bot does not need administrator, but it is highly recommended so the bot can change roles and nicknames of all the users.** In this menu, check:

* Administrator (optional)
* Manage Roles
* Manage Nicknames

The generated link will invite the bot to a server of your choosing with those permissions, so open it and invite it to your development server.

## ESI

Go to the EVE Online [developer site](https://developers.eveonline.com/) and click `Manage Applications`. Create a new application and give it a name and description. Under `Connection Type` select `Authentication Only`, because this app only authenticates users and does not require OAuth 2 tokens to function.

The callback URL, if you are developing it locally, will be `http://localhost:5000/auth/eve/callback` or `http(s)://domain:port/auth/eve/callback`, depending on what your development setup is like. 

Like Discord, put the client ID and secret into the `.env` file in the `server` directory when you are finished.

<br />

Once you've created your Discord bot and ESI app, and are ready to make changes to the code, navigate into both the `server` and `client` folders and run `npm install` to install the dependencies for each part.

Once the dependencies are installed, you have two options: running both the client and server in the same terminal with `concurrently`, or using two different terminals individually run the processes. 

## Concurrently

Concurrently allows you to run multiple commands simultaneously. You can use this on your own by modifiying the command or using the provided command in the server's `package.json`. 

```commandline
cd server
concurrently "nodemon ." "cd ../client && npm run start"
```

If you prefer to use the provided command:

```commandline
cd server
npm run dev
```

## Separate Terminals

[Visual Studio Code](https://code.visualstudio.com/) is a fantastic code editor that supports multiple terminals, so it's recommended to use it for this project. To run multiple terminals with VS Code:

1. Press `CTRL+BACKTICK` to open a terminal
2. Press `CTRL+SHIFT+5` to split the terminal
3. In one of the terminals, run:

```commandline
cd server
nodemon .
```
4. And in the other:

```commandline
cd client
npm run start
```

Both of these methods allow the code to be edited and apps to be refreshed once changes are saved. It makes development a much faster process.

# Contributing

Contributions are greatly appreciated! Make sure you have signed the License Agreement by logging on the EVE Online [developer site](https://developers.eveonline.com) before submitting any pull requests. All bug fixes or features must not include extra superfluous formatting changes. To contribute:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/feature-name`)
3. Commit your changes (`git commit -m 'Added feature-name`)
4. Push to the branch (`git push origin feature/feature-name`)
5. Open a [pull request](https://github.com/Aimsucks/sentry/compare)

# License

Distributed under the MIT License. See [LICENSE](https://github.com/Aimsucks/sentry/blob/master/LICENSE) for more details.
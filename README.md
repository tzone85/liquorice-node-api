# liquorice-node-api
## Structure
```bash
.
├── README.md
├── config
│   ├── config.json
│   └── db.js
├── migrations
│   └── 20190822091756-create-user.js
├── models
│   ├── index.js
│   └── user.js
├── package-lock.json
├── package.json
├── seeders
│   └── 20190822092514-user-seeder.js
└── server.js
```
Urls:
- [development](http://localhost/users-api)

- [development] (http://localhost/users-api/)

## Setup

## Node Version
- Execute `nvm use 10.16.3` in terminal
nvm use
## Development
1. Execute `npm install` in root
2. Execute `npm start`
3. Copy .env.example and rename to .env
4. Modify the contents of the new .env file to match your DB credentials

This will start the project in a development environment.

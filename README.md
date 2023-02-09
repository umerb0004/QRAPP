# RAAP

RAAP is a performance management software offers flexible features for Team Lead and a simple employee experience. That means you can automate your existing process or the one you're dreaming of, without compromise. Your Team Leads and employees will thank you.

## Requirements

For development, you will only need Node.js installed on your environment.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.
```bash
 node --version v18.12.0

 npm --version 8.19.2
```


## Installations
#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.
```bash
  $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```
If everything works fine, you should run
```bash
  brew install node
```
#### Node installation on Linux
```bash
  sudo apt-get install python-software-properties

  sudo add-apt-repository ppa:chris-lea/node.js

  sudo apt-get update

  sudo apt-get install nodejs
  ```

## Languages & tools

- [Next.js](https://github.com/vercel/next.js) is used for frontend and backend.
- [eslint](https://eslint.org/) for better code quality.
- [prettier](https://prettier.io/) for maintaining code quality in project.
- [Tailwind](https://tailwindcss.com/) is used for styling.

### TypeScript Installation
  npm i ts-node

#### Install NPM packages
```bash
 npm install
```
### Database Setup
##### Installing MySQL
To install it, update the package index on your server if you’ve not done so recently:
```bash
sudo apt update
```
Then install the mysql-server package:
```bash
sudo apt install mysql-server
```
Ensure that the server is running using the following command:
```bash
sudo systemctl start mysql.service
```
After running the above commands, [configure](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04) mysql and move forward.
##### Migration run
Run the following command to execute migrations:
```bash
 npx prisma migrate dev
```
##### DB seed
Run the following command to seed initail data to database:
```bash
 npx prisma db seed
```

## Start & watch

```bash
 npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

## Notes
- Created DB schema
- Implemented Sign In with Google Functionality.
- Created UI for Sign In Page
- Created UI of Sidebar.
- Sent Email to Reporting To.
- Added ESLint and Stylelint for consistency and better code quality.


## Future Work
- We can add proper Authentication Process where user can signup with email and password.
- We can add detailed test cases.
- We can add Profile page.
- We can add profile CRUD.
- We can add side bar functionality
- We can save data of users in DB

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

  $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

  brew install node

#### Node installation on Linux

  sudo apt-get install python-software-properties
  sudo add-apt-repository ppa:chris-lea/node.js
  sudo apt-get update
  sudo apt-get install nodejs

#### Install NPM packages
```bash
 npm install
```
## Start & watch


```bash
 npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result


## Languages & tools


### TypeScript

- [Next.js](https://github.com/vercel/next.js) is used for frontend and backend.
- [eslint](https://eslint.org/) for better code quality.
- [prettier](https://prettier.io/) for maintaining code quality in project.

### Database Setup
Migration run
```bash
 npx prisma migrate dev
```
DB seed
```bash
 npx prisma db seed
```

### Tailwind CSS 
- [Tailwind](https://tailwindcss.com/) is used for styling.

## Environment Variables
Create a .env file in the root of your project and add following variables

- DATABASE_URL=
- GOOGLE_CLIENT_ID=
- GOOGLE_CLIENT_SECRET=
- NEXTAUTH_URL=
- JWT_SECRET=
- NEXT_PUBLIC_SG_API_KEY =
- NEXT_PUBLIC_FROM_EMAIL =
- NEXT_PUBLIC_CRONJOB_API =
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

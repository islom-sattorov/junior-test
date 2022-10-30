# IMPORTANT TO READ

# Alif Junior Test

## How to start

**ALERT: Commands need to run on two different tabs of the terminal**

**Run JSON Server**

```
npm run server
```

**Run application**

```
npm start
```

## How to login

**Click on the login button in the upper right corner and enter this information into the input**

```
username: admin
password: admin
```

When you log in, a _PATCH_ request is sent to the local json server, and provided that it returns you `status < 300`, the login will be successful.

Once you have logged in, you have the opportunity to add new vacancies to the roster.

Vacancies are added by _POST_ method to local json server and returns the added value and the REACT draws it in the table.

## Tech

- HTML(Semantic)
- CSS (SCSS)
- TypeScript
- React
- JSON Server
- AXIOS (GET, POST, PATCH)
- Redux
- MUI

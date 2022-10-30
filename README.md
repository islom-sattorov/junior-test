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

The table is drawn by **GET** request from http://localhost:3001/posts/ (If you need to change local server port please check _package.json_ file)

## How to login

**Click on the login button in the upper right corner and enter this information into the input**

```
username: admin
password: admin
```

When you log in, a **PATCH** request is sent to the local json server, and provided that it returns you `status < 300`, the login will be successful.

Once you have logged in, you have the opportunity to add new vacancies to the roster.

Vacancies are added by **POST** method to local json server and returns the added value and the REACT draws it in the table.

## Tech

- HTML(Semantic)
- CSS (SCSS)
- TypeScript
- React
- JSON Server
- AXIOS (GET, POST, PATCH)
- Redux
- MUI

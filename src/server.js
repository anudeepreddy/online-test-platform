import sirv from "sirv";
import compression from "compression";
import * as sapper from "@sapper/server";
import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import sessionFileStore from 'session-file-store';
const FileStore = sessionFileStore(session);
const app = express();
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";
app.use(bodyParser.json());
app.use(session({
  secret: 'thisismysecret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 31536000
  },
  store: new FileStore({
    //path: process.env.NOW ? `/tmp/sessions` : `.sessions`
    path: '.sessions'
  })
}))
app.use(compression({ threshold: 0 }));
app.use(sirv("static", { dev }));

app.use(sapper.middleware({
  session: req => ({
    user: req.session && req.session.user
  })}));

app.listen(PORT, err => {
  if (err) console.log("error", err);
});

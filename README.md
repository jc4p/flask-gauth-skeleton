# flask-gauth-skeleton

A simple starting point for Flask apps that want Google authentication.

## Getting Started

- Add your client id from the Google Developers Console to main.js.
- Change the secret in main.py, for help see the [Flask sessions quickstart](http://flask.pocoo.org/docs/0.10/quickstart/#sessions)

## How it works

This project currently does no checks on the Google authorization. It simply acknowledges that the user has a Google account, saves their name to a cookie, and considers them logged in. You'll need to change this to do whatever it needs to do to match your goal.

You can put authentication changes in `main#login` and use it to do anything from letting one specific person, based on their Google id, access the gated area(s) of your site to getting their Google e-mail address and logging them in based on some look-up database you already have. The possiblities are endless, and hopefully with this sekelton you don't have to do the annoying beginning cruft.
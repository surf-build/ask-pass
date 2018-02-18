# git-askpass-env: A GIT_ASKPASS that just spits out environment variables

This is an implementation of GIT_ASKPASS that just spits out an environment variable for the username / password. This code is based on ask-pass from https://github.com/desktop/desktop.

### How do I use it?

Set `GIT_ASKPASS_USER` and `GIT_ASKPASS_PASSWORD`, then set `GIT_ASKPASS` to `git-askpass-env`. Tada!

PS: if your goal is to clone via a Personal OAuth token, set `GIT_ASKPASS_USER` to the token, and `GIT_ASKPASS_PASSWORD` to `x-oauth-basic`.

### But how do I install it?

Outside of a node project:

```
export GIT_ASKPASS="npx git-askpass-env"
```

Inside a node project, perhaps with [Dugite](https://github.com/desktop/dugite):

```
npm i --save git-askpass-env

// Later, in your JS
process.env.GIT_ASKPASS='git-askpass-env'
```

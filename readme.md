# Browsersverige for OS X

A simple menu bar app for Mac OS X, displaying browser stats from [Browsersverige](http://browsersverige.se/).

![Screenshot](http://labs.urre.me/images/browsersverige-osx.jpg)

## Install

+ [Download app](http://browsersverige.se/apps)
+ Move ``browsersverige.app`` to ``/Applications``
+ Double click on Browsersverige

## Launch on startup

Follow this [guide](https://github.com/sindresorhus/guides/blob/master/launch-app-on-startup-osx.md).

## Development

##### Setup

- Download [atom-shell](https://github.com/atom/atom-shell/releases), rename `Atom.app` to `atom-shell.app` and put it in `/Applications`
- Add `alias atom-shell='/Applications/atom-shell.app/Contents/MacOS/atom'` to your ``.bashrc/.bashprofile``

##### Run

- ``cd app``
- ``npm install` *(first time)*
- ``atom-shell .`

## Todo
- [ ] Refresh numbers on menu item click i.e update api call
- [ ] Nicer look and feel

## License

MIT © 2015 [Urban Sanden](http://twitter.com/urre)
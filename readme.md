# Checkbix

[![Build Status](https://travis-ci.org/urre/checkbix.svg?branch=master)](https://travis-ci.org/urre/checkbix)

[![NPM](https://nodei.co/npm/checkbix.png?compact=true)](https://npmjs.org/package/checkbix)

Simple vanilla Javascript plugin for enhancing checkboxes. Accessible, lightweight and easy to use. No dependencies.

## Usage

```html
<input id="mycheckbox" type="checkbox" class="checkbix" data-text="Checkbix">
```

Se [demo](https://urre.github.io/checkbix/) for more examples and settings.

## Install

```bash
bower install checkbix.js
```

```bash
npm install checkbix
```

### Include files

```html
<link rel="stylesheet" href="dist/css/checkbix.min.css">
```

```html
<script src="dist/js/checkbix.min.js"></script>
```

### Init

```html
<script>
    Checkbix.init();
</script>
```

## Develop

Build

    npm run build:all    

Serve

    npm start

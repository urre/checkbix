# Checkbix

[![Build Status](https://travis-ci.org/urre/checkbix.svg?branch=master)](https://travis-ci.org/urre/checkbix)

Simple vanilla Javascript plugin for enhancing checkboxes. Accessible, lightweight and easy to use. No dependencies.

## Usage

### [Demo and docs](https://urre.github.io/checkbix/)

### Default

```html
<input id="mycheckbox" type="checkbox" class="checkbix" data-text="Checkbix">
```

Se [demo](https://urre.github.io/checkbix/) for more examples and settings.

## Install

```bash
bower install checkbix
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

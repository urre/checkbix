# Checkbix

[![Build Status](https://travis-ci.org/urre/checkbix.svg?branch=master)](https://travis-ci.org/urre/checkbix) ![](https://badge-size.herokuapp.com/urre/checkbix/master/dist/js/checkbix.min.js.svg)

Simple lightweight vanilla Javascript plugin for enhancing checkboxes. Wip.

## Usage

### Default

```html
<input id="mycheckbox" type="checkbox" class="checkbix" data-text="Checkbix">
```

### Size

```html
<input id="myothercheckbox" type="checkbox" class="checkbix" data-text="Checkbix. Large, checked" data-size="large" checked>
```

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

Watch

    npm run watch:all

Serve
    
    npm run serve

### Todo
+ [ ] Options for circled and colors
+ [ ] Describe in readme: feautures, accessibility
+ [ ] Describe in readme: Common JS, Browser global etc

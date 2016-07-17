# Checkbix

[![Build Status](https://travis-ci.org/urre/checkbix.svg?branch=master)](https://travis-ci.org/urre/checkbix) ![](https://badge-size.herokuapp.com/urre/checkbix/master/dist/js/checkbix.min.js.svg)

Simple lightweight vanilla Javascript plugin for enhancing checkboxes. Wip.

## Usage

### [Demo and docs](https://github.com/urre/checkbix)

### Default

```html
<input id="mycheckbox" type="checkbox" class="checkbix" data-text="Checkbix">
```

### Size

```html
<input id="myothercheckbox" type="checkbox" class="checkbix" data-text="Checkbix. Large, checked" data-size="large" checked>
```

### Shape
<input id="mycheckbox2" type="checkbox" class="checkbix" data-shape="circled" data-text="Circled">

```html
<input id="mycheckbox2" type="checkbox" class="checkbix" data-text="Circled. Large, checked" data-shape="circled">
```

### Colors
<input id="mycheckbox3" type="checkbox" class="checkbix" data-shape="circled" data-color="black" data-text="Black, circled" checked>

```html
<id="mycheckbox3" type="checkbox" class="checkbix" data-shape="circled" data-color="black" data-text="Black, circled" checked>
```

<input id="mycheckbox4" type="checkbox" class="checkbix" data-color="blue" data-text="Blue" checked>

```html
<input id="mycheckbox4" type="checkbox" class="checkbix" data-color="blue" data-text="Blue" checked>
```

<input id="mycheckbox5" type="checkbox" class="checkbix" data-shape="circled" data-size="large" data-color="red" data-text="Red, large" checked>

```html
<input id="mycheckbox5" type="checkbox" class="checkbix" data-size="large" data-color="red" data-text="Red, large" checked>
```

<input id="mycheckbox6" type="checkbox" class="checkbix" data-color="gray" data-text="Gray" checked>

```html
<input id="mycheckbox6" type="checkbox" class="checkbix" data-color="gray" data-text="Gray" checked>
```

<input id="mycheckbox7" type="checkbox" class="checkbix" data-shape="circled" data-color="orange" data-text="Orange" checked>

```html
<input id="mycheckbox7" type="checkbox" class="checkbix" data-shape="circled" data-color="orange" data-text="Orange" checked>
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
+ [ ] Describe in readme: feautures, accessibility
+ [ ] Describe in readme: Common JS, Browser global etc

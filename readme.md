# Checkbix

[![Build Status](https://travis-ci.org/urre/checkbix.svg?branch=master)](https://travis-ci.org/urre/checkbix)

[![NPM](https://nodei.co/npm/checkbix.png?compact=true)](https://npmjs.org/package/checkbix)

Simple vanilla Javascript plugin for enhancing checkboxes using CSS. Accessible, lightweight and easy to use. No dependencies.

## Usage

```html
<input id="mycheckbox" type="checkbox" class="checkbix" data-text="Checkbix">
```

See the [demo](https://urre.github.io/checkbix/) for more examples and settings.

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

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

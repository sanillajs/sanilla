# Sanilla

Why do we have to study new grammar for make SPA?

This is very easy and simple framework for make single page application.

We don't need another grammer.

Sanilla is SPA + Vanilla(JS).

## Install
npm
```sh
npm install @sanillajs/sanilla
```
yarn
```sh
yarn add @sanillajs/sanilla
```

## How to use Sanilla

### Hello World

**src/index.js**
```js
import Sanilla from '@sanillajs/sanilla';
import app from './app.html';

Sanilla.mount('#root', app);
```

**src/app.html**
```html
<h1>Hello Sanilla!</h1>
<script>
	setTimeout(() => document.querySelector('h1').innerText = 'Awesome Sanilla!', 5000);
</script>
```

**public/index.html**
```html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Sanilla Application</title>
	</head>
	<body>
		<div id="root"></div>
	</body>
</html>
```

# Document

## +html
```jade
+html
```

```html
<!DOCTYPE html>
<html lang='en-us'>

</html>
```

## +head
```jade
+head({
  color: '#000',
  title: 'A title or something.',
  description: 'A description or something.'
  zoom: true
})
```

```html
<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=0'>
  <meta name='theme-color' content='#000'>
  <meta name='description' content='A description or something.'>
  <title>A title or something.</title>
</head>
```

## +script

```jade
+script('path/to/script.js')
```

```html
<script src='path/to/script.js'></script>
```

## +style

```jade
+style('path/to/styles.css')
```

```html
<link href='path/to/styles.css' rel='stylesheet'>
```

## +image

```jade
+image('path/to/image.png')
```

```html
<img src='path/to/image.png'>
```

# Form
## +input-text

```jade
+input-text(placeholder='hello')
```

```html
<input type='text' size='1' placeholder='hello'>
```

# SVG

## +svg
+ To ensure svg contents are not visible, place the mixin in the head.

```jade
head
  +svg.
    <symbol id='close' viewBox='0 0 16 16'>
      <path stroke='#f00' stroke-width='2' d='M4 4l8 8m0-8l-8 8' stroke-linecap='round'/>
    </symbol>
    //- you may find it easier to include your symbols from an external file
    //- include symbols/close.xml
```

```html
<head>
  <svg xmlns='http://www.w3.org/2000/svg'>
    <symbol id='close' viewBox='0 0 16 16'>
      <path stroke='#f00' stroke-width='2' d='M4 4l8 8m0-8l-8 8' stroke-linecap='round'/>
    </symbol>
  </svg>
</head>
```

## +use

```jade
+use('symbol-id')
```

```html
<svg>
  <use xlink:href='symbol-id'/>
</svg>
```

# Vue.js

## +vue

```jade
+vue({ el: 'app', script: 'main.js' })
  .foobar
```

```html
<body>
  <div id='app' class='app'>
    <div class='foobar'></div>
  </div>
  <script src='main.js'></script>
</body>
```

## +template

```jade
+template('template-id')
  div This is a template!
```

```html
<script id='template-id' type='x/template'>
  <div>This is a template!</div>
</script>
```

# WYSIWYG

## +video

```jade
+video
  source(src='path/to/video.mp4' type='video/mp4')
```

```html
<video width='auto' height='auto'>
  <source src='path/to/video.mp4' type='video/mp4'>
</video>
```

# Mixins

## +html
```jade
+html
```

```html
<!DOCTYPE html>
<html lang="en-us">

</html>
```

## +head
```jade
+head({ color: '#000', description: 'Lorem ipsum or something.' })
```

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width" initial-scale="1">
  <meta name="theme-color" content="#000">
  <meta name="description" content="Lorem ipsum or something.">
</head>
```

## +script

```jade
+script('path/to/script.js')
```

```html
<script src="path/to/script.js"></script>
```

## +style

```jade
+style('path/to/styles.css')
```

```html
<link href="path/to/styles.css" rel="stylesheet" type="text/css">
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

## +image

```jade
+image('path/to/image.png')
```

```html
<img src="path/to/image.png">
```

## +svg

```jade
+svg.
  <symbol id='close' viewBox='0 0 16 16'>
    <path stroke='#f00' stroke-width='2' d='M4 4l8 8m0-8l-8 8' stroke-linecap='round'/>
  </symbol>
```

```html
<svg xmlns="http://www.w3.org/2000/svg" style="display: none">
  <symbol id='close' viewBox='0 0 16 16'>
    <path stroke='#f00' stroke-width='2' d='M4 4l8 8m0-8l-8 8' stroke-linecap='round'/>
  </symbol>
</svg>
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

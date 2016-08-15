# Mixns

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

## +image

```jade
+image('path/to/image.png')
```

```html
<img src="path/to/image.png">
```

## +svg

```jade
+svg()
```

```html
```

## +use

```jade
+use()
```

```html
```

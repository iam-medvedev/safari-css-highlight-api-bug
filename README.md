# Safari CSS Highlight API Bug Demo

This repository demonstrates a bug in Safari's implementation of the [Custom CSS Highlight API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Custom_Highlight_API) where collapsed selections at the end of lines incorrectly highlight the entire line instead of just the cursor position.

## Bug Description

When positioning the cursor at the end of a text line using the CSS Highlight API, Safari displays a highlight that spans the entire line rather than just showing the cursor position.

This behavior is inconsistent with other browsers (Chrome, Firefox) and the expected CSS Highlight API specification.

## Expected vs Actual Behavior

**Expected (Chrome/Firefox):** Collapsed selection at line end shows only cursor position highlight
**Actual (Safari):** Collapsed selection at line end highlights the entire line (at least version 18.3 (20620.2.4.11.5))

## Live Demo

```sh
$ bun dev
# ➜ http://localhost:3000/
```

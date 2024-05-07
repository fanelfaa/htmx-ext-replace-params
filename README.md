This extension uses request parameters to replace existing parameters. If given value is empty string (`''`) then parameter will be deleted. This extension will be usefull in situation like pagination, search that you only want to replace only few params instead of all.

## Install

```html
<script src="./htmx-ext-replace-params.js">
```

## Usage

Example current page is on `/product?page=2&search=meatball`. Then this would return `/product?page=3&search=meatball`.

```html
<div hx-ext="path-params">
    <a hx-get="/product?page=2&search=meatball" hx-vals='{"page": "3"}'>Next</div>
</div>
```

Another example if current page is on `/product?page=2&search=meatball`. Then this would return `/product?page=3&search=friedchicken`

```html
<form hx-ext="path-params" hx-get="/product?page=2&search=meatball">
  <input value="friedchicken" name="search" />
  <button>Search</button>
</form>
```

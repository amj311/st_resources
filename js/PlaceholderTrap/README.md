# Placeholder Trap

This utility provides a function called `getStData` that extracts User Data that has been inserted into a website through Placeholders.

## Usage

In order to work, a special `div` must be placed on a CUSTOM PAGE - for some reason it doesn't work in the Head or Tracking Scripts sections.

That `div` looks like this:

``` html
<div id="stPlaceholderTrap" style="display:none">
    <div id="firstname">Firstname_Placeholder</div>
    <div id="age" type="number">Age_Placeholder</div>
    ...
</div>
```

With that `div` present, calling `getStData()` will return an object with a key-value pair for each child `div` that maps the IDs to the text that replaced the placeholders.

The example above would return this:

``` js
{
    firstname: 'Arthur',
    age: 25
}

```

## Types

A `type` attribute may be set to help when parsing values. The default type is just a `string`.

Valid types include:

- number

## ID Override

If for any reason an ID other than 'stPlaceholderTrap' is used, simply override the ID with the following line before calling `getStData()`:

``` js
placeholderTrapId = 'some-new-id';
```

Be careful though because this will change the ID for the entire site!
# SteadyTIDE Widgets <!-- omit in toc -->

These widgets are designed to be easily added to SteadyTIDE websites with very little modifying of the source code (which often leads to glitches and lost work).

### Contents

- [Setup](#setup)

## Setup

Before adding any widgets, you'll need to be sure that the following code is in the 'Tracking Scripts on All Pages' section of the Website 'General' tab. This is required for all widgets to be able to run.

``` html
<!-- BEGIN ST WIDGETS -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
<script src="https://cdn.jsdelivr.net/gh/amj311/st_resources@bb44eb4/vue_widgets/widget-loader.js"></script>

<!-- Add widgets below here -->


<!-- END ST WIDGETS -->
```

After that, adding any new widget is done by the following steps:

1. Add the widget configuration in the `<!-- Add widgets below here -->` section of the above code.
1. Place the widget placeholder `div` in the source code of any and every page you would like the widget to appear. Eg.: `<div class="st-recent-blogs" />`
1. Save the website, and watch the magic happen!

After that, any changes you want to make to the widget configuration can happen in the `General` tab and you won't have to dive into each page's source code again.


## Widget Configuration

Every widget is has different options, but all are inserted with the same basic code. This is the basic "Configuration" code that needs to be added underneath `<!-- Add widgets below here -->`.


``` html
<script src="<the-widget-import-url>"></script>
<script>
insertWidget('widget-name', 'target-class-name');
</script>
```

Each widget is hosted in it's own folder in this repository, and each has a README with it's own instructions and details.

You will need to paste one `insertWidget(...)` line for each widget you wish to insert.

The `widget name` option specifies which imported widget to insert (see each widget's directions for the correct name).

The `target-class-name` option can be anything you want but needs to match the class attribute that you give your placeholder `div`.

If needed/allowed by the widget, extra configuration can be given to the `insertWidget(...)` method via an optional third option.


## Placeholder Divs

In order for the widget to appear on the website, you need to add a placeholder into the source code where you want it to appear. The placeholders look like this:

``` html
<div class="target-class-name"></div>
```

Replace `target-class-name` with the same class name as is used in the widget configuration.

Any `div` with that class name will be replaed with the widget, so the same widget can appear multiple times on a page if you place multiple placeholders. Just be very careful that no two widgets have the same class name or one will overwrite the other!

When a widget is inserted, the entire placeholder `div` is replaced, so you can put any text you want inside if it to help you identify it. For example, if your placeholder is `<div class="st-recent-blogs">THIS IS WHERE THE RECENT BLOGS WILL GO!!!</div>`, then "THIS IS WHERE THE RECENT BLOGS WILL GO!!!" will be shown to you inside the page builders, but not when you actually load the page in a new tab. (Actually it MAY be visible for a split second, so try not to make it TOO crazy.)


## Using the Landing Page Easy Builder

Unfortunately the Easy Builder automatically removes any script tags added to it, so it is not possible to load/configure widgets inside of an Easy Builder page.

Instead, you can just add the HTML placeholder `div` in the source code like you would on a normal Custom Page and make sure the correcct configuration is present in the destination website.
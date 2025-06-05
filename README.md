# Starter Modern Ember Template

## Tech Stack
+ Node v22.16.0
  + NPM v11.4.1
  + NVM v1.1.12
  + Yarn v1.22.22
+ Ember v6.4
+ Ember-CLI v6.4
  + ember-cli: 6.4.0
  + node: 22.16.0
  + os: win32 x64
+ jQuery v3.7.1
+ Bootstrap v3.4.1
  + Bootstrap includes 260 glyphs from the Glyphicon Halflings set.
  + [**Bootstrap Version 3.4**](https://getbootstrap.com/docs/3.4/)
+ Font-awesome v4.7.0
  + https://github.com/FortAwesome/Font-Awesome/releases/tag/v4.7.0
  + https://github.com/gtechsltn/font-awesome-4.7.0
+ Select2 v4.0.13
+ Autonumeric v1.9.41
+ Eonasdan Bootstrap Datetimepicker v4.17.49
+ Moment.js v2.29.1
  + **Number formatting**: 1234567 to "1,234,567".
  + **File size formatting**: 2048 bytes to "2 KB".
  + **Ordinal numbers**: 1 to "1st", 22 to "22nd".
  + **Pluralization**: 1 duck vs. 2 ducks.
  + **String truncation and capitalization**.
+ Humanize-Duration.js v3.27.0
+ UAParser.js v1.0.38
+ [**HTML5 Boilerplate**](https://github.com/h5bp/html5-boilerplate/)
+ [Alpaca Forms - Easy Forms for jQuery](https://www.npmjs.com/package/alpaca)
  + http://www.alpacajs.org/
  + https://github.com/gitana/alpaca
  + https://www.npmjs.com/package/alpaca
+ [Form.io Bootstrap 3 Templates](https://github.com/formio/bootstrap)
  + https://www.npmjs.com/package/@formio/bootstrap3
  + https://github.com/formio/bootstrap

```
npm i jquery@3.7.1
npm i bootstrap@3.4.1
npm i font-awesome@4.7.0
npm i select2@4.0.13
npm i autonumeric@1.9.41
npm i eonasdan-bootstrap-datetimepicker@4.17.49
npm i moment@2.29.1
npm i ua-parser-js@1.0.38
npm i humanize-duration@3.27.0
npm i alpaca
npm i @formio/bootstrap@3.1.0
```

## Alpaca Forms - Easily create forms for your web site using jQuery, Bootstrap and JSON Schema

```
bower i alpaca
bower alpaca#^1.5.27                                     install alpaca#1.5.27
bower jquery-hashchange#*                                install jquery-hashchange#1.3.2
bower ace-builds#1.2.6                                   install ace-builds#1.2.6
bower handlebars#4.0.5                                   install handlebars#4.0.5
bower blueimp-file-upload#9.12.3                         install blueimp-file-upload#9.12.3
bower respond#1.4.2                                      install respond#1.4.2
bower jqueryui-timepicker-addon#1.5.0                    install jqueryui-timepicker-addon#1.5.0
bower ckeditor#4.4.1                                     install ckeditor#4.4.1
bower typeahead.js#0.10.5                                install typeahead.js#0.10.5
bower datatables.net#1.10.10                             install datatables.net#1.10.10
bower summernote#0.8.1                                   install summernote#0.8.1
bower jquery-ui#1.11.2                                   install jquery-ui#1.11.2
bower google-code-prettify#1.0.3                         install google-code-prettify#1.0.3
bower blueimp-load-image#1.13.0                          install blueimp-load-image#1.13.0
bower datatables.net-bs#1.10.10                          install datatables.net-bs#1.10.10
bower jquery-price-format2#>= 2.0.0                      install jquery-price-format2#2.0.0
bower blueimp-tmpl#2.5.4                                 install blueimp-tmpl#2.5.4
bower spectrum#~1.7.1                                    install spectrum#1.7.1
bower simplemde#^1.11.2                                  install simplemde#1.11.2
bower tinymce#4.1.7                                      install tinymce#4.1.7
bower blueimp-canvas-to-blob#2.1.1                       install blueimp-canvas-to-blob#2.1.1
bower datatables.net-rowreorder#1.1.0                    install datatables.net-rowreorder#1.1.0
bower handsontable#0.11.4                                install handsontable#0.11.4
bower bootstrap-tokenfield#0.12.1                        install bootstrap-tokenfield#0.12.1
bower mjolnic-bootstrap-colorpicker#2.3.0                install mjolnic-bootstrap-colorpicker#2.3.0
bower js-beautify#1.5.4                                  install js-beautify#1.5.4
bower jquery-mobile-bower#1.4.2                          install jquery-mobile-bower#1.4.2
bower tinycolor#1.3.0                                    install tinycolor#1.3.0
bower bootstrap-multiselect#0.9.9                        install bootstrap-multiselect#0.9.9
bower jquery-maskedinput#1.3.1                           install jquery-maskedinput#1.3.1
bower pick-a-color-m#1.2.3                               install pick-a-color-m#1.2.3
bower datatables.net-plugins#1.10.10                     install datatables.net-plugins#1.10.10
bower json3#3.3.2                                        install json3#3.3.2
bower zeroclipboard#>=2.1.6                              install zeroclipboard#2.3.0
```

```
<!-- Bootstrap 3 -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

<!-- Font Awesome (optional) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- jQuery 3 -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

<!-- Bootstrap JS -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

<!-- Humanize Duration -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/humanize-duration/3.27.0/humanize-duration.min.js"></script>
```

## Font Awesome 4.7.0

## Install via bower (legacy) or manually copy assets

If you must host Font Awesome yourself:

### 1. Download Font Awesome 4.7.0

Download from: https://cdnjs.com/libraries/font-awesome/4.7.0

Extract the CSS and fonts folders.

### 2. Copy into /public directory of your Ember app

Place:

+ ```font-awesome.min.css``` into ```public/assets/css/```

+ All font files (.woff, .ttf, etc.) into ```public/assets/fonts/```

### 3. Reference it in ember-cli-build.js

```
app.import('public/assets/css/font-awesome.min.css');
```

Ensure the paths in font-awesome.min.css correctly point to /assets/fonts/ (you may need to adjust relative paths).

# References
+ https://docs.google.com/document/d/1l7Yn2zOCbyYQvi0TkZsRlHwgM4qmF13KOwkHsI8Tojc
+ https://docs.google.com/document/d/1YYt-nB95RjTvODkP2TnNVyTMJIGvkB8PpYzktJLBC10
+ https://docs.google.com/document/d/1F-xfiUVZ-ZO_0A0vceHrKnSdfFXEJBFicu6vTKeemSM

## Backend
+ https://github.com/alpacahq/alpaca-trade-api-csharp
+ https://www.nuget.org/packages/Alpaca.Markets/
+ https://www.nuget.org/packages/Alpaca.Markets.Extensions/

## Frontend

### Bower
+ Bower is no longer exists as a function in newer versions of Ember CLI (4.x or 5.x+).
+ Bower is support in older Ember CLI versions (pre-2.x/3.x)

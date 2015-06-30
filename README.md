# rotalabutterfly

Planted Tank Nutrient Calculator

http://rotalabutterfly.com

## Notes about the Front End/UI

The following directories and files **do not** need to be hosted on the live or testing servers and are for use in development only:

* sass/
* js_dev/
* js_view/
* node_modules/
* bower_components/bootstrap-sass/
* Gruntfile.js
* package.json
* .gitignore
* README.md

For testing purposes we can pull react and jquery from /bower_components but when we finally push to the production server we should pull these off of a CDN
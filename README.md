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

## Rotala Butterfly Back-end Notes

###Back end requirements:

* PHP version 5x or higher
* PHP YAML (http://php.net/manual/en/book.yaml.php)

###Configuration:

* Just look at the "config.php" file and fill those 2 variables!


###AJAX calls:

Set-up the front-end to send all calls to:
	
    [your_url]/php/main.php
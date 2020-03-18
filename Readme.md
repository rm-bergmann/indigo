# Indigo

This is my custom starter Drupal 8 theme which I have been using for my Drupal 8 projects. This theme includes the
tools I use which I find useful and enable me to design rapidly in the browser.

# Note

If you are looking for a more scalable architecture head over to [D8 Boilerplate](https://github.com/rm-bergmann/d8-boilerplate) which includes this theme.
D8 Boilerplate runs Gulp & Cypress from the Drupal root and is set up for multi theme development using 1 instance of Gulp.
Plus it comes with a lot of boilerplate config for Docker and other Front End / Javascript packages.

I have included a basic, clean template with decent spacing around elements.

## Features

- Gulp 4
- Browsersync
- HTML Injection
- ES6
- Babel
- Browserify
- Less
- Less Style Library
- Cypress

Gulp builds the CSS and Script files. CSS and HTML / twig file changes are automatically injected into the browser
without the need to reload (including debugging statements with dd()).

Reloads are triggered when script file changes are saved, as functions may be called on page load. Reloads are also
triggered when the indigo.theme file changes are saved.

Babel, babelify and browserify are included to transpile ES6 modules into browser supported Javascript.

Less is my CSS preprocessor of choice, mainly because of it's namespacing feature. I have included my style library of
useful Less namespaced mixins which are helpful when designing in the browser, and speed up development time.

Cypress is installed in the e2e directory and is a seperate dependancy because it takes time to install.

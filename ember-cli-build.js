const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function (defaults) {
    const app = new EmberApp(defaults, {
        "ember-cli-qunit": {
            useLintTree: false,
        },
        sassOptions: {
            includePaths: [
                "bower_components/bootstrap-sass/assets/stylesheets",
            ],
        },
    });

    app.import("bower_components/bootstrap-sass/assets/javascripts/bootstrap.js");
    app.import(
        "bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff2",
        { destDir: "fonts/bootstrap" }
    );

    return app.toTree();
};

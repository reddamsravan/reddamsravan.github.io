const tailwind = require("tailwindcss");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const postcssFilter = (css, done) => {
    postcss([
        tailwind(require("./tailwind.config")),
        autoprefixer(),
        cssnano({ preset: "default" }),
    ])
        .process(css, {
            from: "./_includes/css/tailwind.css",
        })
        .then(
            (result) => done(null, result.css),
            (error) => done(error, null)
        );
};

module.exports = function (config) {
    config.addPassthroughCopy("favicon.svg");
    config.addPassthroughCopy("CNAME");
    config.setServerPassthroughCopyBehavior("passthrough");

    config.addWatchTarget("./_includes/css/tailwind.css");
    config.addNunjucksAsyncFilter("postcss", postcssFilter);
};

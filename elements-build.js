const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/angular-element-test/runtime.js',
        './dist/angular-element-test/polyfills.js',
        './dist/angular-element-test/scripts.js',
        './dist/angular-element-test/main.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/zz-library.js');
    await fs.copyFile('./dist/angular-element-test/styles.css', 'elements/styles.css')
    await fs.copy('./dist/angular-element-test/assets/', 'elements/assets/' )

})()

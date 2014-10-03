exports.config = {
    baseUrl: 'http://localhost:3000',
    chromeOnly: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['integration/*.js']
}
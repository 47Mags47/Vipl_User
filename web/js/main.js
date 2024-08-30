import * as header from './header.js'

$(window).on('load', async function () {
    window.validate_rule = await eel.getValidations()()
    await header.load()
})
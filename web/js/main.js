import * as header from './header.js'
import {pages} from './data/pages.js'

$(window).on('load', async function () {
    window.validate_rule = await eel.getValidations()()
    header.load()
    
    window.pages = pages
    window.pages.main.view()
})
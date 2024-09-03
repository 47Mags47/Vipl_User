import * as header from './header.js'
import { pages } from './data/pages.js'
import Table from './classes/Table.js'

$(window).on('load', async function () {
    /* Загрузка глобальной области */

    // Переменные
    window.validate_rule = await eel.getValidations()()
    window.pages = pages

    // Классы
    window.Table = Table

    /* Загрузка скриптов */
    header.load()

    /* Вывод главной страницы */
    window.pages.main.view()
})
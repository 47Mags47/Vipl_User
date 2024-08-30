import Sheet from './classes/Sheet.js'

export function load() {
    /* Элементы меню */
    $('.nav-button').each(function () {
        let preview = $(this).find('.nav')
        let list = $(this).find('.nav-list')

        preview.on('click', function () {
            list.addClass('open')
        })

        $(document).on('mouseup', function (Event) {
            if ($(Event.target).closest('.open').length == 0) {
                list.removeClass('open')
            }
        })
    })

    /* Действия */
    $('#upload_button').on('click', async function () {
        let data = await eel.upload_py()()
        window.Sheet = new Sheet(data)
    })
}
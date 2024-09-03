// import Table from './classes/Table.js'

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
        try {
            let data = await eel.upload_py()()
            await window.pages.upload.view()
            window.table = new Table(data)
            window.table.render()
            window.table.validate()
        } catch (error) {
            alert('Во время выполнения операции произошла ошибка')
        }
    })

    $('#send_button').on('click', function () {
        window.table.saveTMP()
    })

    $('#save_button').on('click', function () {
        window.table.saveFile()
    })
}
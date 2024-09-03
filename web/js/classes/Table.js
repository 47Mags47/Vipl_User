import Row from '/js/classes/Row.js'

export default class Table {
    rows = [];
    cells = [];

    constructor(data) {
        this.data = data

        let this_class = this;
        $.each(this_class.data, function (i, element) {
            let row = new Row(element)

            this_class.rows.push(row)
            this_class.cells.push(row.cells)
        });

        this.validate()
    }

    render() {
        $.each(this.rows, function (i, row) {
            $('.content table tbody').append(row.render())
        });
    }

    validate() {
        let errors = []
        $.each(this.rows, function (i, row) {
            if (row.validate().length > 0) {
                errors.push(row.validate())
            }
        });

        return errors
    }

    getData() {
        if (this.validate().length > 0) {
            return false
        }

        let data = []
        $.each(this.rows, function (i, row) {
            data.push(row.getData())
        });

        return data
    }

    saveTMP() {
        let data = this.getData()
        if (data) {
            eel.saveFile_py(data)()
        } else {
            alert('Необходимо исправить ошибки')
            return
        }
    }

    saveFile() {
        let data = this.getData()
        eel.saveFile_py(data, true)()
    }
}
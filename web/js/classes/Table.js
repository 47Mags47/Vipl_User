import Row from '/js/classes/Row.js'

export default class Table {
    constructor(data) {
        this.data = data
        this.rows = []

        this.data.forEach(row => {
            this.rows.push(new Row(row))
        });
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
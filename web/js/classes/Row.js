import Cell from '/js/classes/Cell.js'

export default class Row {
    data;
    row;
    cells = {};
    errors = [];

    constructor(data) {
        this.data = data

        let this_class = this
        $.each(this_class.data, function (name, val) {
            this_class.cells[name] = new Cell(name, val)
        });

        this.code = this.render()
    }

    render() {
        let tr = $('<tr>')

        tr.append(this.cells.id.code)
        tr.append(this.cells.fam.code)
        tr.append(this.cells.ima.code)
        tr.append(this.cells.otch.code)
        tr.append(this.cells.accord.code)
        tr.append(this.cells.summ.code)
        tr.append(this.cells.pasp.code)
        tr.append(this.cells.date.code)
        tr.append($('<td></td>'))
        tr.append(this.cells.snils.code)

        return $(tr)
    }

    validate() {
        let errors = []

        for (let cell in this.cells) {
            let validate_arr = this.cells[cell].validate()

            if (validate_arr.length > 0) {
                errors.push(validate_arr)
            }
        }
        return errors
    }

    getData() {
        let data = {
            id: this.cells.id.getValue(),
            fam: this.cells.fam.getValue(),
            ima: this.cells.ima.getValue(),
            otch: this.cells.otch.getValue(),
            accord: this.cells.accord.getValue(),
            summ: this.cells.summ.getValue(),
            pasp: this.cells.pasp.getValue(),
            date: this.cells.date.getValue(),
            snils: this.cells.snils.getValue(),
        }

        return data
    }
}
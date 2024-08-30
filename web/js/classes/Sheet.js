import Row from '/js/classes/Row.js'

export default class Sheet {
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

        this.code = this.render()
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
            if(row.validate().length > 0){
                errors.push(row.validate())
            }
        });
    }
}
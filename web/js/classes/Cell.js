export default class Cell {
    constructor(name, val) {
        this.name = name
        this.val = val
        this.errors = []

        this.render()

        this.code.on('change', () => { this.validate() })
    }

    render() {
        let types = {
            'string': 'text',
            'number': 'number'
        }
        let type = types[typeof this.val]

        let td = $('<td>')
        let div = $('<div>')
        let input = $('<input>')
        input.attr('type', type)
        input.attr('name', this.name)
        input.val(this.val)

        div.append(input)
        td.append(div)

        this.code = $(td)
    }

    validate() {
        //var
        let errors = []
        let name = this.name
        let val = this.code.find('input').val()

        //check
        if (validate_rule[this.name]) {
            for (let type_id in validate_rule[this.name]) {
                switch (parseInt(type_id)) {
                    case 1:
                        if (val == '' || val == 0) {
                            errors.push(`Поле "${name}" должно быть заполнено`)
                        }
                        break;
                    case 2:
                        let regexp = new RegExp(validate_rule[this.name][type_id])
                        if (!val.match(regexp)) {
                            errors.push(`Неверный формат в поле "${name}"`)
                        }
                        break;
                    case 3:
                        let date_array = val.split('.')
                        let date_timestamp = new Date(`${date_array[2]}-${date_array[1]}-${date_array[0]}`).getTime()
                        if (date_timestamp > new Date().getTime()) {
                            errors.push(`Дата в поле "${name}" должна быть меньше текущей`)
                        }
                        break;
                }
            }
        }

        //edit
        if (errors.length > 0) {
            this.code.addClass('error')
            this.code.attr('title', errors[0])
        } else {
            this.code.removeClass('error')
            this.code.attr('title', '')
        }

        return errors
    }

    getValue(){
        return this.code.find('input').val()
    }
}
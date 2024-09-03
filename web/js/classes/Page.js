export default class Page {
    constructor(name = 'main') {
        this.name = name
    }

    async init() {
        let res = {
            'html': await eel.readpage_py(this.name)(),
            'box': $('.content')
        }
        return res
    }

    async view() {
        let obj = await this.init()
        obj.box.html(obj.html)
    }
}
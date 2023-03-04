class Site {
    constructor(selector){
        this.$el = document.querySelector(selector)
    }

    render(model){
        model.forEach(block => {
            if(true){
                this.$el.insertAdjacentHTML('beforeend', block.toHTML())
            }
        })
    }
}
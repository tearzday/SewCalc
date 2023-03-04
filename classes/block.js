/*class Block {
    constructor(type){
        this.type = type
    }
    toHTML(){
        throw new Error ('Error method toHTML')
    }
}*/

class Item{
    constructor(img, nameItem, priceItem){
        this.img = img,
        this.nameItem = nameItem,
        this.priceItem = priceItem
    }

    toHTML(){
        return `
        <div id="item" class="item">
        <div class="item__content">
            <div class="item__img">
                <img src="${this.img}" alt="Default photo">
            </div>
            <div class="item__text">
                <div class="item__name">Название: <span id="item__name">${this.nameItem}</span></div>
                <div class="item__price">Цена за шт: <span id="item__price">${this.priceItem}</span></div>
            </div>
            <button class="item__info">подробнее</button>
        </div>
    </div>
        `
    }
}
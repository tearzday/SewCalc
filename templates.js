function item (block){
    return `
    <div id="item" class="item">
    <div class="item__content">
        <div class="item__img">
            <img src="${block.img}" alt="Default photo">
        </div>
        <div class="item__text">
            <div class="item__name">Название: <span id="item__name">${block.nameItem}</span></div>
            <div class="item__price">Цена за шт: <span id="item__price">${block.priceItem}</span></div>
        </div>
        <button class="item__info">подробнее</button>
    </div>
</div>
    `
}

const templates = {
    item,
}
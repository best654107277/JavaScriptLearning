/**
 * 当价格类型为“预售价”时，满 100 - 20，不满 100 打 9 折
 * 当价格类型为“大促价”时，满 100 - 30，不满 100 打 8 折
 * 当价格类型为“返场价”时，满 200 - 50，不叠加
 * 当价格类型为“尝鲜价”时，直接打 5 折
 *
 * 预售价 - pre
 * 大促价 - onSale
 * 返场价 - back
 * 尝鲜价 - fresh
 *
 */


const priceProcessor = {
    // 处理预热价
    pre(originPrice) {
        if (originPrice >= 100) {
            return originPrice - 20
        }
        return originPrice * 0.9
    },

    // 处理大促价
    onSale(originPrice) {
        if (originPrice >= 100) {
            return originPrice - 30
        }
        return originPrice * 0.8
    },

    // 处理返场价
    back(originPrice) {
        if (originPrice > 200) {
            return originPrice - 50
        }
        return originPrice
    },

    // 处理尝鲜价
    fresh(originPrice){
        return originPrice * 0.5
    }

}



// 处理新人价
priceProcessor.newUser = function (originPrice){
    if (originPrice >=100){
        return originPrice - 50
    }
    return originPrice
}

console.log(askPrice( null,200));

//询价函数
function askPrice(tag,originPrice){
    return priceProcessor[tag](originPrice)

}
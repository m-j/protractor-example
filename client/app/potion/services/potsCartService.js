define(['amplify-store'],function (store) {
    var key = "POTS_KART_KEY"
    store = store.sessionStorage

    var CartService = function () {
        this.add = function(item){
            var cart = store(key)
            if(!cart){
                cart = []
            }
            cart.push(item)
            store(key, cart)
        }

        this.clear = function(){
            store(key, null)
        }

        this.getAll = function(){
            return store(key)
        }
    }

    return CartService;
});
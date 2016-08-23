
var products= [ 

    { 
        name:"Asturiana",
        price: 0.6
    },
    { 
        name:"CocaCola",
        price: 1.28
    },
    { 
        name:"Tuna",
        price: 1.59
    },
    { 
        name:"Kellogs",
        price: 2.35
    },
    { 
        name:"Bread",
        price: 0.55
    },
]

var cart= [];
function addProduct(product){ 
cart.push(product);
};
function showProducts(){ 
cart.forEach(function(product){ 
console.log (product.name +": "+ product.price + "E");
});
};

addProduct(products[0]);
addProduct(products[2]);
addProduct(products[2]);
addProduct(products[3]);
addProduct(products[4]);
addProduct(products[0]);
addProduct(products[2]);
addProduct(products[2]);
addProduct(products[2]);
addProduct(products[4]);
addProduct(products[4]);

showProducts();

function cashOrder (){
    total = 0;
    cart.forEach(function(product){ 
        total += product.price;
    })        
    console.log( total + "E");

}
cashOrder();

function discount (){ 
    if (cart.length >= 9){ 
        console.log(total - "20" + "E");
    }
}
discount();



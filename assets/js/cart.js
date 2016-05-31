//Object.prototype.getName = function(){
//    s = this.constructor.toString();
//    if(s.indexOf('function') == -1){
//        return null;
//    }else{
//        s = s.replace('function','');
//        var idx = s.indexOf('(');
//        s = s.substring(0, idx);
//        s = s.replace(" ", "");
//    }
//    return s;
//}

function Product(instance,name,material,count,amount,onDelete) {
    this.instance = instance;
    this.name = name;
    this.material = material;
    this.count = count;
    this.amount = amount;
    this.onDelete = onDelete;
}

function Carts(name,prods) {
    this.name = name;
    this.prods = prods;
}

Product.prototype.getName = function(){
    s = this.constructor.toString();
    if(s.indexOf('function') == -1){
        return null;
    }else{
        s = s.replace('function','');
        var idx = s.indexOf('(');
        s = s.substring(0, idx);
        s = s.replace(" ", "");
    }
    return s;
}
Product.prototype.getComponent = function() {
    var _html = "";
    if(this.count>0)
    {
        _html+="" +
            "<div class='row cart_label_prods_item'>" +
            "<div class='col-md-2 cart_label_count cart_label_count_item'>"+this.count+" X</div>" +
            "<div class='col-md-8 cart_label_content '>" +
            "<div class='cart_label_content_item_name'>"+this.name+
            "<span style='float: right'>"+this.amount+" $</span>"+
            "</div>" +
            "<div class='cart_label_content_item_material'>"+this.material+"</div>" +
            "</div>" +
            "<div class='col-md-2 cart_label_operation'>"+
            "<div onclick='"+this.getName()+".delete()' class='cart_label_operation_item_delete'>X</div>"+
            "</div>" +
            "</div>";
    }

    return _html;
}

Product.prototype.delete = function() {
    this.count--;
    if($.isFunction(this.onDelete)) {
        this.onDelete(this)
    }
}

Carts.prototype.getComponent = function() {
    var count = this.prods.length;
    var amounts = 0;

    var prods_html="";
    for(var i=0;i<this.prods.length;i++) {
        prods_html+=this.prods[i].getComponent()
        amounts+=this.prods[i].amount;
    }
    var _html = "";
    _html="<div class='row cart_label_row cart_label_row_total'>" +
        "<div class='col-md-2 cart_label_count cart_label_count_total'>"+count+" X</div>" +
        "<div class='col-md-8 cart_label_content cart_label_content_total_name'>"+this.name+

        "</div>" +
        "<div class='col-md-2 cart_label_operation'><div class='cart_label_operation_delete'>"+
        "X"+"</div></div>" +
        "</div>";
    var _html_line = "<div class='row cart_label_line'><div class='col-md-12 cart_label_line'></div> </div>";
    _html+=_html_line;
    _html+="<div class='row cart_label_row cart_label_row_prods'>" +
        "<div class='col-md-12'>" +
        prods_html +
        "</div>" +
        "</div>";
    //_html+=prods_html;
    _html+=_html_line;

    _html+="<div class='row cart_label_row cart_label_row_check'>" +
        "<div class='col-md-2'></div>" +
        "<div class='col-md-8 cart_label_content'>" +
            "<div class='cart_label_content_item_name cart_label_subtotal'>Subtotal:"+
                "<span style='float: right'>"+amounts+" $</span>"+
            "</div>" +
            "<div class='cart_label_btn'>"+
                "<div class='cart_label_btn_bg'>CHECKOUT</div>"+
            "</div>" +
        "</div>" +
        "<div class='col-md-2'></div>" +
        "</div>";
    return _html;
}
function deleteProduct(product) {
    alert("delete");
}

var prod1 = new Product("Object name","Material",9,10,deleteProduct);
var prod2 =  new Product("Object name2","Material",8,9,deleteProduct)
var products = new Array(
    prod1,prod2
);
var cart = new Carts("Objects in your cart",products)
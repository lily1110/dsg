/**
 * Created by lilili on 16/5/13.
 */
function Content(first,second,third,style) {
    this.first = first;
    this.second = second;
    this.third = third;
    this.style = style;

}
Content.prototype.getComponent= function() {
    return ("<h2 class='"+this.style+"'  align='center'>"+(this.first?this.first:"")+"</h2>" +
            "<h6 class='"+this.style+"' align='center'>"+(this.second?this.second:"")+"</h6>" +
            "<div class='"+this.style+"' align='center'>"+(this.third?this.third:"")+"</div>")
}

function SubMenu(instance,name,url,style,subMenus,content,init) {
    this.instance = instance;
    this.url = url;
    this.name = name;
    this.style = style;
    this.subMenus = subMenus;
    this.content = content;
    this.init = init;
}
function Menu(instance,name,style,subMenus) {
    this.instance = instance;
    this.name = name;
    this.style = style;
    this.subMenus = subMenus;

}
Menu.prototype.getComponent = function() {
        return  ("<div id='"+this.instance+"' onmousemove='"+this.instance+".onActive()' onmouseout='"+this.instance+".onLeave()' onclick='"+this.instance+".onActive()' " +
        " class='"+this.style+"'>"+this.name+
        "</div>");
    //if(this.isActive) {
    //else {
    //    return ("<div onclick='"+this.instance+".onActive()' " +
    //    " class='"+this.style+"'>"+this.name+"</div>");
    //}
    //    return  ("<div id='"+this.instance+"' onmousemove='"+this.instance+".onActive()' "+
    //    " onclick='"+this.instance+".onActive()' " +
    //    " onmouseover='"+this.instance+".onLeave()"+"'"+
    //    " class='"+this.style+"'>"+this.name+
    //    "<div class='triangle_body'><div class='out'><div class='in'></div></div></div>"+
    //    "</div>");
    //return ("<div onclick='"+this.instance+".onActive()' " +
    //" class='"+this.style+"'>"+this.name+"</div>");
}
Menu.prototype.onActive=function() {
    //this.isActive= true;
    $("#menu_content").html("");
    $("#submenu").html("");

    if($("#menu_content").hasClass("hide")) {
        $("#menu_content").removeClass("hide");
    }if($("#submenu").hasClass("hide")) {
        $("#submenu").removeClass("hide");
    }
    if($(".main_menus_background").hasClass("hide")) {
        $(".main_menus_background").removeClass("hide");
    }
    $("#menu_content").addClass("show");
    $("#submenu").addClass("show");
    $(".main_menus_background").addClass("show");

    var submenu_html = "";
    if(!$.isArray(this.subMenus)){
        return;
    }
    for (var i=0;i<this.subMenus.length;i++) {
        submenu_html+= this.subMenus[i].getComponent();
    }

    if($.isFunction(this.subMenus[0].onActive))  {
        this.subMenus[0].onActive();
    }
    $("#submenu").html(submenu_html);
    //$("#submenus_background").children
    switch (this.instance ) {
        case "design":
                $("#design_t").css("display","block");
                $("#shop_t").css("display","none");
                $("#community_t").css("display","none");
                break;
            case "shop" :
                $("#design_t").css("display","none");
                $("#shop_t").css("display","block");
                $("#community_t").css("display","none");
                break;
            case  "community":
                $("#design_t").css("display","none");
                $("#shop_t").css("display","none");
                $("#community_t").css("display","block");
            break;
        default:
            break;
    }
    //$("#"+this.instance+" .triangle_body").css("display","block");
}

Menu.prototype.onLeave=function() {
    $("#"+this.instance+" .triangle_body").css("display","none");

}


SubMenu.prototype.getComponent = function() {
    //if(this.subMenus) {
    //    return ("<div  onclick='"+this.instance+".onActive()' " +
    //    " class='"+this.style+"'> "+this.name+"</div>");
    //}
    //else {
    //    return ("<div  onclick='"+this.instance+".onActive()' " +
    //    " class='"+this.style+"'> <a href='"+this.url+"'>"+this.name+"</a></div>");
    //}
    if(this.subMenus) {
        return ("<div onmousemove='"+this.instance+".onActive()'  onclick='"+this.instance+".onActive()' " +
        " class='"+this.style+"'> "+this.name+"</div>");
    }
    else {
        return ("<div onmousemove='"+this.instance+".onActive()'  onclick='"+this.instance+".onActive()' " +
        " class='"+this.style+"'> <a href='"+this.url+"'>"+this.name+"</a></div>");
    }
}
SubMenu.prototype.onActive=function() {
    if(this.subMenus) {
        var sub_html="";
        for (var i =0;i<this.subMenus.length;i++) {
            var item =  this.subMenus[i];
            var item_main = makeDiv(this.subMenus[i].style,item.name);
            var html = "<div class='col-md-4'>"+item_main;
            if(item.subMenus)  {
                for(var j=0;j<item.subMenus.length;j++) {
                    var subItem = item.subMenus[j];
                    html+=makeDiv(subItem.style,subItem.name);
                }
                html += "</div>";
            }
            sub_html +=html;
        }
        var submenus = makeDiv("row",sub_html);
        $("#menu_content").html(submenus+"</div>");
    }
    else if (this.content){
        $("#menu_content").html(this.content.getComponent());
    }
}

function makeDiv(style,content) {
    return ("<div class='"+style+"'>"+content+"</div>")  ;
}
var design = new Menu("design","Design","col-md-4 nav_bar_menu",initNavBar,initNavBar);
var shop = new Menu("shop","Shop","col-md-4 nav_bar_menu",initNavBar,initNavBar);
var community = new Menu("community", "Community", "col-md-4 nav_bar_menu",initNavBar,initNavBar);
function initNavBar() {
    $("#nav-bar").html(design.getComponent()+shop.getComponent()+community.getComponent());
}
//
//design.onActive = initNavBar();
//shop.onActive = initNavBar();
//community.onLeave = initNavBar();design.onActive = initNavBar();
//shop.onLeave = initNavBar();
//community.onLeave = initNavBar();
var startDesign = new SubMenu("startDesign","Starting Design","www.baidu.com","submenu");
var myLab = new SubMenu("myLab","My Lab","#","submenu");
var materials = new SubMenu("materials","Materials","#","submenu submenu_more");
var subDesignMenus = new Array(startDesign, myLab, materials);
design.subMenus = subDesignMenus;


var categories = new SubMenu("categories","Shop all categories","#","submenu");
categories.content = new Content("Discover our collections!",
    "Find out your style",
    "What you need,just different,just unique!",
    "menu_brief");


var home = new SubMenu("home","Home","#","submenu submenu_more");
var jewerly = new SubMenu("jewerly","Jewerly","#","submenu submenu_more");
var art = new SubMenu("art","Art","#","submenu submenu_more");
var accessories = new SubMenu("accessories","Accessories","#","submenu submenu_more");
var shop_submenus = new Array(categories, home, jewerly, art, accessories);
shop.subMenus = shop_submenus;

var blog = new SubMenu("blog","Blog","#","submenu");
var events = new SubMenu("events","Events","#","submenu");
var jobs = new SubMenu("jobs","Jobs for Designers","#","submenu");
var community_subMenus = new Array(blog,events,jobs);
community.subMenus=community_subMenus;
blog.content = new Content(
    "JOIN THE COMMUNITY!",
    "Share your expericences,value your talent!",
    "Create your own network and enjoy it!",
    "menu_brief"
);


var startDesign_content = new Content("OPENID YOUR SHOP!",
    "We'll help your masterpieces globally!\n"+
    "Create your personal showncase and start selling now!",
    "",
    "menu_brief");
startDesign.content = startDesign_content;

var myLab_content = new Content("START DESIGN!",
    "Create your own ideas",
    "We'll provide you a quote!",
    "menu_brief");
myLab.content = myLab_content;

var materials_metals = new SubMenu("materials_metals","Metals","#","sub3style");
var materials_plastics = new SubMenu("materials_plastics","Plastics","#","sub3style");
var materials_ceramics = new SubMenu("materials_ceramics","Ceramics","#","sub3style");
var materials_subs = new Array(materials_metals,materials_plastics,materials_ceramics);
materials.subMenus = materials_subs;

var metal_plated = new SubMenu("metal_plated","Precious Plated","#","sub4style");
var metal_platinum = new SubMenu("metal_platinum","Platinum","#","sub4style");
var metal_gold = new SubMenu("metal_gold","Gold","#","sub4style");
var metal_silver = new SubMenu("metal_silver","Silver","#","sub4style");
var metal_brass = new SubMenu("metal_brass","Brass","#","sub4style");
var metal_bronze = new SubMenu("metal_bronze","Bronze","#","sub4style");
var metal_vastable = new SubMenu("metal_vastable","Castable Wax","#","sub4style");
var metal_aluminum = new SubMenu("metal_aluminum","Aluminum","#","sub4style");

var metal_subs = new Array(
    metal_plated,
    metal_platinum,
    metal_gold,
    metal_silver,
    metal_brass,
    metal_bronze,
    metal_vastable,
    metal_aluminum
);
materials_metals.subMenus = metal_subs;

var plastics_strong = new SubMenu("plastics_strong","Strong&Flexible","#","sub4style");
var plastics_metallic = new SubMenu("plastics_metallic","Metallic","#","sub4style");
var plastics_frosted = new SubMenu("plastics_frosted","Frosted Detail","#","sub4style");
var plastics_acrylic = new SubMenu("plastics_acrylic","Acrylic","#","sub4style");
var plastics_elasto = new SubMenu("plastics_elasto","Elasto","#","sub4style");
var plastics_hi = new SubMenu("plastics_hi","Hi-Def Acrylate","#","sub4style");
var plastics_subs = new Array(
    plastics_strong,
    plastics_metallic,
    plastics_frosted,
    plastics_acrylic,
    plastics_elasto,
    plastics_hi
 );
materials_plastics.subMenus = plastics_subs;

var ceramisc_procelain = new SubMenu("ceramisc_procelain","Porcelain","#","sub4style");
materials_ceramics.subMenus = new Array(ceramisc_procelain);



var home_home = new SubMenu("home_home","Home","#","sub3style");
home.subMenus = new Array(home_home);

var home_lightning = new SubMenu("home_lightning","Lightning","#","sub4style");
var home_furniture = new SubMenu("home_furniture","Furniture","#","sub4style");
var home_dining = new SubMenu("home_dining","Dining","#","sub4style");
var home_accessories = new SubMenu("home_accessories","Accessories","#","sub4style");
var home_other = new SubMenu("home_other","Other","#","sub4style");
home_home.subMenus = new Array(
    home_lightning,home_furniture,home_dining,home_accessories,home_other
);

var jewerly_jewerly = new SubMenu("jewerly_jewerly","Jewerly","#","sub3style");
jewerly_jewerly.subMenus = new Array(
    new SubMenu("jewerly_rings","Rings","#","sub4style"),
    new SubMenu("jewerly_pendants","Pendants","#","sub4style"),
    new SubMenu("jewerly_necklaces","Necklaces","#","sub4style"),
    new SubMenu("jewerly_earrings","Earrings","#","sub4style"),
    new SubMenu("jewerly_cufflinks","Cufflinks","#","sub4style"),
    new SubMenu("jewerly_bracelets","Bracelets","#","sub4style"),
    new SubMenu("jewerly_other","Other","#","sub4style")
);
jewerly.subMenus=new Array(jewerly_jewerly);

var art_art = new SubMenu("art_art","Art","#","sub3style");
art_art.subMenus = new Array(
    new SubMenu("","Mathematical","#","sub4style"),
    new SubMenu("","Memes","#","sub4style"),
    new SubMenu("","Sculptures","#","sub4style"),
    new SubMenu("","Other","#","sub4style")
);
art.subMenus=new Array(art_art);

var access_access = new SubMenu("access_accss","Accessories","#","sub3style");
access_access.subMenus = new Array(
    new SubMenu("","Wearable","#","sub4style"),
    new SubMenu("","Electronic","#","sub4style"),
    new SubMenu("","Tools","#","sub4style"),
    new SubMenu("","Other","#","sub4style")
);
accessories.subMenus=new Array(access_access);


function  ColorMaterial(imgUrl) {
    this.imgUrl = imgUrl
}
ColorMaterial.prototype.getComponent = function() {

    var _html= "<span class='design_choose_item'>" +
        "<img src='"+this.imgUrl+"'/>" +
        "<span/>";
    return _html;
}
var colorMaterialList = new Array(
    new ColorMaterial("../assets/images/color_material/14k rose gold plated.png"),
    new ColorMaterial("../assets/images/color_material/18k gold plated.png"),
    new ColorMaterial("../assets/images/color_material/18k gold.png"),
    new ColorMaterial("../assets/images/color_material/aluminum.png"),
    new ColorMaterial("../assets/images/color_material/black acrylic plastic.png"),
    new ColorMaterial("../assets/images/color_material/castable wax.png"),
    new ColorMaterial("../assets/images/color_material/coated fullcolor sandstone.png"),
    new ColorMaterial("../assets/images/color_material/Elasto plastic.png"),
    new ColorMaterial("../assets/images/color_material/frosted plastic.png"),
    new ColorMaterial("../assets/images/color_material/fullcolor sandstone.png"),
    new ColorMaterial("../assets/images/color_material/HD acrylate.png"),
    new ColorMaterial("../assets/images/color_material/metallic plastic.png"),
    new ColorMaterial("../assets/images/color_material/orange plastic.png"),
    new ColorMaterial("../assets/images/color_material/pink plastic.png"),
    new ColorMaterial("../assets/images/color_material/PLatinum.png"),
    new ColorMaterial("../assets/images/color_material/Polished brass.png"),
    new ColorMaterial("../assets/images/color_material/Polished bronze steel.png"),
    new ColorMaterial("../assets/images/color_material/Polished bronze.png"),
    new ColorMaterial("../assets/images/color_material/Polshed nichel Silver.png"),
    new ColorMaterial("../assets/images/color_material/Polshed Silver.png"),
    new ColorMaterial("../assets/images/color_material/porcelain celadon green.png"),
    new ColorMaterial("../assets/images/color_material/porcelain gloss black.png"),
    new ColorMaterial("../assets/images/color_material/porcelain gloss blue.png"),
    new ColorMaterial("../assets/images/color_material/porcelain gloss cobalt blue.png"),
    new ColorMaterial("../assets/images/color_material/porcelain gloss green.png"),
    new ColorMaterial("../assets/images/color_material/porcelain gloss red.png"),
    new ColorMaterial("../assets/images/color_material/porcelain gloss white.png"),
    new ColorMaterial("../assets/images/color_material/porcelain matte black.png"),
    new ColorMaterial("../assets/images/color_material/raw brass.png"),
    new ColorMaterial("../assets/images/color_material/raw bronze.png"),
    new ColorMaterial("../assets/images/color_material/raw silver.png"),
    new ColorMaterial("../assets/images/color_material/rhoduym plated.png"),
    new ColorMaterial("../assets/images/color_material/rose gold.png"),
    new ColorMaterial("../assets/images/color_material/transparent acrylic plastic.png"),
    new ColorMaterial("../assets/images/color_material/white acrylic plastic.png"),
    new ColorMaterial("../assets/images/color_material/White gold.png"),
    new ColorMaterial("../assets/images/color_material/yellow plastic.png")
)

function getColorMaterialListView() {
    var _html = "";
    for (var i=0;i<colorMaterialList.length;i++) {
        _html+=colorMaterialList[i].getComponent();
    }
    return _html
}
class Calebe {
    constructor (Site) {
        this.Site = Site;
       
    }

    exibirSite () {
        window.open(this.Site);
    }
}
   
var novoCalebe = new Calebe ("https://poki.com/br");
    novoCalebe.exibirSite();
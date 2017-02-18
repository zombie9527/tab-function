(function(window,document){
    function Tab(doc){
        var labels, contents ,label ,content;
        this.init(doc);
    }
    Tab.prototype.init = function(doc){
        this.labels = doc.headerType||"li";
        this.contents = doc.contentType||"div";
        this.label = document.getElementById(doc.header);
        this.content = document.getElementById(doc.content);

        this.labels = this.label.getElementsByTagName(doc.headerType);
        this.contents = this.content.getElementsByTagName(doc.contentType);

        this.press();
    }
    Tab.prototype.press = function(){
        var self = this;
        for(var i = 0; i<self.labels.length;i++){
            (function(i){
                self.labels[i].onclick = function(){
                    self.page(i);
                }
            })(i);
            
        }
    }
    Tab.prototype.page = function(index){
        var self = this;
        for(var i = 0; i<self.contents.length;i++){
            self.contents[i].style.display = "none";
        }
        self.contents[index].style.display="block";
    }
    window.Tab = window.Tab||Tab;
})(window,document);
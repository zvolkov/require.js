function testing(file, callback) {
    define = function(deps, moduleInitializer){
        callback(moduleInitializer);
    }
    var script = document.createElement('script');
    script.src = file;
    var head= document.getElementsByTagName('head')[0];
    head.appendChild(script);
}

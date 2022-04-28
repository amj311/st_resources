function insertWidget(widgetName,elClass,config) {
    let anchors = document.querySelectorAll("."+elClass);
    anchors.forEach( (el,i) => {
        let anchorId = `${widgetName}-${elClass}-${i}`;
        el.outerHTML = /*html*/`
            <div id="${anchorId}"><${widgetName} :config="config" /></div>
        `
        new Vue({el: "#"+anchorId, data:{config}});
    })
}

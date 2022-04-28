function insertWidget(widgetName,elId,config) {
    let anchorEl = document.getElementById(elId);
    let anchorId = `${widgetName}_${elId}`;
    anchorEl.outerHTML = /*html*/`
        <div id="${anchorId}"><${widgetName} :config="config" /></div>
    `
    new Vue({el: "#"+anchorId, data:{config}});
}

document.head.insertAdjacentHTML("beforeend", /* html */`
<style>
.st-widget-placeholder {
}

.st-widget-placeholder::before {
    content: 'ST Widget';
    color: #888;
    border: 2px dashed;
    text-transform: uppercase;
    padding: .5em;
}
</style>
`);
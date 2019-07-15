// <body>
//   <p>Boom</p>
//   text
//   <div>Bam</div>
// </body>
// const elements = prettify(document);
// console.log(document.body.innerHTML);
// <body>
//   <p>Boom</p>
//   text
//   <div><p>Bam</p></div>
// </body>

function prettify(document) {
    var treeWalker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: function (node) {
                return node.data.charCodeAt() !== 10 && node.parentElement.nodeName === 'DIV'
                    ? NodeFilter.FILTER_ACCEPT
                    : NodeFilter.FILTER_SKIP;
            }
        },
        false
    );

    var nodes = [];

    while (treeWalker.nextNode()) {
        nodes.push(treeWalker.currentNode)
    }

    nodes.forEach(function (node) {
        let wrapper = document.createElement('p');
        wrapper.appendChild(node.cloneNode());
        node.parentElement.replaceChild(wrapper, node);
    });
}

prettify(document);
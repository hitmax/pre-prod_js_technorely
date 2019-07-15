// <body>
//   <p>1</p>
//   text
//   <div><p>2</p></div>
// </body>
// const elements = recSearchTags(document, 'p');
// ['<p>1</p>' '<p>2</p>'] где каждый элемент это объект соответствующего типа
// console.log(elements.length); // 2

function recSearchTags(document, tag) {
    var target = tag.toUpperCase();
    var tagCollection = [];

    function search(items) {
        items.forEach(function (item) {
            if (item.nodeType === 1) {
                item.tagName === target && tagCollection.push(item);
                search(item.childNodes);
            }
        });
    }

    search(document.body.childNodes);

    return tagCollection;
}

console.log(recSearchTags(document, 'span'));


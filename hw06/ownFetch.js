const ownFetch = (url, options = {}) => {
    return new Promise((resolve, reject) => {
        var request = {
            method: options.method || "GET",
            headers: options.headers || {},
            body: options.body ? JSON.stringify(options.body) : null
        };

        var xhr = new XMLHttpRequest();

        xhr.open(request.method, url);

        for (var record in request.headers) {
            xhr.setRequestHeader(record, request.headers[record]);
        }

        xhr.onerror = function () {
            reject(new TypeError("Network request failed"));
        };

        xhr.ontimeout = function () {
            reject(new TypeError("Network request failed"));
        };

        xhr.onabort = function () {
            reject(new DOMException("Aborted", "AbortError"));
        };

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (Math.floor(this.status / 100) !== 2) {
                    reject("Error: request failed");
                } else {
                    resolve({json: () => this.responseText || this.responseXML});
                }
            }
        };

        xhr.send(request.body);
    });
};

// window.fetch = window.fetch || ownFetch;

ownFetch("https://jsonplaceholder.typicode.com/posts")
    .then(result => result.json())
    .then(console.log)
    .catch(err => console.log(err));

ownFetch("https://jsonplaceholder.typicode.com/posts")
    .then(console.log)
    .then(result => result())
    .catch(err => console.log(err));

var len;
var results = '';
function apiSearch() {
    var params = {
        "q": $("#query").val(),
        "count": "50",
        "offset": "0",
        "mkt": "en-us"
    };
    $.ajax({
        url: "my-api-url" + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("91fe16ef819549c5868b95cc03108086", "https://api.bing.microsoft.com/v7.0/search?");
        },
        type: "GET",
    })
        .done(function (data) {
            len = data.webPages.value.length;
            for (i = 0; i < len; i++) {
                results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
            }
            $('#searchResults').html(results);
            $('#searchResults').dialog();
        })
        .fail(function () {
            alert("error");
        });
}
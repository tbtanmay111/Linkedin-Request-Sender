(function () {
    var connection = document
        .querySelectorAll(
            '.artdeco-button.artdeco-button--2.artdeco-button--secondary');
    // Send request to 10 people only
    for (var i = 0; i < 10; i = i + 1)
        connection[i].click();

    document.body.appendChild(connection);

}())

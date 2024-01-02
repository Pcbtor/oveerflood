document.getElementById("customizeButton").addEventListener("click", function () {
    var newTitle = prompt("Enter the new title:");
    var newFaviconURL = prompt("Enter the new favicon URL:");
    
    if (newTitle && newFaviconURL) {
        document.title = newTitle;
        var favicon = document.querySelector("link[rel='icon']") || document.createElement('link');
        favicon.type = 'image/x-icon';
        favicon.rel = 'icon';
        favicon.href = newFaviconURL;
        document.head.appendChild(favicon);
    }
});

document.getElementById("runScriptButton").addEventListener("click", function () {
    var num = prompt("How many History Item(s) should I create?");
    if (isNaN(num) || num === null || num === "") {
        alert('ErrCH68: Invalid input');
        return;
    }
    
    num = parseInt(num);
    alert('pablo method will start and begin progress when you click OK. Estimated time: 5 secs - 1 minute');
    var x = window.location.href;
    
    for (var i = 1; i <= num; i++) {
        history.pushState({}, '', x + '?flood=' + i);
    }
    
    alert("Pablo Method History Eliminator Successful!\n\nGoogle Classroom appears in your history " + num + (num === 1 ? " time." : " times."));
});

/*LJMS Info Hub Copyright@ 2024 by Jiaxiang Xie is licensed under Attribution-ShareAlike 4.0 International*/

function updateDate() {
    const now = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('liveDate').textContent = now.toLocaleDateString('en-US', dateOptions);
    document.getElementById('liveTime').textContent = now.toLocaleTimeString('en-US', timeOptions);
}
setInterval(updateDate, 500);

function showListBasedOnDate() {
    const today = new Date().getDate();
    const list1 = document.getElementById('list1');
    const list2 = document.getElementById('list2');

    list1.classList.remove('active');
    list2.classList.remove('active');

    if (today % 2 === 0) {
        list2.classList.add('active');
    } else {
        list1.classList.add('active');
    }
}

function toggleLists() {
    var list1 = document.getElementById('list1');
    var list2 = document.getElementById('list2');
    
    list1.classList.toggle('active');
    list2.classList.toggle('active');
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'c') {
        var consoleElem = document.getElementById('console');
        consoleElem.style.display = consoleElem.style.display === 'block' ? 'none' : 'block';
    }
});




function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

document.addEventListener("fullscreenchange", function() {
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    if (document.fullscreenElement) {
        fullscreenBtn.style.display = 'none';
    } else {
        fullscreenBtn.style.display = 'block';
    }
});



updateDate();
showListBasedOnDate();
setInterval(showListBasedOnDate, 60000);
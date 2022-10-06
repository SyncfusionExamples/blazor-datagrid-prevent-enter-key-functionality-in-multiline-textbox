function editKeyDown(id) {
    document.getElementById(id).addEventListener("keydown", function (e) {
        if (e.key == "Enter") {
            e.stopPropagation();
        }
    });
}
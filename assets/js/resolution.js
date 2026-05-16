function getResolution() {
    return [screen.width, screen.height, screen.width/screen.height]
}
if (getResolution()[2] == 16/9) {
    if (screen.width <= 1366) {
        document.body.style.zoom = "90%";
    } else {
        document.body.style.zoom = "100%";
    }
} else {
    document.body.style.zoom = "90%";
}
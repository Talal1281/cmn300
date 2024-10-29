document.querySelectorAll('.accordion').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.padding = "0 18px";
            panel.style.opacity = 0;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.padding = "10px 18px";
            panel.style.opacity = 1;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn-print").addEventListener("click", function () {
        //window.print();

        let wspFrame = document.getElementById("frame").contentWindow;
        wspFrame.focus();
        wspFrame.print();
    });
});

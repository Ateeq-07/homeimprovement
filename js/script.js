document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar-collapse");
    const navLinks = document.querySelectorAll(".navbar-collapse .nav-link, .navbar-collapse .btn");

    ```
if (!navbar || typeof bootstrap === "undefined") {
    return;
}

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (navbar.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(navbar).hide();
        }
    });
});
```

});

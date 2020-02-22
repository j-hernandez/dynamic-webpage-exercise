document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('container');

    // Set up header which needs
    // - H1 for the title
    // - nav for navigation links
    var header = document.createElement('header');
    var pageTitle = document.createElement('h1');
    var nav = document.createElement('nav');

    // Adds our <header> element to the container
    container.appendChild(header);
    // Add our h1 and nav elements to the <header>
    header.appendChild(pageTitle);
    header.appendChild(nav);
    // Add text to H1 and nav
    pageTitle.innerHTML = 'HighOnCoding';
    nav.innerHTML = '<ul><li>Home</li><li>Categories</li></ul>';
})


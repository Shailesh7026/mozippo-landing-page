const navBar = document.querySelector('.navbar-container');

navBar.innerHTML = `
   <nav class="navbar">
            <div class="logo-container">
                <a href="index.html">
                    <img class="logo" src="./src/images/logo-gradient.svg" alt="Mozippo logo">
                </a>
                <h1>Mozippo</h1>
            </div>
            <div>
                <ul class="links-list">
                    <li><a href="index.html" class="link">home</a></li>
                    <li><a href="about.html" class="link">about</a></li>
                    <li><a href="faqs.html" class="link">faqs</a></li>
                    <li><a href="download.html" class="link">download</a></li>
                </ul>
            </div>
            <div>
                <button class="btn-primary-big">
                    Download Now <i class="fa-solid fa-download"></i>
                </button>
                <button class="btn-primary-small menu-btn">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </nav>
        <nav class="navbar-mobile">

            <div class="mobile-nav">
                <div class="logo-container">
                    <a href="index.html">
                        <img class="logo" src="./src/images/logo-gradient.svg" alt="Mozippo logo">
                    </a>
                    <h1>Mozippo</h1>
                </div>
                <i class="fa-regular fa-circle-xmark"></i>
            </div>

            <ul class="links-list-mobile">
                <a href="index.html" class="link">
                    <li>home</li>
                </a>
                <a href="about.html" class="link">
                    <li>about</li>
                </a>
                <a href="faqs.html" class="link">
                    <li>faqs</li>
                </a>
                <a href="download.html" class="link">
                    <li>download</li>
                </a>

                <button class="btn-primary-big-mobile">
                    Download Now <i class="fa-solid fa-download"></i>
                </button>
            </ul>
        </nav>
`;

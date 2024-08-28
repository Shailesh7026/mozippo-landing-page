const footer = document.querySelector('.footer-container');

footer.innerHTML = `
 <div class="row">
                <div class="footer-info">
                    <div class="logo-container">
                        <a href="index.html">
                            <img class="logo" src="./src/images/logo-gradient.svg" alt="Mozippo logo">
                        </a>
                        <h1>Mozippo</h1>
                    </div>
                    <div class="footer-desc">
                        <p>Are you ready to meet new people, find your soulmate, or just enjoy a fun conversation? Mozippo is the perfect dating app for you! Designed to make meaningful connections easy and enjoyable, Mozippo brings you closer to your perfect match without any hassle.</p>
                    </div>
                </div>
                <div class="footer-links">
                    <h3>Quick Links</h3>
                    <ul class="links">
                        <li><a href="index.html" class="link">home</a></li>
                        <li><a href="about.html" class="link">about</a></li>
                        <li><a href="faqs.html" class="link">faqs</a></li>
                        <li><a href="download.html" class="link">download</a></li>
                    </ul>
                </div>
                <div class="contact-info">
                    <h3>Contact Us</h3>
                    <p>We would <i class="fa-regular fa-heart"></i> to hear from you.</p>
					<p>Click on <a class="link link-primary" href="mailto:feedback@mozippo.com"><b>Send Feedback</b></a> to help us</p>
					<p>sending your valuable feedback.</p>
					<p class="text-primary">Email response time is 24 business hrs.</p>
                </div>
            </div>
            <div class="row">
                <div class="footer-download-links">
                    <a href="#" class="download-link-img">
                        <img src="./src/images/google-play.png" alt="download from playstore">
                    </a>
                    <a href="#" class="download-link-img">
                        <img src="./src/images/app-store.png" alt="">
                    </a>
                </div>
                <ul class="social-links">
					<p>Find <b>Mozippo</b> on </p>
                    <li><i class="fa-brands fa-facebook"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-youtube"></i></li>
                </ul>

            </div>
            <hr>
            <div class="row">
                <p class="copy-right">Copyright © 2024 <b>Mozippo</b>. All rights reserved.</p>
                <p>
                    <a href="terms-of-use.html" class="terms-of-use">Terms of Use </a> | <a href="privacy-policy.html"
                        class="terms-of-use">Privacy Policy</a> |
                    <a href="safety-tips.html" class="terms-of-use">Safety Tips</a>
                </p>
            </div>
    `;
    
import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class Navbar extends LitElement {

  static get properties() {
    return {
      lang: {type: String}
    };
  }

  constructor() {
    super();
    this.addEventListener('click', (event) => {
      if (event.target.name === 'lang-switcher') {
        this.switchWebLanguage();
      }
    });
    this.lang = localStorage.getItem('lang') || navigator.language || navigator.userLanguage;
  }

  createRenderRoot() {
    return this;
  }

  switchWebLanguage() {
    console.log('Switching web language...');
    if (this.lang === 'vi') {
      localStorage.setItem('lang', 'en');
    } else {
      localStorage.setItem('lang', 'vi');
    }
    window.location.href = '/';
  }

  render() {
    console.log('Language: ' + this.lang);
    if (this.lang === 'vi') {
      return html`
        <div class="navbar navbar-expand-lg fixed-top" style="z-index: 9999; transition: 0.5s;">
          <div class="container py-3">
            <a class="navbar-brand" href="#">
              <img src="/assets/images/ftcvn-logo.png" alt="" width="150" height="50" class="d-inline-block align-text-top">
            </a>

            <button class="navbar-toggler border-0" type="button">
            <style>
              #language-selector .dropdown-toggle::after {
                content: none;
              }
            </style>
            <div class="nav-item d-inline-block px-2" style="position: initial;">
              <a class="nav-link text-decoration-none border-0 shadow-none" id="language-selector">
                <span class="fi fi-vn"></span>
              </a>
            </div>
            <span class="bi bi-list fs-1" style="color: #ff8100;" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></span>
          </button>
            <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item d-none d-lg-block">
                <span class="fi fi-vn">
                  <button class="nav-link text-decoration-none border-0 shadow-none" name="lang-switcher"></button>
                </span>
                </li>
                <li class="nav-item">
                  <a class="nav-link border-0 shadow-none text-white" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link border-0 shadow-none text-white" aria-current="page" href="/2324/aboutFirst.html">Về <span class="fw-bold fst-italic">FIRST®</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link border-0 shadow-none text-white" aria-current="page" href="/2324/vorc-cantho.html">VORC 2024</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link border-0 shadow-none text-white" aria-current="page" href="/faqs/">FAQs</span></a>
                </li>
                </li>
                <li class="nav-item dropdown" style="position: initial;">
                  <a class="nav-link dropdown-toggle border-0 shadow-none" style="outline: none; box-shadow: none; color: white;" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Xem thêm
                  </a>
                  <div class="dropdown-menu big-menu w-100 rounded-0 border-0 p-0" style="background-color: #ff8100;">
                    <div class="container pt-4 pb-3">
                      <div class="row row-gap-3">
                        <div class="col-12 col-lg-4">
                          <h5 class="text-white">
                            Về cuộc thi
                          </h5>
                          <ul class="list-unstyled">
                            <li class="li-arrow pb-1" style="color: white;">
                              <a href="https://www.firstinspires.org/robotics/ftc" class="text-white">FIRST Tech Challenge</a>
                            </li>
                            <li class="li-arrow pb-1" style="color: white;">
                              <a href="/2324/vorc.html" class="text-white">Vietnam Open Robotics Challenge (VORC)</a>
                            </li>
                            <li class="li-arrow pb-1" style="color: white;">
                              <a href="https://ftc-docs.firstinspires.org/en/latest/index.html" class="text-white">Tổng hợp tài liệu FTC</a>
                            </li>
                            <li class="li-arrow pb-1" style="color: white;">
                              <a href="/2324/supportingPrograms.html" class="text-white">Supporting Programs</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-12 col-lg-4">
                          <h5 class="text-white">
                            Thông tin chung
                          </h5>
                          <ul class="list-unstyled">
                            <li class="li-arrow pb-1" style="color: white;">
                              <a href="/2324/volunteer.html" class="text-white">Tình nguyện viên</a>
                            </li>
                            <li class="li-arrow pb-1" style="color: white;">
                              <a href="/2324/resources.html" class="text-white">Mục lục Website</a>
                            </li>
                            <li class="li-arrow pb-1" style="color: white;">
                              <a href="https://community.firstinspires.org/topic/ftc" class="text-white">Blog <span class="fw-bold fst-italic">FIRST®</span></a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-12 col-lg-4">
                          <h5 class="text-white">
                            Đường dẫn khác
                          </h5>
                          <ul class="list-unstyled">
                            <li class="li-arrow pb-1" style="color: white;">
                              <a href="https://www.gobilda.com/" class="text-white">goBilda</a>
                            </li>
                            <li class="li-arrow pb-1" style="color: white;">
                              <a href="https://www.andymark.com/" class="text-white">AndyMark</a>
                            </li>
                            <li class="li-arrow pb-1" style="color: white;">
                              <a href="https://www.servocity.com/" class="text-white">Servocity</a>
                            </li>
                            <li class="li-arrow pb-1" style="color: white;">
                              <a href="https://www.pitsco.com/" class="text-white">PITSCO</a>
                            </li>
                            <li class="li-arrow pb-1" style="color: white;">
                              <a href="https://www.chiefdelphi.com/" class="text-white">Chief Delphi</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      `;
    } else {
      return html`
        <div class="navbar navbar-expand-lg fixed-top" style="z-index: 9999; transition: 0.5s;">
        <div class="container py-3">
          <a class="navbar-brand" href="#">
            <img src="../assets/images/ftcvn-logo.png" alt="" width="150" height="50" class="d-inline-block align-text-top">
          </a>
          <button class="navbar-toggler border-0" type="button">
            <style>
              #language-selector .dropdown-toggle::after {
                content: none;
              }
            </style>
            <div class="nav-item d-inline-block px-2" style="position: initial;">
              <a class="nav-link text-decoration-none border-0 shadow-none" id="language-selector">
                <span class="fi fi-us"></span>
              </a>
            </div>
            <span class="bi bi-list fs-1" style="color: #ff8100;" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></span>
          </button>
          <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item d-none d-lg-block">
                <span class="fi fi-us">
                  <button class="nav-link text-decoration-none border-0 shadow-none" name="lang-switcher"></button>
                </span>
              </li>
              <li class="nav-item">
                <a class="nav-link border-0 shadow-none text-white" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link border-0 shadow-none text-white" aria-current="page" href="/2324/en/aboutFirst">About <span class="fw-bold fst-italic">FIRST®</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link border-0 shadow-none text-white" aria-current="page" href="/2324/en/vorc-cantho">VORC 2024</a>
              </li>
              <li class="nav-item"></li>
              <a class="nav-link border-0 shadow-none text-white" aria-current="page" href="/faqs/">FAQs</span></a>
              </li>
              <li class="nav-item dropdown" style="position: initial;">
                <a class="nav-link dropdown-toggle border-0 shadow-none" style="outline: none; box-shadow: none; color: white;" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <div class="dropdown-menu big-menu w-100 rounded-0 border-0 p-0" style="background-color: #ff8100;">
                  <div class="container pt-4 pb-3">
                    <div class="row row-gap-3">
                      <div class="col-12 col-lg-4">
                        <h5 class="text-white">
                          Competitions
                        </h5>
                        <ul class="list-unstyled">
                          <li class="li-arrow pb-1" style="color: white;">
                            <a href="https://www.firstinspires.org/robotics/ftc" class="text-white">FIRST Tech Challenge</a>
                          </li>
                          <li class="li-arrow pb-1" style="color: white;">
                            <a href="/2324/vorc.html" class="text-white">Vietnam Open Robotics Challenge (VORC)</a>
                          </li>
                          <li class="li-arrow pb-1" style="color: white;">
                            <a href="https://ftc-docs.firstinspires.org/en/latest/index.html" class="text-white">FTC Documents</a>
                          </li>
                          <li class="li-arrow pb-1" style="color: white;">
                            <a href="/2324/supportingPrograms.html" class="text-white">Supporting Programs</a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-12 col-lg-4">
                        <h5 class="text-white">
                          Information
                        </h5>
                        <ul class="list-unstyled">
                          <li class="li-arrow pb-1" style="color: white;">
                            <a href="/2324/en/volunteer/index.html" class="text-white">Volunteer</a>
                          </li>
                          <li class="li-arrow pb-1" style="color: white;">
                            <a href="/2324/resources.html" class="text-white">Table of content</a>
                          </li>
                          <li class="li-arrow pb-1" style="color: white;">
                            <a href="https://community.firstinspires.org/topic/ftc" class="text-white">Blog <span class="fw-bold fst-italic">FIRST®</span></a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-12 col-lg-4">
                        <h5 class="text-white">
                          Other Resources
                        </h5>
                        <ul class="list-unstyled">
                          <li class="li-arrow pb-1" style="color: white;">
                            <a href="https://www.gobilda.com/" class="text-white">goBilda</a>
                          </li>
                          <li class="li-arrow pb-1" style="color: white;">
                            <a href="https://www.andymark.com/" class="text-white">AndyMark</a>
                          </li>
                          <li class="li-arrow pb-1" style="color: white;">
                            <a href="https://www.servocity.com/" class="text-white">Servocity</a>
                          </li>
                          <li class="li-arrow pb-1" style="color: white;">
                            <a href="https://www.pitsco.com/" class="text-white">PITSCO</a>
                          </li>
                          <li class="li-arrow pb-1" style="color: white;">
                            <a href="https://www.chiefdelphi.com/" class="text-white">Chief Delphi</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      `;
    }
  }
}

customElements.define('ftcvn-navbar', Navbar);
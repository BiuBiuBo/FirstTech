import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class Contact extends LitElement {

  static get properties() {
    return {
      lang: {type: String}
    };
  }

  constructor() {
    super();
    this.lang = localStorage.getItem('lang') || navigator.language || navigator.userLanguage;
  }

  createRenderRoot() {
    return this;
  }

  render() {
    if (this.lang === 'vi') {
      return html`
      <!-- Footer section -->
      <svg id="wave" style="transform:rotate(0deg); transition: 0.3s; margin-bottom: -3px;" viewBox="0 0 1440 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="#e5ae32" offset="0%"></stop>
            <stop stop-color="#e5ae32" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,48L48,52C96,56,192,64,288,74C384,84,480,96,576,100C672,104,768,100,864,82C960,64,1056,32,1152,32C1248,32,1344,64,1440,68C1536,72,1632,48,1728,34C1824,20,1920,16,2016,18C2112,20,2208,28,2304,34C2400,40,2496,44,2592,52C2688,60,2784,72,2880,64C2976,56,3072,28,3168,26C3264,24,3360,48,3456,50C3552,52,3648,32,3744,24C3840,16,3936,20,4032,20C4128,20,4224,16,4320,14C4416,12,4512,12,4608,26C4704,40,4800,68,4896,80C4992,92,5088,88,5184,82C5280,76,5376,68,5472,56C5568,44,5664,28,5760,22C5856,16,5952,20,6048,36C6144,52,6240,80,6336,84C6432,88,6528,68,6624,60C6720,52,6816,56,6864,58L6912,60L6912,120L6864,120C6816,120,6720,120,6624,120C6528,120,6432,120,6336,120C6240,120,6144,120,6048,120C5952,120,5856,120,5760,120C5664,120,5568,120,5472,120C5376,120,5280,120,5184,120C5088,120,4992,120,4896,120C4800,120,4704,120,4608,120C4512,120,4416,120,4320,120C4224,120,4128,120,4032,120C3936,120,3840,120,3744,120C3648,120,3552,120,3456,120C3360,120,3264,120,3168,120C3072,120,2976,120,2880,120C2784,120,2688,120,2592,120C2496,120,2400,120,2304,120C2208,120,2112,120,2016,120C1920,120,1824,120,1728,120C1632,120,1536,120,1440,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
      </svg>
      <section class="pt-5" style="background-color: #e5ae32;">
        <div class="container">
          <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 pb-5 border-bottom">
            <div class="col mb-3">
              <a><img src="/assets/images/ftcvn-logo.png" alt="" class="img-fluid d-block mx-auto" style="max-height: 70px;"></a>
            </div>
            <div class="col mb-3">
            </div>
            <div class="col mb-3">
              <h5 class="text-secondary fw-semibold">FTC VN</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="https://www.firstinspires.org/" class="nav-link p-0 text-white">Về FIRST</a></li>
                <li class="nav-item mb-2"><a href="/2324/index.html#event-recap" class="nav-link p-0 text-white">FTC Vietnam 23-24</a></li>
                <li class="nav-item mb-2"><a href="/tbu/index.html" class="nav-link p-0 text-white">Luật chơi</a></li>
                <li class="nav-item mb-2"><a href="/index.html#timeline-section" class="nav-link p-0 text-white">Lịch trình</a></li>
              </ul>
            </div>
            <div class="col mb-3">
              <h5 class="text-secondary fw-semibold">Hỗ trợ</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="/index.html#registration-section" class="nav-link p-0 text-white">Đăng ký</a></li>
                <li class="nav-item mb-2"><a href="/2324/vorc.html" class="nav-link p-0 text-white">Vietnam Open Robotics Challenge</a></li>
                <li class="nav-item mb-2"><a href="https://www.firstinspires.org/robotics/ftc" class="nav-link p-0 text-white">Trang chính thức</a></li>
                <li class="nav-item mb-2"><a href="/faqs/index.html" class="nav-link p-0 text-white">FAQs</a></li>
              </ul>
            </div>
            <div class="col mb-3">
              <h5 class="text-secondary fw-semibold">Thông tin</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="mailto:robotics@fe.edu.vn" class="nav-link p-0 text-white">Email: robotics@fe.edu.vn</a></li>
                <li class="nav-item mb-2"><a class="nav-link p-0 text-white">Phone: 0375156543 (Ms. Trang Đỗ)</a></li>
                <li class="nav-item mb-2"><a href="https://maps.app.goo.gl/gGyVR9HWvJCBer5M8" class="nav-link p-0 text-white">Address: Khu GD&ĐT, CNC Hòa Lạc, Km29, Đại lộ Thăng Long, Thạch Thất , Hà Nội, Việt Nam</a></li>
              </ul>
            </div>
          </footer>
          <p class="text-center text-white m-0 py-3">Copyright ©2024 FPT Edu Experience Space All Rights Reserved</p>
        </div>
      </section>`;
    } else {
      return html`
      <!-- Footer section -->
      <svg id="wave" style="transform:rotate(0deg); transition: 0.3s; margin-bottom: -3px;" viewBox="0 0 1440 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="#e5ae32" offset="0%"></stop>
            <stop stop-color="#e5ae32" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,48L48,52C96,56,192,64,288,74C384,84,480,96,576,100C672,104,768,100,864,82C960,64,1056,32,1152,32C1248,32,1344,64,1440,68C1536,72,1632,48,1728,34C1824,20,1920,16,2016,18C2112,20,2208,28,2304,34C2400,40,2496,44,2592,52C2688,60,2784,72,2880,64C2976,56,3072,28,3168,26C3264,24,3360,48,3456,50C3552,52,3648,32,3744,24C3840,16,3936,20,4032,20C4128,20,4224,16,4320,14C4416,12,4512,12,4608,26C4704,40,4800,68,4896,80C4992,92,5088,88,5184,82C5280,76,5376,68,5472,56C5568,44,5664,28,5760,22C5856,16,5952,20,6048,36C6144,52,6240,80,6336,84C6432,88,6528,68,6624,60C6720,52,6816,56,6864,58L6912,60L6912,120L6864,120C6816,120,6720,120,6624,120C6528,120,6432,120,6336,120C6240,120,6144,120,6048,120C5952,120,5856,120,5760,120C5664,120,5568,120,5472,120C5376,120,5280,120,5184,120C5088,120,4992,120,4896,120C4800,120,4704,120,4608,120C4512,120,4416,120,4320,120C4224,120,4128,120,4032,120C3936,120,3840,120,3744,120C3648,120,3552,120,3456,120C3360,120,3264,120,3168,120C3072,120,2976,120,2880,120C2784,120,2688,120,2592,120C2496,120,2400,120,2304,120C2208,120,2112,120,2016,120C1920,120,1824,120,1728,120C1632,120,1536,120,1440,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
      </svg>
      <section class="pt-5" style="background-color: #e5ae32;">
        <div class="container">
          <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 border-bottom">
            <div class="col mb-3">
              <a><img src="/assets/images/ftcvn-logo.png" alt="" class="img-fluid d-block mx-auto" style="max-height: 70px;"></a>
            </div>
            <div class="col mb-3">
              <a href="https://fpt.com/en/business/education"><img src="/assets/images/fpt-logo.svg" alt"fpt" class="img-fluid d-block mx-auto rounded" style="max-height: 100px;"></a>
            </div>
            <div class="col mb-3">
              <h5 class="text-secondary fw-semibold">FTC VN</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="https://www.firstinspires.org/" class="nav-link p-0 text-white">FIRST</a></li>
                <li class="nav-item mb-2"><a href="/2324/en/index.html#event-recap" class="nav-link p-0 text-white">FTC Vietnam 23-24</a></li>
                <li class="nav-item mb-2"><a href="/2425/en/index.html" class="nav-link p-0 text-white">FTC Vietnam 24-25</a></li>
                <li class="nav-item mb-2"><a href="/tbu/index.html" class="nav-link p-0 text-white">Rules</a></li>
                <li class="nav-item mb-2"><a href="/en/index.html#timeline" class="nav-link p-0 text-white">Timeline</a></li>
              </ul>
            </div>
            <div class="col mb-3">
              <h5 class="text-secondary fw-semibold">Support</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="/en/index.html#registration-section" class="nav-link p-0 text-white">Registration</a></li>
                <li class="nav-item mb-2"><a href="/2324/en/vorc/index.html" class="nav-link p-0 text-white">Vietnam Open Robotics Challenge</a></li>
                <li class="nav-item mb-2"><a href="https://www.firstinspires.org/robotics/ftc" class="nav-link p-0 text-white">FTC Official page</a></li>
                <li class="nav-item mb-2"><a href="/faqs" class="nav-link p-0 text-white">FAQs</a></li>
              </ul>
            </div>
            <div class="col mb-3">
              <h5 class="text-secondary fw-semibold">Information</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="mailto:robotics@fe.edu.vn" class="nav-link p-0 text-white">Email: robotics@fe.edu.vn</a></li>
                <li class="nav-item mb-2"><a class="nav-link p-0 text-white">Phone: +84 375 156 543 (Ms. Trang Đỗ)</a></li>
                <li class="nav-item mb-2"><a href="https://maps.app.goo.gl/gGyVR9HWvJCBer5M8" class="nav-link p-0 text-white">Address: Hoa Lac Hi-tech Park, km 29, Đại lộ Thăng Long, Hà Nội, Vietnam</a></li>
              </ul>
            </div>
          </footer>
          <p class="text-center text-white m-0 py-3">Copyright ©2025 FPT Edu Experience Space All Rights Reserved</p>
        </div>
      </section>`;
    }
  }
}

customElements.define('ftcvn-contact', Contact);
const navbar = document.getElementById("navbar");

navbar.innerHTML = `
    <nav class="fixed top-0 left-0 w-full bg-black z-40">
        <div class="max-w-7xl mx-auto flex justify-between items-center w-full md:p-5 p-3 md:h-24 h-20">
            <a data-aos="fade-right" href="./index.html" class="flex items-center justify-center lg:justify-start">
            <img src="./docs/assets/images/logo.png" class="md:h-20 h-16" alt="logo">
                <img src="./docs/assets/images/logo-name.jpg" class="md:h-16 h-12" alt="logo">
            </a>
            <div class="flex items-center gap-10">
                <div class="md:flex items-center gap-10 hidden">
                    <ul data-aos="fade-left" class="md:flex hidden items-center text-zinc-300 gap-10">
                        <li><a href="./index.html" class="hover:text-[#f5e474] transition-all duration-500">Home </a>
                        </li>
                        <li><a href="#about" class="hover:text-[#f5e474] transition-all duration-500">About
                            </a>
                        </li>
                        <li><a href="#features" class="hover:text-[#f5e474] transition-all duration-500">Features
                            </a>
                        </li>
                    </ul>
                </div>
                <a data-aos="fade-left" href="#contact"
                    class="relative cursor-pointer py-4 px-8 text-center md:inline-flex hidden justify-center text-base uppercase text-zinc-300 rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden">
                    <span class="relative z-20">Contact Us</span>
                    <span
                        class="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

                    <span
                        class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-zinc-500 absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
                    <span
                        class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-zinc-500 absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
                    <span
                        class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-zinc-500 absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
                    <span
                        class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-zinc-500 absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
                </a>
            </div>

            <i id="mobileMenuBtn" class="fa-solid text-[#fff] fa-bars md:!hidden text-2xl cursor-pointer mr-2"></i>
        </div>
    </nav>

    <div id="mobileMenu"
        class="fixed left-0 top-0 bg-black max-w-[30rem] w-0 overflow-hidden h-screen z-50 transition-all duration-500">
        <div class="flex items-end justify-end p-5">
            <i class="fa-solid mobileMenuCloseBtn fa-x z-50 text-[#f5f5f5] text-xl cursor-pointer"></i>
        </div>
        <div class="p-6">
            <ul class="flex relative z-50 text-gray-300 flex-col gap-7">
                <li><a href="./index.html"
                        class="hover:text-[#f5e474] mobileMenuCloseBtn text-nowrap transition-all duration-500">Home</a>
                </li>
                <li><a href="#about"
                        class="hover:text-[#f5e474] mobileMenuCloseBtn text-nowrap transition-all duration-500">About</a>
                </li>
                <li><a href="#features"
                        class="hover:text-[#f5e474] mobileMenuCloseBtn text-nowrap transition-all duration-500">Features</a>
                </li>
            </ul>
            <a href="#contact"
                class="text-center block mobileMenuCloseBtn w-full p-3 border text-gray-300 text-nowrap border-zinc-700 mt-5 rounded-lg cursor-pointer">Contact
                us</a>
        </div>
    </div>
    <div class="md:h-24 h-20"></div>
`


const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseBtns = document.querySelectorAll(".mobileMenuCloseBtn");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.style.width = "100%";
});

mobileMenuCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        mobileMenu.style.width = "0";
    });
});
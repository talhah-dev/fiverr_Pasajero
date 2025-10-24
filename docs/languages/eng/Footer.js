const footer = document.getElementById('footer')
footer.innerHTML = `
       <footer class="w-full py-14">
        <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto">
                <a data-aos="zoom-in" href="/index.html" class="flex justify-center ">
                    <img src="/docs/assets/images/logo.png" class="md:h-32 h-20" alt="">
                </a>
                <ul data-aos="fade-up"
                    class="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 pt-12 ">
                    <li><a href="index.html"
                            class="text-gray-800 hover:opacity-80 transition-all duration-500">Home</a></li>
                    <li><a href="#about"
                            class=" text-gray-800 hover:opacity-80 transition-all duration-500">About</a></li>
                    <li><a href="#feature"
                            class=" text-gray-800 hover:opacity-80 transition-all duration-500">Feature</a></li>
                    <li><a href="#contact"
                            class=" text-gray-800 hover:opacity-80 transition-all duration-500">Contact Us</a></li>
                </ul>
                <div data-aos="fade-up" class="flex items-center justify-center text-zinc-600 text-2xl gap-8 mt-7">
                    <a href="https://www.instagram.com/pasajeroapp?utm_source=qr&igsh=MTNvcjJ6ejVxYzhhcA==">
                        <i class="fa-brands transition-all duration-500 hover:text-black fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/share/16ctJy7yR9/">
                        <i class="fa-brands transition-all duration-500 hover:text-black fa-facebook-f"></i>
                    </a>
                    <a href="https://x.com/Pasajeroapp?t=HbRuOJ5KwVgeiUCfM-qhLQ&s=09">
                        <i class="fa-brands transition-all duration-500 hover:text-black fa-x-twitter"></i>
                    </a>
                    <a href="https://www.tiktok.com/@pasajeroapp?_t=ZS-8yOCL4HeKLH&_r=1">
                        <i class="fa-brands transition-all duration-500 hover:text-black fa-tiktok"></i>
                    </a>
                    <a href="https://youtube.com/@pasajeroapp?feature=shared">
                        <i class="fa-brands transition-all duration-500 hover:text-black fa-youtube"></i>
                    </a>
                    </div>
                    
                    <div class="flex items-center justify-center mt-5 ">
                    <a data-aos="fade-up" href="mailto:admin@pasajeroapp.com" class="text-center text-lg text-zinc-700 hover:underline">
                        admin@pasajeroapp.com
                    </a>
                    </div>
                <div class="border-t md:flex-row flex-col gap-5 border-gray-200 pt-5 flex items-center justify-between mt-8">
                    <span class="text-lg text-gray-500 text-center block">© <span id="copyright"></span> Pasajero. Todos los derechos
                        reservados.</span>
                        <a href="/docs/languages/eng/privacy-policy.html" class="text-gray-500 underline hover:opacity-80 transition-all">Privacy policy</a>
                </div>
            </div>
        </div>
    </footer>
`

const year = new Date().getFullYear()
const copyright = document.getElementById('copyright').innerHTML = year
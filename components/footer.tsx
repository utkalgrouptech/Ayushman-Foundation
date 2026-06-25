import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin,HeartHandshake,Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
 
 <footer className="relative bg-[#f8f6f2] overflow-hidden">

      {/* ================= TOP SECTION ================= */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-[45px] pt-[38px] pb-[32px]">

        <div className="grid grid-cols-4 gap-[32px]">

          {/* ================= LOGO AREA ================= */}
          <div className="pr-[18px] border-r border-[#e8e2da]">

            <Link href="/" className="flex items-center gap-3">

              <img
                src="/images/ayushman-logo.jpg"
                alt="Ayushman"
                className="w-[58px] h-[58px] rounded-full object-cover"
              />

              <div>
                <h2
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "1",
                  }}
                  className="text-[#08245c]"
                >
                  Ayushman
                </h2>

                <p
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "17px",
                    fontWeight: "700",
                    lineHeight: "1",
                  }}
                  className="text-[#d88a1c] mt-[3px]"
                >
                  Foundation
                </p>
              </div>
            </Link>

            <p
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                lineHeight: "1.8",
                fontWeight: "500",
              }}
              className="text-[#4b5563] mt-4 max-w-[280px]"
            >
              Dedicated to providing healthcare and social welfare
              services to underserved communities across India.
            </p>

            {/* ================= SOCIAL ================= */}
           <div className="flex items-center gap-2 mt-5">

  <a
    href="https://www.facebook.com/ayushmanfoundationngo/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-[40px] h-[40px] rounded-full bg-[#f4efe8]
    hover:bg-[#08245c] transition-all duration-300
    flex items-center justify-center group"
  >
    <Facebook
      size={17}
      className="text-[#08245c] group-hover:text-white transition-all"
    />
  </a>

  <button
    className="w-[40px] h-[40px] rounded-full bg-[#f4efe8]
    hover:bg-[#08245c] transition-all duration-300
    flex items-center justify-center group"
  >
    <Twitter
      size={17}
      className="text-[#08245c] group-hover:text-white transition-all"
    />
  </button>

  <button
    className="w-[40px] h-[40px] rounded-full bg-[#f4efe8]
    hover:bg-[#08245c] transition-all duration-300
    flex items-center justify-center group"
  >
    <Instagram
      size={17}
      className="text-[#08245c] group-hover:text-white transition-all"
    />
  </button>

  <button
    className="w-[40px] h-[40px] rounded-full bg-[#f4efe8]
    hover:bg-[#08245c] transition-all duration-300
    flex items-center justify-center group"
  >
    <Linkedin
      size={17}
      className="text-[#08245c] group-hover:text-white transition-all"
    />
  </button>

</div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="pl-[5px] border-r border-[#e8e2da]">

            <h3
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "22px",
                fontWeight: "700",
              }}
              className="text-[#08245c]"
            >
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 mt-5">

              {[
                "About Us",
                "Our Programs",
                "Projects",
                "Volunteer",
                "Careers",
                "News & Updates",
              ].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="flex items-center gap-3 group"
                >

                  <span className="text-[#d88a1c] text-[18px] leading-none">
                    ›
                  </span>

                  <span
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                    className="text-[#374151] group-hover:text-[#08245c] transition-all"
                  >
                    {item}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* ================= CONTACT INFO ================= */}
          <div className="pl-[5px] border-r border-[#e8e2da]">

            <h3
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "22px",
                fontWeight: "700",
              }}
              className="text-[#08245c]"
            >
              Contact Info
            </h3>

            <div className="flex flex-col gap-5 mt-5">

              {/* ADDRESS */}
              <div className="flex gap-4">

                <div
                  className="w-[42px] h-[42px] rounded-full
                  bg-[#f4efe8] flex items-center justify-center shrink-0"
                >
                  <MapPin size={17} className="text-[#08245c]" />
                </div>

                <p
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "14px",
                    lineHeight: "1.7",
                    fontWeight: "500",
                  }}
                  className="text-[#4b5563]"
                >
                  K5/475, Arya Surya Enclave, Fourth Floor, Kalinga Vihar, Patrapada, Bhubaneswar, Khurda, Odisha – 751019
                </p>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-4">

                <div
                  className="w-[42px] h-[42px] rounded-full
                  bg-[#f4efe8] flex items-center justify-center shrink-0"
                >
                  <Phone size={17} className="text-[#08245c]" />
                </div>

                <p
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  className="text-[#4b5563]"
                >
                  +91 98531 11010
                </p>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-4">

                <div
                  className="w-[42px] h-[42px] rounded-full
                  bg-[#f4efe8] flex items-center justify-center shrink-0"
                >
                  <Mail size={17} className="text-[#08245c]" />
                </div>

                <p
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  className="text-[#4b5563]"
                >
                  info@ayushmanfoundation.in
                </p>
              </div>
            </div>
          </div>

          {/* ================= NEWSLETTER ================= */}
          <div className="pl-[5px]">

            <h3
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "22px",
                fontWeight: "700",
              }}
              className="text-[#08245c]"
            >
              Stay Updated
            </h3>

            <p
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                lineHeight: "1.8",
                fontWeight: "500",
              }}
              className="text-[#4b5563] mt-4"
            >
              Subscribe to our newsletter for
              updates on our programs and impact.
            </p>

            {/* ================= INPUT ================= */}
            <div className="mt-4">

              <div
                className="h-[46px] rounded-[12px]
                border border-[#e2e5ea]
                bg-white px-4
                flex items-center gap-3"
              >

                <Mail size={17} className="text-[#08245c]" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent outline-none
                  text-[14px] text-[#08245c]
                  placeholder:text-[#9ca3af]"
                />
              </div>

              <button
                className="w-full h-[46px] rounded-[12px]
                bg-[#08245c] hover:bg-[#06193d]
                transition-all duration-300
                text-white font-[700] text-[14px]
                mt-3"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="bg-[#001a57]">

        <div
          className="max-w-[1280px] mx-auto px-[45px]
          h-[58px] flex items-center justify-between"
        >

          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "13px",
              fontWeight: "600",
            }}
            className="text-white"
          >
            © 2024 Ayushman Foundation. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <Link
              href="/privacy"
              className="text-white hover:text-[#d88a1c] transition-all"
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              Privacy Policy
            </Link>

            <span className="text-white/40">|</span>

            <Link
              href="/terms"
              className="text-white hover:text-[#d88a1c] transition-all"
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

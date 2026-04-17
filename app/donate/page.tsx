import Image from "next/image"

export default function DonatePage() {
  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
        Support Our Cause ❤️
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* LEFT: International Donors */}
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-6">
             For  Donors
          </h2>

          <div className="flex justify-center mb-4">
            <Image
              src="/images/sbi.png"
              alt="SBI"
              width={80}
              height={80}
            />
          </div>

          <div className="text-sm space-y-2 text-center">
            <p><b>Bank:</b> State Bank of India</p>
            <p><b>Branch:</b> Khandagiri Branch</p>
            <p><b>Account Name:</b> AYUSHMAN FOUNDATION</p>
            <p><b>Account No:</b>44909784713</p>
            <p><b>IFSC:</b> SBIN0010927</p>
        
          </div>
        </div>

        {/* RIGHT: QR CODE ONLY */}
        <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center">
          
          <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">
            Scan & Pay 📱
          </h2>

          <Image
            src="/images/QR.jpg"   // 👉 apna QR code yaha daalo
            alt="QR Code"
            width={200}
            height={200}
            className="mb-4"
          />

          <p className="text-sm text-gray-600 text-center">
            Scan this QR code using any UPI app (GPay, PhonePe, Paytm)
          </p>

        </div>

      </div>
    </div>
  )
}

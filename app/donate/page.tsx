"use client"
import { useState } from "react"
import Image from "next/image"

export default function DonatePage() {
  const [form, setForm] = useState({})
  const [msg, setMsg] = useState("")
  const [preview, setPreview] = useState(null)

  const handleChange = (e) => {
    const { name, value, files } = e.target

    if (files) {
      const file = files[0]

      setForm({
        ...form,
        [name]: file
      })

      // Preview generate
      setPreview(URL.createObjectURL(file))
    } else {
      setForm({
        ...form,
        [name]: value
      })
    }
  }

  const handleRemoveImage = () => {
    setForm({
      ...form,
      screenshot: null
    })
    setPreview(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    Object.keys(form).forEach(key => {
      if (form[key]) {
        formData.append(key, form[key])
      }
    })

    const res = await fetch("http://localhost:5000/donate", {
      method: "POST",
      body: formData
    })

    await res.json()
    setMsg("✅ Donation Submitted! Check your email")
  }

  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Support Our Cause ❤️
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">

        {/* LEFT */}
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-2xl p-8 shadow-lg h-fit">
          <h2 className="text-xl font-semibold text-center mb-6">
            For Donors
          </h2>

          <div className="flex justify-center mb-4">
            <Image src="/images/sbi.png" alt="SBI" width={80} height={80} />
          </div>

          <div className="text-sm space-y-2 text-center">
            <p><b>Bank:</b> State Bank of India</p>
            <p><b>Branch:</b> Khandagiri Branch</p>
            <p><b>Account Name:</b> AYUSHMAN FOUNDATION</p>
            <p><b>Account No:</b> 44909784713</p>
            <p><b>IFSC:</b> SBIN0010927</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-2xl p-8 shadow-xl flex flex-col items-center">
          
          <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
            Scan & Pay 📱
          </h2>

          <Image
            src="/images/QR.jpg"
            alt="QR Code"
            width={200}
            height={200}
            className="mb-3"
          />

          <p className="text-sm text-gray-500 text-center mb-6">
            Scan using any UPI app
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="w-full space-y-4">

            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input name="name" onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Enter your name" required />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input name="email" onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Enter your email" required />
            </div>

            <div>
              <label className="text-sm font-medium">Mobile</label>
              <input name="mobile" onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Enter mobile number" required />
            </div>

            <div>
              <label className="text-sm font-medium">Address</label>
              <input name="address" onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Enter address" required />
            </div>

           <div>
  <label className="text-sm font-medium">Donation Amount</label>
  <input
    name="amount"
    value={form.amount || ""}
    onChange={handleChange}
    onBlur={(e) => {
      let val = e.target.value

      if (val) {
        // number convert + 2 decimal fix
        const formatted = parseFloat(val).toFixed(2)

        setForm({
          ...form,
          amount: formatted
        })
      }
    }}
    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
    placeholder="₹ Enter amount"
    required
  />
</div>

            {/* 📎 FILE UPLOAD */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Upload Payment Screenshot
              </label>

              {!preview ? (
                <label className="flex flex-col items-center justify-center w-full p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-400 transition">
                  <span className="text-2xl">📎</span>
                  <p className="text-sm text-gray-600 mt-2">
                    Click to upload screenshot
                  </p>
                  <p className="text-xs text-gray-400">
                    (JPG, PNG supported)
                  </p>

                  <input
                    type="file"
                    name="screenshot"
                    onChange={handleChange}
                    className="hidden"
                    required
                  />
                </label>
              ) : (
                <div className="text-center">
                  <p className="text-green-600 text-sm mb-2">
                    ✅ File Selected
                  </p>

                  <img
                    src={preview}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-lg border mx-auto"
                  />

                  <p className="text-xs text-gray-500 mt-2">
                    {form.screenshot?.name}
                  </p>

                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="mt-2 text-red-500 text-sm underline"
                  >
                    Remove / Change
                  </button>
                </div>
              )}
            </div>

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition">
              Submit Donation
            </button>
          </form>

          {msg && (
            <p className="mt-4 text-green-600 text-center font-medium">
              {msg}
            </p>
          )}
        </div>

      </div>
    </div>
  )
}

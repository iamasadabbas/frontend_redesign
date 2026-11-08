'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    companyName: '',
    companyOrg: '',
    position: '',
    phone: '',
    email: '',
    message: '',
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('FORM DATA:');
    console.log(formData);

    alert('Form submitted. Check browser console.');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <div className="text-center mb-8">
          <Image
            src="/images/betalia_logo_burgundy.png"
            alt="Betalia"
            width={50}
            height={50}
            className="mx-auto"
          />

          <h1 className="text-3xl font-bold mt-4">
            Business Sign Up
          </h1>

          <p className="text-slate-500 mt-2">
            Tell us about your business and we'll get in touch.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />

            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={formData.surname}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
          </div>

          <input
            type="text"
            name="companyName"
            required
            placeholder="Company Name *"
            value={formData.companyName}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="companyOrg"
              placeholder="Company Org"
              value={formData.companyOrg}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />

            <input
              type="text"
              name="position"
              placeholder="Position"
              value={formData.position}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
          </div>

          <textarea
            name="message"
            rows={5}
            placeholder="Tell us more about your business..."
            value={formData.message}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full"
          />

          <div className="border rounded-lg p-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 h-4 w-4"
              />

              <span className="text-sm text-slate-600">
                I confirm that Betalia may contact me regarding my inquiry and the
                information submitted in this form.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-medium"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
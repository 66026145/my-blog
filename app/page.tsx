"use client";

import React from "react";

const Portfolio = () => {
  return (
    <div className="font-sans p-8 bg-gradient-to-r from-orange-500 via-red-600 to-blue-800 text-gray-900 min-h-screen">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-2 text-white">อุจิวะ ซาสึเกะ</h1>
        <p className="text-xl italic text-gray-200">"อย่างนาย จะไปรู้อะไร"</p>
      </header>

      {/* About Section */}
      <section className="mb-12">
        {/* Profile Image */}
        <img
          src="https://cdn.readawrite.com/articles/8049/8048121/thumbnail/large.gif?2"
          alt="Profile"
          className="mx-auto rounded-full w-36 h-36 mb-6 transform hover:scale-105 transition-transform duration-300"
        />
        <h2 className="text-3xl font-semibold mb-4 text-indigo-200">แนะนำตัวแบบสั้นๆ</h2>
        <p className="text-xl text-gray-100 leading-relaxed">
          ฉันชื่อ อุจิวะ ซาสึเกะ ของที่เกลียดมีเยอะแยะ ส่วนของที่ชอบไม่มีสักอย่าง
          เป้าหมายของฉันจะไม่เป็นเพียงความฝัน มันจะต้องกลายเป็นจริง เพราะฉันจะฟื้นฟูตระกูล
          และฆ่าชายคนหนึ่งให้ได้
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-200">สกิลสุดหล่อเท่</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["เนตรสังเวียน", "เนตรวงแหวนแมนเงเคียว", "ลูกศรของอินดรา", "รินเนกัง", "จักระอันมืดมิด", "เคนจูสึสไตล์อุจิวะ"].map(
            (skill, index) => (
              <span
                key={index}
                className="bg-white px-4 py-2 rounded-lg text-xl text-center shadow-md font-medium text-indigo-700 hover:bg-indigo-300 hover:text-white transition-all"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-200">ความสำเร็จอันเกรียงไกร</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Details */}
          {/* ... */}
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-indigo-200">ข้อมูลติดต่อ</h2>
        <p className="text-gray-100 text-xl">ส่งอีเมลล์มาไม่ตอบกลับเพราะนินจาติดต่อผ่านการส่งจดหมาย</p>
        <ul className="list-none mt-4">
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:66026145@up.ac.th" className="text-indigo-200 hover:underline">
              66026145@up.ac.th
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:012-345-6789" className="text-indigo-200 hover:underline">
              012-345-6789
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Portfolio;

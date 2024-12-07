"use client";

import React from "react";

const Portfolio = () => {
  return (
    <div className="font-sans p-8 bg-gradient-to-r from-indigo-950 via-teal-500 to-violet-950 text-gray-900 min-h-screen">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-2 text-indigo-900">อุจิวะ ซาสึเกะ</h1>
        <p className="text-xl italic  text-gray-100">
        " อย่างนาย..จะไปรู้อะไร!!"        </p>
      </header>

      {/* About Section */}
<section className="mb-12">
  {/* Profile Image */}
  <img
    src="https://cdn.readawrite.com/articles/8049/8048121/thumbnail/large.gif?2"
    alt="Profile"
    className="mx-auto rounded-full w-49 h-42 mb-6 transform hover:scale-105 transition-transform duration-300"
  />
  <h2 className="text-3xl font-semibold mb-4 text-indigo-300">แนะนำตัวแบบสั้นๆ</h2>
  <p className="text-xl text-gray-100 leading-relaxed">
  ฉันชื่อ อุจิวะ ซาสึเกะ ของที่เกลียดมีเยอะแยะ ส่วนของที่ชอบไม่มีสักอย่าง เป้าหมายของฉันจะไม่เป็นเพียงความฝันมันจะต้องกลายเป็นจริง เพราะฉันจะฟื้นฟูตระกูลและฆ่าชายคนหนึ่งให้ได้
  </p>
</section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-300">สกิลสสุดหล่อเท่</h2>
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
          <h2 className="text-3xl font-semibold mb-4 text-indigo-300">ความสำเร็จอันเกรียงไกร</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-cyan-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-3 text-indigo-700">
                ยอมรับอักขระต้องสาป
              </h3>
              <p className="text-gray-700">
              เดินทางไปฝึกฝนศาสตร์มืดกับโอโรจิมารุศัตรูคนสำคัญของหมู่บ้านโคโนฮะ 
              เขายอมทิ้งทุกอย่างในชีวิตเพียงแลกกับหนทางใกล้สุดที่จะทำให้เขาทำตามเป้าหมายที่วางเอาไว้ได้
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-cyan-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-3 text-indigo-700">
                ฆ่าพี่ชาย
              </h3>
              <p className="text-gray-700">
              การ ‘ดีดหน้าผาก’ ครั้งสุดท้าย และประโยคสุดท้าย “ขอโทษนะซาสึเกะ…นี่คงเป็นครั้งสุดท้ายแล้ว” 
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-cyan-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-3 text-indigo-700">
              สงครามโลกนินจาครั้ง 4 
              </h3>
              <p className="text-gray-700">
              ผนึกกำลังร่วมกับนารูโตะและเพื่อนๆ ต่อสู้กับลาสต์บอสอย่าง อุจิวะ มาดาระ และคางูยะ
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-cyan-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-3 text-indigo-700">
                แต่งงานกับซากุระ
              </h3>
              <p className="text-gray-700">
              ปากบอกไม่ชอบ แต่แต่งกับเขาเฉย งง
              </p>
            </div>
          </div>
        </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-indigo-300">
          ข้อมูลติดต่อ
        </h2>
        <p className="text-gray-100 text-xl">
          ส่งอีเมลล์มาไม่ตอบกลับเพราะนินจาติดต่อผ่านการส่งจดหมาย
        </p>
        <ul className="list-none mt-4 text-indigo-500">
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:66026145@up.ac.th"
              className="text-indigo-200 hover:underline"
            >
              66026145@up.ac.th
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:012-345-6789"
              className="text-indigo-200 hover:underline"
            >
              012-345-6789
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Portfolio;

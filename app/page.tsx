"use client"; // บอก Next.js ว่านี่เป็น Client Component

import React, { useState } from 'react';

const Portfolio = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Python'];

  return (
    <div className="font-sans bg-gradient-to-b from-purple-700 via-purple-300 to-white text-gray-900 min-h-screen">
      {/* Header Section */}
      <header className="text-center py-10 shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4 text-white">
          My Portfolio
        </h1>
        <p className="text-xl italic text-gray-100">"Transforming ideas into reality"</p>
      </header>

      <main className="p-8">
        {/* About Section */}
        <section className="mb-16 text-center">
          {/* Profile Image */}
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="mx-auto rounded-full w-36 h-36 border-4 border-purple-500 mb-6"
          />
          <h2 className="text-3xl font-semibold mb-4">เกี่ยวกับฉัน</h2>
          <p className="text-lg leading-relaxed">
            ดิฉันนางสาว ณัฐปภัสร์ สมบูรณ์ นักศึกษาวิชา วิศวกรซอฟต์แวร์ มหาวิทยาลัยพะเยา ชั้นปีที่ 2
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-xl text-center font-medium shadow-md transition-all duration-300 ${
                  activeSkill === skill
                    ? 'bg-pink-300 text-white border-none'
                    : 'bg-purple-100 border-2 border-purple-500 text-purple-800'
                }`}
                onClick={() => setActiveSkill(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">โปรเจค</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3 text-purple-600">เว็ปไซต์ดูดวง</h3>
              <p className="text-gray-700">
                เว็ปไซต์ดูดวงที่มีหมวดหมู่การดูดวง เช่น ดูดวงประจำวัน ดูดวงเรื่องความรัก ฯลฯ
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3 text-purple-600">Maintenance UP</h3>
              <p className="text-gray-700">
                เว็ปไซต์ที่ User สามารถรายงานของที่เสียหายหรือชำรุดได้ โดยฝ่ายโสตจะเป็นผู้รับผิดชอบ
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">ข้อมูลติดต่อ</h2>
          <p className="text-lg leading-relaxed">
            หากติดต่อมาจะตอบกลับให้เร็วที่สุด ขอบคุณค่ะ
          </p>
          <ul className="mt-6 space-y-2">
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:66026145@up.ac.th" className="text-purple-600 hover:underline">
                66026145@up.ac.th
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{' '}
              <a href="tel:012-345-6789" className="text-purple-600 hover:underline">
                012-345-6789
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="text-center py-6 bg-purple-700 text-white">
        <p>© 2024 ณัฐปภัสร์ สมบูรณ์ | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Portfolio;

"use client";

import React from "react";

const Portfolio = () => {
  return (
    <div className="font-sans p-8 bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-200 text-gray-900 min-h-screen">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-2 text-white">My Portfolio</h1>
        <p className="text-lg italic text-gray-200">
          "Building creative solutions for modern problems"
        </p>
      </header>

      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-700">
          เกี่ยวกับฉัน
        </h2>
        <p className="text-gray-100 leading-relaxed">
          ดิฉันนางสาว ณัฐปภัสร์ สมบูรณ์ นักศึกษาวิชา วิศวกรซอฟต์แวร์
          มหาวิทยาลัยพะเยา ชั้นปีที่ 2
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-700">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["HTML", "CSS", "JavaScript", "React", "Next.js", "Python"].map(
            (skill, index) => (
              <span
                key={index}
                className="bg-white px-4 py-2 rounded-lg text-center shadow-md font-medium text-indigo-700 hover:bg-indigo-300 hover:text-white transition-all"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-700">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2 text-indigo-600">
              Project 1: เว็ปไซต์ดูดวง
            </h3>
            <p className="text-gray-700">
              เว็ปไซต์ดูดวงที่จะมีหมวดหมู่การดูดวงตามที่ User สนใจ เช่น
              ดูดวงประจำวัน ดูดวงเรื่องความรัก ฯลฯ
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2 text-indigo-600">
              Project 2: Maintenance UP
            </h3>
            <p className="text-gray-700">
              เว็ปไซต์ที่ User สามารถรายงานของที่เสียหายหรือชำรุดได้
              โดยฝ่ายโสตจะเป็นผู้รับผิดชอบ
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-indigo-700">
          ข้อมูลติดต่อ
        </h2>
        <p className="text-gray-100">
          หากติดต่อมาจะตอบกลับให้เร็วที่สุด ขอบคุณค่ะ
        </p>
        <ul className="list-none mt-4">
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

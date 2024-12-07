import React from 'react';

const Portfolio = () => {
  return (
    <div className="font-sans p-8 bg-gradient-to-r from-indigo-500 ... text-gray-900 min-h-screen">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">My Portfolio</h1>
      </header>

      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">เกี่ยวกับฉัน</h2>
        <p className="text-gray-700 leading-relaxed">
          ดิฉันนางสาว ณัฐปภัสร์ สมบูรณ์ นักศึกษาวิชา วิศวกรซอฟต์แวร์ มหาวิทยาลัยพะเยา ชั้นปีที่2 
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <span className="bg-gray-100 px-4 py-2 rounded-lg text-center shadow-sm">HTML</span>
          <span className="bg-gray-100 px-4 py-2 rounded-lg text-center shadow-sm">CSS</span>
          <span className="bg-gray-100 px-4 py-2 rounded-lg text-center shadow-sm">JavaScript</span>
          <span className="bg-gray-100 px-4 py-2 rounded-lg text-center shadow-sm">React</span>
          <span className="bg-gray-100 px-4 py-2 rounded-lg text-center shadow-sm">Next.js</span>
          <span className="bg-gray-100 px-4 py-2 rounded-lg text-center shadow-sm">Python</span>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Project 1:เว็ปไซต์ดูดวง</h3>
            <p className="text-gray-700">
             เว็ปไซต์ดูดวงที่จะมีหมวดหมู่การดูดวงตามที่ User สนใจ เช่น ดูดวงประจำวันดูดวงเรื่องความรักเป็นต้น
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Project 2: Maintenance UP</h3>
            <p className="text-gray-700">
              เว็ปไซต์ที่๊ User  สามารถรายงานของที่เสียหายหรือชำรุดได้ โดยมีขอบเขตคือของที่รายงานฝ่ายโสตจะเป็นผู้รับผิดชอบ
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">ข้อมูลติดต่อ</h2>
        <p className="text-gray-700">
          หากติดต่อมาจะตอบกลับให้เร็วที่สุด ขอบคุณค่ะ
        </p>
        <ul className="list-none mt-4">
          <li><strong>Email:</strong> 66026145@up.ac.th</li>
          <li><strong>Phone:</strong> 012-345-6789</li>
        </ul>
      </section>
    </div>
  );
};

export default Portfolio;

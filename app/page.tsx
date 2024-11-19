// app/resume/page.tsx

import React from 'react';

const Resume = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>ประวัติย่อ</h1>
        <p>ข้อมูลเกี่ยวกับฉัน</p>
      </header>
      
      <section style={{ marginBottom: '20px' }}>
        <h2>ข้อมูลส่วนตัว</h2>
        <ul>
          <li><strong>ชื่อ:</strong> ชื่อ นามสกุล</li>
          <li><strong>อายุ:</strong> 30 ปี</li>
          <li><strong>อีเมล:</strong> example@example.com</li>
          <li><strong>เบอร์โทร:</strong> 012-345-6789</li>
        </ul>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>การศึกษา</h2>
        <ul>
          <li><strong>ปริญญาตรี:</strong> คณะวิศวกรรมศาสตร์ มหาวิทยาลัย ABC (2555-2559)</li>
          <li><strong>ปริญญาโท:</strong> คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัย XYZ (2560-2562)</li>
        </ul>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>ประสบการณ์การทำงาน</h2>
        <ul>
          <li>
            <strong>บริษัท A</strong> (2562-2565) - นักพัฒนาเว็บ
            <p>พัฒนาและดูแลระบบเว็บไซต์หลักของบริษัท</p>
          </li>
          <li>
            <strong>บริษัท B</strong> (2565-ปัจจุบัน) - วิศวกรซอฟต์แวร์
            <p>พัฒนาแอปพลิเคชันมือถือและระบบหลังบ้าน</p>
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>ทักษะ</h2>
        <ul>
          <li>การพัฒนาเว็บไซต์ (HTML, CSS, JavaScript, React, Next.js)</li>
          <li>การเขียนโปรแกรม (Python, Java, C++)</li>
          <li>ฐานข้อมูล (MySQL, PostgreSQL, MongoDB)</li>
          <li>เครื่องมือ DevOps (Docker, Kubernetes)</li>
        </ul>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>โครงการที่ทำ</h2>
        <ul>
          <li><strong>โปรเจกต์ 1:</strong> ระบบจัดการข้อมูลลูกค้าออนไลน์</li>
          <li><strong>โปรเจกต์ 2:</strong> แอปพลิเคชันติดตามการออกกำลังกาย</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;

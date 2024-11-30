import React from 'react';

const Portfolio = () => {
  return (
    <div className="font-sans p-8 bg-gray-50 text-gray-900 min-h-screen">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">My Portfolio</h1>
      </header>

      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I am a passionate web developer with a strong background in software engineering. I enjoy creating efficient
          and beautiful web applications to solve real-world problems.
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
            <h3 className="text-xl font-bold mb-2">Project 1: CRM System</h3>
            <p className="text-gray-700">
              A web-based customer relationship management system designed to streamline business operations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Project 2: Fitness Tracker App</h3>
            <p className="text-gray-700">
              A mobile application to track workouts and monitor fitness progress over time.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700">
          Feel free to reach out for collaborations or any inquiries.
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

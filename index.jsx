import React from "react";

// AcademicProfile.jsx
// TailwindCSS required for styling. Replace image paths with your own.

const DEFAULT_PUBLICATIONS = [
  {
    title: "Deep Learning Approaches in Cross-Border Trade Automation",
    venue: "International Journal of AI Systems",
    year: 2024,
    link: "#",
    image: "/images/pub1.jpg",
    authors: "A. Sho, B. Example",
  },
  {
    title: "Blockchain Security Framework for Customs Clearance Workflow",
    venue: "Journal of Secure Systems",
    year: 2023,
    link: "#",
    image: "/images/pub2.jpg",
    authors: "A. Sho, C. Researcher",
  },
];

export default function AcademicProfile({
  name = "Your Name",
  title = "Your Title / Department",
  photoUrl = "/images/your-photo.jpg",
  bio = "A concise academic bio. Mention research interests, affiliation, and a short summary of work.",
  publications = [],
  email = "you@example.com",
  website = "https://yourwebsite.example",
  cvLink = "#",
}) {
  const pubs = publications && publications.length ? publications : DEFAULT_PUBLICATIONS;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col items-center md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <div className="flex-shrink-0">
              <img
                src={photoUrl}
                alt={`${name} photo`}
                className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-lg border-2 border-gray-200 shadow-sm"
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">{name}</h1>
              <p className="text-sm text-gray-600">{title}</p>
            </div>
          </div>

          <div className="mt-4 md:mt-0 flex space-x-3">
            <a
              href={cvLink}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Download CV
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <section className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-3">About</h2>
            <p className="text-gray-700 leading-relaxed">{bio}</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Website</h3>
                <a href={website} className="text-blue-600 break-all">{website}</a>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                <a href={`mailto:${email}`} className="text-blue-600">{email}</a>
              </div>
            </div>
          </div>

          <div id="publications" className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Selected Publications</h2>

            <div className="space-y-4">
              {pubs.map((p, idx) => (
                <article
                  key={idx}
                  className="flex flex-col sm:flex-row items-start bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow transition-colors"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />

                  <div className="ml-0 sm:ml-4 mt-3 sm:mt-0 flex-1">
                    <h3 className="font-semibold text-gray-800 text-sm md:text-base">{p.title}</h3>
                    <p className="text-sm text-gray-600">{p.authors}</p>
                    <p className="text-sm text-gray-500 mt-1">{p.venue} — {p.year}</p>

                    <div className="mt-2 flex flex-wrap gap-2">
                      <a href={p.link} className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full hover:bg-blue-700">View Paper</a>
                      <a href="#" className="px-3 py-1 bg-green-500 text-white text-xs rounded-full hover:bg-green-600">Video</a>
                      <a href="#" className="px-3 py-1 bg-purple-500 text-white text-xs rounded-full hover:bg-purple-600">Slides</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Research & Teaching</h2>
            <p className="text-gray-700">Briefly list research interests, courses taught, ongoing projects or grants here. Use bullet lists for clarity.</p>
            <ul className="mt-3 list-disc list-inside text-gray-700">
              <li>Research interest 1</li>
              <li>Research interest 2</li>
              <li>Course: Example Course — Semester</li>
            </ul>
          </div>
        </section>

        <aside className="md:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li><a href="#publications" className="text-blue-600">Publications</a></li>
              <li><a href="#teaching" className="text-blue-600">Teaching</a></li>
              <li><a href="#projects" className="text-blue-600">Projects</a></li>
              <li><a href="#contact" className="text-blue-600">Contact</a></li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold">Follow</h3>
            <div className="mt-3 flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-gray-800">Twitter</a>
              <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-800">LinkedIn</a>
              <a href="#" aria-label="Google Scholar" className="text-gray-600 hover:text-gray-800">Google Scholar</a>
            </div>
          </div>

        </aside>
      </main>

      <footer className="mt-12 py-8 bg-white border-t">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {name} — All rights reserved.
        </div>
      </footer>
    </div>
  );
}
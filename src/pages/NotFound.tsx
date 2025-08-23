import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-sky-50 p-6">
      <div className="max-w-4xl w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 grid gap-6 md:grid-cols-2 items-center">
        <section className="text-center md:text-left">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-slate-800">404</h1>
          <p className="mt-2 text-lg text-slate-600">Page Not Found — The page you are looking for doesn't exist.</p>

          <p className="mt-4 text-slate-500">Maybe the link is broken or the page has been moved.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
            <Link
              to="/"
              className="inline-block px-5 py-2 rounded-lg font-medium text-white bg-sky-600 hover:bg-sky-700 transition"
            >
              Go back home
            </Link>

            <Link
              to="/"
              className="inline-block px-4 py-2 rounded-lg font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition"
            >
              Contact support
            </Link>
          </div>

          <small className="block mt-4 text-xs text-slate-400">If you think this is an error, try refreshing or contact support.</small>
        </section>

        <section className="flex items-center justify-center">
          {/* playful SVG illustration */}
          <svg
            viewBox="0 0 600 400"
            width="100%"
            height="100%"
            className="max-w-xs md:max-w-md"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#7dd3fc" />
                <stop offset="1" stopColor="#60a5fa" />
              </linearGradient>
            </defs>

            <rect x="20" y="60" width="520" height="250" rx="20" fill="#f8fafc" stroke="#e2e8f0" />

            <g className="animate-[float_4s_ease-in-out_infinite]">
              <circle cx="160" cy="170" r="36" fill="url(#g1)" opacity="0.95" />
              <path d="M200 140c15-30 55-40 90-30" stroke="#c7eaff" strokeWidth="6" fill="none" strokeLinecap="round" />

              <g transform="translate(330 200)">
                <circle r="28" fill="#fff" stroke="#cbd5e1" />
                <text x="-10" y="8" fontSize="18" fontWeight="700" fill="#334155">404</text>
              </g>
            </g>

            <text x="60" y="320" fontSize="14" fill="#94a3b8">Helpful tip: check the URL or return home.</text>
          </svg>
        </section>
      </div>
    </main>
  );
}

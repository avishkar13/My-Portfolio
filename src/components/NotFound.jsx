import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a1f2c] text-white">
    <h1 className="text-6xl font-bold text-cyan-400 mb-4">404</h1>
    <p className="text-2xl mb-8 font-mono">Page Not Found</p>
    <Link to="/" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300">
      Go Home
    </Link>
  </div>
);

export default NotFound;
 
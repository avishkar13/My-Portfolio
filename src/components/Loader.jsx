const Loader = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a1f2c]/90 backdrop-blur-lg">
    <div className="w-24 h-24 border-8 border-cyan-400 border-t-purple-500 border-b-blue-500 rounded-full animate-spin shadow-[0_0_40px_10px_rgba(6,182,212,0.5)]"></div>
    {/* <span className="absolute bottom-16 text-cyan-300 font-mono text-xl animate-pulse drop-shadow-lg">Loading...</span> */}
  </div>
);

export default Loader;

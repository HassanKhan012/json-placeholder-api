import React from 'react';

const Navbar = () => {
  return (
    <nav className="text-black">
      <div className="container mx-auto flex items-center justify-between py-3 px-36">
        {/* Logo Section */}
        <div className="text-lg font-bold">
          <a href="/" className="hover:underline">Muhammad Hassan Khan</a>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <a href="/guide" className="hover:underline">Guide</a>
          <a href="/sponsor" className="hover:underline">Sponsor this project</a>
          <a href="/blog" className="hover:underline">Blog</a>
          <a href="/json-server" className="hover:underline">My JSON Server</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

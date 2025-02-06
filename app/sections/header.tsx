"use client"

export function Header() {
    return (
        <div className="flex justify-center items-center relative top-3">
            <nav className="flex gap-1 p-0.5 rounded-fulls backdrop-blur-sm">
                <a href="#" className="nav-item">
                    Activities
                </a>
                <a href="#" className="nav-item">
                    New INFTs
                </a>
                <a href="#" className="nav-item">
                    Marketplace
                </a>
                <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
                    Connect
                </a>
            </nav>
        </div>
    );
}
export function Creators() {
    return (
        <div className="bg-[#5A58E4] p-6 rounded-xl mt-8 mx-4 max-w-7xl shadow-[0_0_20px_rgba(90,88,228,0.15)] px-4 sm:px-6 lg:px-8 sm:mx-auto">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                    <span className="text-indigo-500">🚀</span>
                    <h1 className="text-white text-2xl font-semibold">Top creators of this week</h1>
                </div>
                <a href="#" className="text-white-500 hover:text-indigo-400">See more</a>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-4 md:justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img src="/pandabear.jpg" alt="PandaBear" className="w-full h-full object-cover"/>
                    </div>
                    <div>
                        <h3 className="text-white font-medium">PandaBear</h3>
                        <p className="text-gray-400 text-sm">Created 128 NFT&apos;s</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img src="/farworld.jpg" alt="Farworld" className="w-full h-full object-cover"/>
                    </div>
                    <div>
                        <h3 className="text-white font-medium">Farworld</h3>
                        <p className="text-gray-400 text-sm">Created 128 NFT&apos;s</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img src="/basilian.jpg" alt="Basilian" className="w-full h-full object-cover"/>
                    </div>
                    <div>
                        <h3 className="text-white font-medium">Basilian</h3>
                        <p className="text-gray-400 text-sm">Created 128 NFT&apos;s</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img src="/captain-morgan.jpg" alt="Captain & Morgan" className="w-full h-full object-cover"/>
                    </div>
                    <div>
                        <h3 className="text-white font-medium">Captain & Morgan</h3>
                        <p className="text-gray-400 text-sm">Created 128 NFT&apos;s</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img src="/karafuru.jpg" alt="Karafuru" className="w-full h-full object-cover"/>
                    </div>
                    <div>
                        <h3 className="text-white font-medium">Karafuru</h3>
                        <p className="text-gray-400 text-sm">Created 128 NFT&apos;s</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
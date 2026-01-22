export default function Footer() {
  return (
    <footer className="bg-black text-[#f4eec7] border-t border-white/10 py-20 px-8">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-md">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-white">Kopi <span className="text-amber-500">Kenangan</span></h2>
            <p className="text-sm md:text-lg opacity-80 text-white">
                Mengangkat kopi menjadi sebuah karya seni. Bersumber secara bertanggung jawab, disangrai dengan sepenuh hati, disajikan dengan rasa bangga.
            </p>
        </div>

        <div className="grid grid-cols-2 gap-16 text-sm md:text-lg">
            <div>
                <h3 className="font-bold mb-4 uppercase tracking-widest text-white">Explore</h3>
                <ul className="space-y-2 text-white">
                    <li className="hover:text-amber-500 cursor-pointer">Coffee Shop</li>
                    <li className="hover:text-amber-500 cursor-pointer">Subscriptions</li>
                    <li className="hover:text-amber-500 cursor-pointer">Locations</li>
                    <li className="hover:text-amber-500 cursor-pointer">About Us</li>
                </ul>
            </div>
            <div>
                 <h3 className="font-bold mb-4 uppercase tracking-widest text-white">Social</h3>
                 <ul className="space-y-2 text-white">
                    <li>
                <a 
                    href="https://www.instagram.com/kopikenangan.id?igsh=dWN5Mmt1eG9tM2M1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-amber-500 transition-colors cursor-pointer"
                >
                    Instagram
                </a>
                  </li>
                    <li>
                <a 
                    href="https://vm.tiktok.com/ZSHo7RMBonvau-Ktn01/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-amber-500 transition-colors cursor-pointer"
                >
                    Tiktok
                </a>
                    </li>
                    <li className="hover:text-amber-500 cursor-pointer">Facebook</li>
                    <li>
                <a 
                    href="https://github.com/vyzz-xz/kopikenangan" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-amber-500 transition-colors cursor-pointer"
                >
                    Github
                </a>
                  </li>
                </ul>
            </div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto mt-20 pt-8 flex justify-between text-xs md:text-sm text-white/50">
         <p>&copy; {new Date().getFullYear()} Kopi Kenangan</p>
         <p>Designed by Muhamad Hafiz</p>
      </div>
    </footer>
  );
}

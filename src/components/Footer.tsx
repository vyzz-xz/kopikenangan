export default function Footer() {
  return (
    <footer className="bg-[#1a1110] text-[#f4eec7] py-20 px-8">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-md">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-white">Kopi Kenangan</h2>
            <p className="text-sm md:text-lg opacity-80 text-white">
                Mengangkat kopi menjadi sebuah karya seni. Bersumber secara bertanggung jawab, disangrai dengan sepenuh hati, disajikan dengan rasa bangga.
            </p>
        </div>

        <div className="grid grid-cols-2 gap-16 text-sm md:text-lg">
            <div>
                <h3 className="font-bold mb-4 uppercase tracking-widest text-white">Explore</h3>
                <ul className="space-y-2 text-white">
                    <li className="hover:opacity-100 cursor-pointer">Shop Coffee</li>
                    <li className="hover:opacity-100 cursor-pointer">Subscriptions</li>
                    <li className="hover:opacity-100 cursor-pointer">Locations</li>
                    <li className="hover:opacity-100 cursor-pointer">About Us</li>
                </ul>
            </div>
            <div>
                 <h3 className="font-bold mb-4 uppercase tracking-widest text-white">Social</h3>
                 <ul className="space-y-2 text-white">
                    <li className="hover:opacity-100 cursor-pointer">Instagram</li>
                    <li className="hover:opacity-100 cursor-pointer">Twitter</li>
                    <li className="hover:opacity-100 cursor-pointer">Facebook</li>
                </ul>
            </div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto mt-20 border-t border-[#c29e75]/20 pt-8 flex justify-between text-xs md:text-sm text-white/50">
         <p>© 2026 Kopi Kenangan. All rights reserved.</p>
         <p>Designed by Muhamad Hafiz</p>
      </div>
    </footer>
  );
}

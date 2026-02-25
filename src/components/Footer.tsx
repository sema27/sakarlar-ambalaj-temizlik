import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xl font-bold text-white">ŞAKARLAR</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              1999 yılında kurulan firmamız ambalaj ve temizlik sektöründe kısa sürede önde gelen firmalar arasında yerini almıştır. Müşteri memnuniyetini her zaman önceliğimizdir.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Sitemizi Keşfet</h3>
            <ul className="space-y-2">
              <li><Link to="/hizmetlerimiz" className="text-sm hover:text-blue-400 transition-colors">Hizmet Alanlarımız</Link></li>
              <li><a href="https://www.mevax.com.tr/b2b" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-400 transition-colors">Ürünler</a></li>
              <li><Link to="/subeler" className="text-sm hover:text-blue-400 transition-colors">Şubeler</Link></li>
              <li><Link to="/iletisim" className="text-sm hover:text-blue-400 transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">İletişim Bilgileri</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">+90 (264) 281 65 63</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@sakarlar.com.tr" className="text-sm hover:text-blue-400 transition-colors">info@sakarlar.com.tr</a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Erenler Mahallesi, Murat Soğancıoğlu Caddesi, 1246 Sokak, No:2 Erenler/SAKARYA</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Sosyal Medya</h3>
            <p className="text-sm text-gray-400 mb-4">Bizi sosyal medya hesaplarımızdan takip edin!</p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/sakarlar.ambalajtemizlik/?locale=tr_TR" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/sakarlarambalajvetemizlik/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.comhttps://www.facebook.com/sakarlar.com.tr/videos/herkese-iyi-haftalar-dilerizserdivan-%C5%9Fubemize-daha-%C3%B6nce-gelmediyseniz-haydi-%C5%9F%C3%B6yl/333253794984110/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/%C5%9Fakarlar-ambalaj-ve-temi%CC%87zli%CC%87k-%C3%BCr%C3%BCnleri%CC%87/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-8">
          <div className="text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Şakarlar Ambalaj ve Temizlik Ürünleri. Tüm hakları Sema Nur Şakar tarafından saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

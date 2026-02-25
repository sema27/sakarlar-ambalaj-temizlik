import { ArrowRight, Package, ShoppingCart, Building2, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  const statistics = [
    { icon: <Package className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />, value: '300+', label: 'Marka' },
    { icon: <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />, value: '24.000+', label: 'Ürün' },
    { icon: <Building2 className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />, value: '1.100+', label: 'Kurumsal Müşteri' },
    { icon: <Users className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />, value: '11.900+', label: 'Bireysel Müşteri' },
  ];

  const services = [
    {
      icon: <Package className="w-7 h-7 text-blue-600 group-hover:text-white" />,
      title: 'Ambalaj',
      description: 'Karton kutular, plastik poşetler, streç filmler ve daha fazlası.'
    },
    {
      icon: <ShoppingCart className="w-7 h-7 text-blue-600 group-hover:text-white" />,
      title: 'Temizlik',
      description: 'Hijyen ürünleri, kağıt grupları ve temizlik ekipmanları.'
    },
    {
      icon: <Building2 className="w-7 h-7 text-blue-600 group-hover:text-white" />,
      title: 'Endüstriyel',
      description: 'Ağır deterjanlar, çözücüler ve genel amaçlı temizleyiciler.'
    },
    {
      icon: <Users className="w-7 h-7 text-blue-600 group-hover:text-white" />,
      title: 'Süs ve Party',
      description: 'Balonlar, parti malzemeleri ve süsleme ürünleri.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  1999 yılından bu yana güvenilir hizmet
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hedefimiz Memnuniyetiniz
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ambalaj ve temizlik sektöründe kısa sürede önde gelen firmalar arasında yerini almış, müşteri memnuniyetini ilke edinmiş bir kuruluşuz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/iletisim">
                  <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium text-lg shadow-lg flex items-center justify-center">
                    Bize Ulaşın <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </Link>
                <Link to="/hizmetlerimiz">
                  <button className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-md font-medium text-lg">
                    Hizmetlerimiz
                  </button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform rotate-3 opacity-10"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-4 md:p-8">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                  alt="Ambalaj ve Temizlik Ürünleri"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white px-6 py-4 rounded-2xl shadow-xl hidden md:block">
                  <p className="text-sm font-semibold">25+ Yıllık Deneyim</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">{stat.value}</h3>
                <p className="text-blue-100 text-xs md:text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Hizmetlerimiz</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Sunduğumuz Çözümler</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ambalaj ve temizlik sektöründe geniş ürün yelpazesi ile müşterilerimize hizmet veriyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="p-6 rounded-xl border-2 border-gray-100 hover:border-blue-600 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/hizmetlerimiz">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium shadow-lg transition-all duration-200">
                Tüm Hizmetleri İncele
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Neden Bizi Seçmelisiniz</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">Güvenilir İş Ortağınız</h2>
              <p className="text-lg text-gray-600 mb-8">
                25 yılı aşkın tecrübemizle ambalaj ve temizlik sektöründe kaliteli hizmet sunuyoruz.
              </p>
              <div className="space-y-4">
                {[
                  'Geniş ürün yelpazesi',
                  'Zamanında teslimat garantisi',
                  'Uygun fiyat politikası',
                  'Profesyonel müşteri hizmetleri',
                  'Kaliteli ve güvenilir markalar',
                  '13.000+ memnun müşteri'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/hakkimizda">
                  <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-all duration-200">
                    Hakkımızda Daha Fazla
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform -rotate-3 opacity-10"></div>
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80"
                alt="Kalite ve Güven"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sizin İçin Buradayız</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ambalaj ve temizlik ürünleri ihtiyaçlarınız için hemen bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/iletisim">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-md font-medium shadow-lg transition-all duration-200">
                İletişime Geçin
              </button>
            </Link>
            <a href="tel:+902642816563">
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-md font-medium transition-all duration-200">
                Hemen Arayın
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

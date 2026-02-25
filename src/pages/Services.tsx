import { Package, ShoppingCart, Factory, PartyPopper, Hospital, Building2, School, Coffee } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const productCategories = [
    {
      icon: <Package className="w-8 h-8 text-blue-600 group-hover:text-white" />,
      title: 'Ambalaj',
      description: 'Karton kutular, plastik poşetler, streç filmler, hava kabarcıklı naylonlar, köpükler, kağıt torbalar, metal kutular, cam şişeler.'
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-blue-600 group-hover:text-white" />,
      title: 'Temizlik',
      description: 'Saplı süpürge ve faraş, kova, toz fırçası, paspas, çöp kovası, çöp torbası, kağıt havlu, tuvalet kağıdı.'
    },
    {
      icon: <Factory className="w-8 h-8 text-blue-600 group-hover:text-white" />,
      title: 'Endüstriyel',
      description: 'Ağır deterjan, çözücüler, kireç sökücüler, yağ dağıtıcılar, asit çözücüler, genel amaçlı temizleyiciler.'
    },
    {
      icon: <PartyPopper className="w-8 h-8 text-blue-600 group-hover:text-white" />,
      title: 'Süs ve Party',
      description: 'Tabak, bardak, peçete, şapka, duvara asmak için şerit bayrak, balon ve masa örtüsü.'
    }
  ];

  const sectors = [
    {
      icon: <Hospital className="w-7 h-7 text-blue-600 group-hover:text-white" />,
      title: 'Sağlık Sektörü',
      description: 'Hastane, eczane ve rehabilitasyon merkezleri için hijyen standartlarına uygun çözümler.'
    },
    {
      icon: <Building2 className="w-7 h-7 text-blue-600 group-hover:text-white" />,
      title: 'Devlet Kurumları',
      description: 'Kamu kurum ve kuruluşları için dayanıklı ve güvenilir temizlik malzemeleri.'
    },
    {
      icon: <School className="w-7 h-7 text-blue-600 group-hover:text-white" />,
      title: 'Eğitim Kurumları',
      description: 'Anaokulu, okul ve yurtlar için sağlıklı ve hijyenik ortamlar sağlayan ürünler.'
    },
    {
      icon: <Coffee className="w-7 h-7 text-blue-600 group-hover:text-white" />,
      title: 'Horeca',
      description: 'Restoran, kafe ve oteller için gıda güvenliğine uygun ambalaj ve temizlik ürünleri.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white text-center">
        <div className="container mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Hizmet Alanlarımız
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ambalaj ve temizlik sektöründe her ihtiyaca uygun çözümler sunuyoruz
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Çözümlerimiz</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Ürün Kategorilerimiz</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 rounded-xl border-2 border-gray-100 hover:border-blue-600 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{category.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Sektörler</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Hizmet Verdiğimiz Sektörler</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-white border-2 border-gray-100 hover:border-blue-600 transition-all duration-300 group flex items-start space-x-6"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  {sector.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{sector.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{sector.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

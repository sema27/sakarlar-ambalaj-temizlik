import { Award, Target } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const statistics = [
    { value: '300+', label: 'Marka' },
    { value: '24.000+', label: 'Ürün' },
    { value: '1.100+', label: 'Kurumsal Müşteri' },
    { value: '11.900+', label: 'Bireysel Müşteri' },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Hakkımızda
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">1999'dan beri sektörde öncü firma</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Hikayemiz</span>
              <h2 className="text-4xl font-bold text-gray-900">Biz Kimiz?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                1999 yılında kurulan firmamız ambalaj ve temizlik sektöründe kısa sürede önde gelen firmalar arasında yerini almıştır. Müşteri memnuniyetini, müşteriye sorunsuz hizmet anlayışını kendine ilke bilip istek ve siparişlerini zamanında teslim etmeyi prensip edinmiştir.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ambalaj ve temizlik sektöründe müşteriye sorunsuz şekilde istek ve siparişleri zamanında teslim etmeyi amaçlamaktayız. 25 yılı aşkın tecrübemizle 300'den fazla markanın ürünlerini, 24.000'in üzerinde ürün çeşidiyle müşterilerimizin hizmetine sunuyoruz.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border-l-4 border-l-blue-600 bg-blue-50 shadow-sm">
                  <Award className="w-8 h-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Kalite</h4>
                  <p className="text-sm text-gray-600">En kaliteli markalar</p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-l-blue-600 bg-blue-50 shadow-sm">
                  <Target className="w-8 h-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Hedef</h4>
                  <p className="text-sm text-gray-600">Müşteri memnuniyeti</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform rotate-3 opacity-10"></div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Şakarlar Ambalaj Ekibi"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rakamlarla Şakarlar</h2>
            <p className="text-xl text-blue-100">Büyüyen başarı hikayemizin göstergeleri</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-5xl font-bold mb-2">{stat.value}</h3>
                <p className="text-blue-100 text-lg font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

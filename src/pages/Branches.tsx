import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Branches() {
  const branches = [
    {
      name: 'Merkez Şube',
      address: 'Erenler Mahallesi, Murat Soğancıoğlu Caddesi, 1246 Sokak, No:2 Erenler/SAKARYA',
      phone: '+90 (264) 281 65 63',
      hours: '08:30 - 19:00',
      mapUrl: 'https://www.google.com/maps?hl=tr&gl=tr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x14ccb36d295deff5:0x20a35db3ffa58831'
    },
    {
      name: 'Serdivan Şube',
      address: 'İstiklal, Muhsin Yazıcıoğlu Blv. D:3 No:3, 54500 Serdivan/Sakarya',
      phone: '+90 (264) 281 65 63',
      hours: '09:00 - 19:00',
      mapUrl: 'https://www.google.com/maps?hl=tr&gl=tr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x14ccb31c27a11c03:0x9dec63e8030dc246'
    },
    {
      name: 'Katlı Şube',
      address: 'Semerciler, Hal Cd. No:30/B, 54100 Adapazarı/Sakarya',
      phone: '+90 (264) 281 65 63',
      hours: '08:30 - 20:00',
      mapUrl: 'https://www.google.com/maps?hl=tr&gl=tr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x14ccb32c07046637:0x4c67444953baa7d1'
    },
    {
      name: 'Tozlu Şube',
      address: 'Orta Mah., Çeşme Meydanı Cd. No:74, 54100 Adapazarı/Sakarya',
      phone: '+90 (264) 281 65 63',
      hours: '08:30 - 19:00',
      mapUrl: 'https://www.google.com/maps?hl=tr&gl=tr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x409df628add13325:0x2a89850ddc488ad7'
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
            Şubelerimiz
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Size en yakın hizmet noktamızı bulun
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-xl border-2 border-gray-100 hover:border-blue-600 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{branch.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <p className="text-gray-600">{branch.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <a href={`tel:${branch.phone}`} className="text-gray-600 hover:text-blue-600">{branch.phone}</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <p className="text-gray-600">{branch.hours}</p>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition-colors"
                  >
                    Yol Tarifi Al
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

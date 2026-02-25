import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
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
            İletişim
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Size nasıl yardımcı olabiliriz? Bizimle iletişime geçin
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-8 rounded-xl border-2 border-gray-100 hover:border-blue-600 transition-all duration-300 text-center group">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <Phone className="w-7 h-7 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Telefon</h3>
              <a href="tel:+902642816563" className="text-gray-600 hover:text-blue-600">+90 (264) 281 65 63</a>
            </div>

            <div className="p-8 rounded-xl border-2 border-gray-100 hover:border-blue-600 transition-all duration-300 text-center group">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <Mail className="w-7 h-7 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">E-posta</h3>
              <a href="mailto:info@sakarlar.com.tr" className="text-gray-600 hover:text-blue-600">info@sakarlar.com.tr</a>
            </div>

            <div className="p-8 rounded-xl border-2 border-gray-100 hover:border-blue-600 transition-all duration-300 text-center group">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <MapPin className="w-7 h-7 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Adres</h3>
              <p className="text-sm text-gray-600">Erenler Mahallesi, Murat Soğancıoğlu Caddesi, 1246 Sokak, No:2 Erenler/SAKARYA</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mesaj Gönderin</h2>
              <div className="bg-white p-8 rounded-xl border-2 border-gray-100 shadow-lg">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad *</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-posta *</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Konu *</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız *</label>
                    <textarea rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600 resize-none" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-md font-bold text-lg shadow-lg flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" /> Mesajı Gönder
                  </button>
                </form>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Konumumuz</h2>
              <div className="rounded-xl border-2 border-gray-100 overflow-hidden shadow-lg h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1511.2974704960877!2d30.413461492894033!3d40.74893768074519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccb36d295deff5%3A0x20a35db3ffa58831!2zxZ5BS0FSTEFSIEFNQkFMQUogVkUgVEVNxLBaTMSwSyDDnFLDnE4uIFNBTi4gVMSwQy4gTFRELiDFnlTEsC4!5e0!3m2!1str!2str!4v1699436777736!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

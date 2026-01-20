"use client"

import Image from "next/image"
import {
  Scissors,
  User,
  Palette,
  Sparkles,
  MapPin,
  Clock,
  Phone,
  Instagram,
} from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const services = [
    {
      name: "Corte de Pelo",
      icon: <Scissors className="w-8 h-8" />,
      desc: "Estilos clásicos y modernos",
    },
    {
      name: "Barba",
      icon: <User className="w-8 h-8" />,
      desc: "Afeitado y arreglo profesional",
    },
    {
      name: "Color",
      icon: <Palette className="w-8 h-8" />,
      desc: "Tintes y mechas de alta calidad",
    },
    {
      name: "Tratamientos",
      icon: <Sparkles className="w-8 h-8" />,
      desc: "Hidratación y cuidado capilar",
    },
  ]

  const galleryImages = [
    "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593702295094-aea8c5c13d99?q=80&w=800&auto=format&fit=crop",
  ]

  const schedule = [
    { day: "Lunes - Viernes", hours: "10:00 - 14:00 | 17:00 - 21:00" },
    { day: "Sábado - Domingo", hours: "Cerrado" },
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  }

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1920&auto=format&fit=crop"
          alt="Rafa Moles Estilistas Salon"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
          >
            Rafa Moles Estilistas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl font-light max-w-2xl"
          >
            Tu estilo, nuestra pasión en Armilla
          </motion.p>
          <motion.a
            href="tel:+34958000000"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors"
          >
            Reserva tu cita
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-wider text-neutral-800">
            Sobre Nosotros
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            En Rafa Moles Estilistas, creemos que cada corte cuenta una
            historia. Con años de trayectoria perfeccionando el arte del
            estilismo en Armilla, nuestra misión es resaltar tu personalidad a
            través de un servicio personalizado y de vanguardia. Rafa y su
            equipo combinan técnicas tradicionales con las últimas tendencias
            para ofrecerte una experiencia única.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-neutral-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-wider text-neutral-800">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center"
              >
                <div className="p-4 bg-neutral-900 text-white rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-neutral-500">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-wider text-neutral-800">
          Galería
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <Image
                src={src}
                alt={`Trabajo realizado ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact & Hours Section */}
      <section id="contacto" className="py-20 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div {...fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Visítanos</h3>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-neutral-400 mt-1" />
                <div>
                  <p className="font-medium">Armilla, Granada</p>
                  <p className="text-neutral-400">Calle Real de Armilla, 122</p>
                  {/* Dirección ficticia, el usuario no la proveyó, pero "Armilla" es clave. */}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-neutral-400" />
                <p>+34 958 00 00 00</p>
              </div>
              <div className="flex items-center gap-4">
                <Instagram className="w-6 h-6 text-neutral-400" />
                <p>@rafamoles_estilistas</p>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div {...fadeInUp}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6" /> Horario
              </h3>
              <ul className="space-y-4">
                {schedule.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between border-b border-neutral-700 pb-2"
                  >
                    <span className="font-medium">{item.day}</span>
                    <span className="text-neutral-400">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <div className="mt-12 text-center text-neutral-500 text-sm">
            © {new Date().getFullYear()} Rafa Moles Estilistas. Todos los
            derechos reservados.
          </div>
        </div>
      </section>
    </main>
  )
}

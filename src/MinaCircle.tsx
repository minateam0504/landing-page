import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IMAGES } from "./App";
import {
  ArrowLeft,
  Heart,
  Recycle,
  Users,
  Sparkles,
  Gift,
  ShieldCheck,
  Globe,
  ChevronRight,
  Baby,
} from "lucide-react";

// Centralized Image Assets
const CIRCLE_IMAGES = {
  toys: `${import.meta.env.BASE_URL}toy.jpg`,
  room: `${import.meta.env.BASE_URL}zero1.png`,
  shoes: `${import.meta.env.BASE_URL}zero8.png`,
};

const MinaCircle = () => {
  return (
    <div className="bg-cream font-sans text-ink min-h-screen">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 py-4 shadow-sm border-b border-sage/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/">
            <img src={IMAGES.logo} alt="MINA Logo" className="w-32 h-auto" />
          </Link>
          <Link
            to="/"
            className="text-sm font-bold text-sage uppercase tracking-widest hover:text-olive transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="inline-block bg-sage/10 text-sage px-6 py-2 rounded-full text-sm font-bold uppercase tracking-[0.2em]">
                Community Gifting
              </div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="bg-terracotta text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg"
              >
                Coming Soon
              </motion.div>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-8 leading-none tracking-tight">
              MINA <span className="italic text-sage">Circle</span>
            </h1>
            <p className="text-xl md:text-2xl text-ink/70 font-light max-w-3xl mx-auto leading-relaxed">
              A community gifting system where outgrown baby items find their
              next family.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-sage/5 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 w-80 h-80 bg-terracotta/5 rounded-full blur-[80px] -z-10"></div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8">
                How It Works
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center text-sage shrink-0">
                    <Gift size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Items come from:</h3>
                    <ul className="space-y-2 text-ink/70">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-sage rounded-full"></div>
                        Families using MINA Pickup Concierge to declutter
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-sage rounded-full"></div>
                        Parents donating items directly through the MINA
                        platform
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center text-terracotta shrink-0">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Claiming Items</h3>
                    <p className="text-ink/70 leading-relaxed">
                      Items are free to claim. We charge a small coordination
                      fee to cover the operations and technical costs of running
                      the service.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center text-olive shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Redistribution</h3>
                    <p className="text-ink/70 leading-relaxed">
                      If not claimed, we redistribute them through events hosted
                      with trusted nonprofit partners.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl oil-painting-canvas">
                <img
                  src={CIRCLE_IMAGES.toys}
                  alt="Baby toys"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-cream p-8 rounded-[2rem] shadow-xl max-w-xs border border-sage/10">
                <p className="font-serif italic text-xl text-sage">
                  "Making circulation simple and transparent."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Built It */}
      <section className="py-32 px-6 bg-sage text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-12">
              Why We Built MINA Circle
            </h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 opacity-90">
              Most baby items are used for only a few months. Many parents would
              rather see these items go to another family than sit unused or end
              up in a landfill.
            </p>
            <div className="h-px w-24 bg-white/30 mx-auto mb-12"></div>
            <p className="text-2xl md:text-3xl font-serif italic">
              MINA Circle makes that possible by making circulation simple and
              transparent.
            </p>
          </motion.div>
        </div>

        {/* Background Icons */}
        <div className="absolute top-10 left-10 opacity-10 rotate-12">
          <Recycle size={120} />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10 -rotate-12">
          <Heart size={150} />
        </div>
      </section>

      {/* Why We Are Different */}
      <section className="py-32 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif mb-6">
              Why MINA Circle Is Different
            </h2>
            <p className="text-xl text-ink/60 font-light">
              Redefining how we share and sustain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-sage/5"
            >
              <div className="w-14 h-14 bg-sage/10 rounded-2xl flex items-center justify-center text-sage mb-8">
                <Globe size={28} />
              </div>
              <h3 className="text-2xl font-serif mb-4">
                Not just another marketplace
              </h3>
              <p className="text-ink/60 leading-relaxed text-lg">
                Unlike resale marketplaces, our goal isn’t to maximize resale
                value. We focus on the community and the lifecycle of the
                product.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-sage/5"
            >
              <div className="w-14 h-14 bg-terracotta/10 rounded-2xl flex items-center justify-center text-terracotta mb-8">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-serif mb-4">Transparency First</h3>
              <p className="text-ink/60 leading-relaxed text-lg">
                Unlike bulk donating sites, our goal is to give you transparency
                and prioritize redistributing your items to real families.
              </p>
            </motion.div>
          </div>

          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-sage/5">
            <h3 className="text-3xl font-serif mb-12 text-center">
              We do this by:
            </h3>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-sage font-serif text-5xl mb-6">01</div>
                <p className="text-ink/70 leading-relaxed">
                  Using our platform to managing the donating/claiming process
                </p>
              </div>
              <div className="text-center">
                <div className="text-sage font-serif text-5xl mb-6">02</div>
                <p className="text-ink/70 leading-relaxed">
                  Supporting parents’s various needs by allowing them to donate
                  directly or using our concierge pickup for busy parents
                </p>
              </div>
              <div className="text-center">
                <div className="text-sage font-serif text-5xl mb-6">03</div>
                <p className="text-ink/70 leading-relaxed">
                  Working with trusted nonprofits when items aren’t claimed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal */}
      <section className="py-32 px-6 bg-ink text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block border border-white/20 px-6 py-2 rounded-full text-sm font-bold mb-8 uppercase tracking-widest">
                Our Mission
              </div>
              <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
                Zero baby gear <span className="text-sage italic">waste.</span>
              </h2>
              <p className="text-xl text-white/70 font-light leading-relaxed mb-10">
                By making circulation easier, MINA Circle helps families
                declutter responsibly while supporting other parents in the
                community.
              </p>
              {/* <Link
                to="/"
                className="inline-flex items-center gap-3 bg-sage text-white px-10 py-5 rounded-full font-bold hover:bg-olive transition-all shadow-xl"
              >
                Join the Circle <ChevronRight size={20} />
              </Link> */}
            </motion.div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="aspect-square rounded-3xl overflow-hidden"
                >
                  <img
                    src={CIRCLE_IMAGES.room}
                    alt="Baby room"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="aspect-square rounded-3xl overflow-hidden mt-12"
                >
                  <img
                    src={CIRCLE_IMAGES.shoes}
                    alt="Baby shoes"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </motion.div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-terracotta rounded-full flex flex-col items-center justify-center text-center p-4 shadow-2xl"
              >
                <Baby size={32} className="mb-1" />
                <span className="text-[10px] font-bold uppercase tracking-tighter">
                  Circular Parent
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 bg-cream text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-8">
          Ready to start circulating?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://shop.getmina.app/"
            className="bg-sage text-white px-10 py-4 rounded-full font-bold hover:bg-olive transition-all"
          >
            Visit Marketplace
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="border border-sage text-sage px-10 py-4 rounded-full font-bold hover:bg-sage hover:text-white transition-all"
          >
            Back to Top
          </button>
        </div>
      </section>
    </div>
  );
};

export default MinaCircle;

import Image from "next/image";

export default function CtaSection() {
  return (
    <section className="relative h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-linear-to-r from-gray-600 to-gray-800">
          <Image
            src="/images/cta.jpg"
            alt={"Call to Action"}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-[920px] mx-auto h-full flex flex-col justify-center px-6">
        <h2
          className="text-[42px] font-bold text-white mb-1"
          style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 0 20px rgba(0,0,0,0.2)' }}
        >
          You're Here!
        </h2>
        <p
          className="text-white text-base font-medium mb-6 max-w-2xl"
          style={{ textShadow: '0 0 20px rgba(0,0,0,0.2)' }}
        >
          Welcome to Hommea! We're here to help you find your ideal green luxury home. Click to connect with our experts for personalized guidance.
        </p>
        <button className="w-[140px] bg-white text-primary-brown px-6 py-3 font-semibold hover:bg-white/90 transition">
          Contact us
        </button>
      </div>
    </section>
  );
}
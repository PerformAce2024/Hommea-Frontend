import Image from 'next/image';

 const lookingForCards = [
    {
      title: "Buy my first house",
      description: "Imagine the joy of owning your first home! Picture cozy evenings, decorating your space, and creating lasting memories. Let's explore how exciting this journey can be!",
      image: "/images/looking-for-1.png"
    },
    {
      title: "Invest in Property",
      description: "More and more individuals are turning to luxury real estate as a preferred investment option.",
      image: "/images/looking-for-2.png"
    },
    {
      title: "Living Experience",
      description: "Successful individuals and executives look for investments that enhance their family's lifestyle, focusing on homes that offer community, luxury, and meaningful connections.",
      image: "/images/looking-for-3.png"
    },
    {
      title: "Premium Educational Ecosystem",
      description: "Investing in a strong education environment for your kids opens doors to future opportunities, setting them up for success from an early age!",
      image: "/images/looking-for-4.png"
    }
  ];

type Card = {
  title: string;
  description: string;
  image?: string;
};

export default function LookingFor() {
    const cards:Card[] = lookingForCards;
    
    return (
    <section className="bg-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[42px] font-bold text-text-primary mb-16" style={{ fontFamily: 'Playfair Display, serif' }}>
          I'm Looking to
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="flex gap-6 items-stretch">
              <div className="relative w-[308px] min-h-[180px] bg-gray-200 rounded overflow-hidden shrink-0">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-gray-300 to-gray-400" />
                )}
              </div>
              <div className="flex-1 flex flex-col justify-center space-y-4 py-2">
                <h3 className="text-[22px] font-semibold text-text-primary leading-tight">
                  {card.title}
                </h3>
                <p className="text-[16px] text-text-primary leading-relaxed line-clamp-5">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
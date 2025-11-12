"use client"

import Image from "next/image";


function About() {
  return (
    <div className="container mx-auto mt-2.5">
      <div className="flex">
       
        <Image className="shadow-2xl rounded-2xl max-lg:w-[300px] max-sm:w-[200px] max-sm:h-[400px] " alt="about shop" src="/assets/photo/photo.jpg" width={500} height={500} />
   <div className="ml-3.5">
        <h1 className="text-2xl font-bold"> About Luvira</h1>
        <p>  where the brilliance of gold and the timeless beauty of jewelry
        intertwine with love and artistry. At Luvira, we believe that every
        piece of jewelry is more than just an accessory; it’s a symbol of
        emotion, a moment in life, and a keepsake of love. Our collections are
        inspired by the elegance of nature and the beauty within every
        individual. From the first sketch to the final polish, each piece is
        crafted with precision, passion, and care — blending authenticity,
        modern design, and everlasting charm. At Luvira, our goal is not only to
        offer fine jewelry, but to create a luxurious and heartfelt experience
        built on trust, quality, and lasting shine. We believe everyone deserves
        a piece of jewelry as unique and special as they are. Luvira — where
            your unique shine begins.</p>
          </div>
      </div>
    </div>
    
  );
}

export default About;

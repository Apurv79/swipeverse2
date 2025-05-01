import Image from 'next/image';
import Button from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="max-w-5xl w-full flex flex-col items-center">
        {/* Responsive container for illustration and text */}
        <div className="flex flex-col items-center">
          {/* Illustration - shown in both mobile and desktop */}
          <div className="relative w-full max-w-[320px] md:max-w-[400px] aspect-square mb-4 md:mb-8">
            <Image
              src="/images/couple-illustration.png"
              alt="SWIPEVERSE - Couples chatting"
              fill
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
          
          {/* App Name */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-[0.2em] mt-4 mb-2">
            S W I P E V E R S E
          </h1>
          
          {/* Tagline */}
          <p className="text-sm md:text-base text-slate-600 uppercase tracking-[0.5em] mb-8">
            UNBIASED  DATING  APP
          </p>
          
          <Button href="/profile" className="uppercase text-sm md:text-base font-bold text-black bg-[#F8F4E3] hover:bg-[#e6e0d7]">
          LET&apos;S START
          </Button>


        </div>
      </div>
    </main>
  );
}














    
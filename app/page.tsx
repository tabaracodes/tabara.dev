import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className='px-25 py-40'>
      {/* <Navigation /> */}
      <div className='flex flex-row gap-60'>
        <h1 className='font-heading text-nowrap'>Tabara Nosiba</h1>
        <p className='font-body'>I’m a frontend engineer focused on building thoughtful, user-centered digital experiences and translating complex product ideas into polished, scalable interfaces. I currently work at Accenture Technology Innovation, where I build interactive prototypes and user interfaces that help teams and clients quickly visualize and refine emerging product concepts.</p>
      </div>
    </div>
  );
}

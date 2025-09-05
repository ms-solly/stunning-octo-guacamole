import AnimatedBackground from '../components/AnimatedBackground';
import DailyTask from '../components/DailyTask';

export default function Home() {
  return (
    <main className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100'>
      <div className='absolute inset-0 z-0'>
        <AnimatedBackground />
      </div>
      <div className='relative z-10'>
        <DailyTask />
      </div>
    </main>
  );
}

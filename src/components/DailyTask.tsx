'use client';

import { Flower, Loader2, Rabbit, Sparkles } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export default function DailyTask() {
  const [task, setTask] = useState<string | React.ReactNode>('Loading...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTask() {
      setLoading(true);
      try {
        const res = await fetch('/api/task', { method: 'POST' });
        const data = await res.json();
        setTask(
          data.description || (
            <>
              No task found <Sparkles className='inline-block h-5 w-5' />
            </>
          ),
        );
      } catch {
        // console.error(err);
        setTask(
          <>
            Something went wrong <Rabbit className='inline-block h-5 w-5' />
          </>,
        );
      }
      setLoading(false);
    }
    fetchTask();
  }, []);

  return (
    <div className='bg-white/80 backdrop-blur-md shadow-lg p-6 rounded-2xl text-center max-w-md mx-auto border border-pink-200'>
      <h1 className='text-2xl font-bold text-pink-600 mb-3 flex items-center justify-center gap-2'>
        <Flower className='h-6 w-6' />
        Your Daily Self-Care Task
        <Flower className='h-6 w-6' />
      </h1>
      <p className='text-lg text-gray-700'>
        {loading ? (
          <span className='flex items-center justify-center gap-2'>
            <Loader2 className='animate-spin' /> Loading...
          </span>
        ) : (
          task
        )}
      </p>
    </div>
  );
}

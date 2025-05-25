'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset(): void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-8 space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-red-600">Application Error!</h1>
        <p>Something critical went wrong.</p>
        <p className="text-sm text-red-700">{error.message}</p>
      </div>
      <button
        className="px-6 py-3 bg-slate-700 text-white rounded-full hover:bg-slate-800 transition-colors"
        onClick={() => reset()}
      >
        Reload Application
      </button>
      <div className="text-gray-500 text-sm">
        If the problem persists, please contact support.
      </div>
    </div>
  );
}

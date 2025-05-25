'use client';
import { Search, SparkleIcon } from 'lucide-react';
import { useFormStatus } from 'react-dom';

export function SearchBar() {
  const status = useFormStatus();
  return (
    <div className="flex rounded-full border border-slate-400 hover:border-slate-600  items-center transition-all ease-in-out duration-300 -mx-2 hover:shadow font-[family-name:var(--font-geist-mono)]">
      <select
        name="platform"
        className="py-4 ps-8 pe-2 rounded-s-full text-sm"
        required
      >
        <option value="android" className="bg-slate-800 text-slate-100">
          Android
        </option>
        <option value="ios" className="bg-slate-800 text-slate-100">
          iOS
        </option>
      </select>
      <input
        type="text"
        name="packageId"
        className="py-4 px-2 w-full text-sm"
        placeholder="Lookup by bundle ID"
        disabled={status.pending}
        required
      />
      <button
        type="submit"
        className="hover:cursor-pointer right-0 ps-4 py-4 pe-8 rounded-e-full group"
        disabled={status.pending}
      >
        {status.pending ? (
          <SparkleIcon className="text-slate-400 group-hover:text-slate-600 transition-all ease-in-out duration-300 size-5 animate-spin" />
        ) : (
          <Search className="text-slate-400 group-hover:text-slate-600 transition-all ease-in-out duration-300 size-5" />
        )}
      </button>
    </div>
  );
}

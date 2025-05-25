'use client';
import Image from 'next/image';
import { Badge, BadgeGroup, BadgeItem } from './badge';
import {
  ExternalLink,
  Eye,
  LucidePackage,
  PackageOpen,
  Search,
  Star,
  Users,
} from 'lucide-react';
import { formatNumberToHumanReadable } from '@/libs/format';

import { AppRelease, PlatformEnumType } from '@/libs/utils/types';
import { SearchBar } from './inputs';
import { getAppRelease } from '../actions';
import { useState } from 'react';

export function MainAreaCard() {
  const [appData, setAppData] = useState<AppRelease | null | undefined>(
    undefined
  );
  return (
    <div className="max-w-[550px] mx-auto bg-gradient-to-bl from-slate-50 via-slate-200 to-slate-50 rounded-3xl p-12 border border-slate-200 space-y-8">
      <form
        action={async (formData: FormData) => {
          const data = await getAppRelease({
            packageId: formData.get('packageId') as string,
            platform: formData.get('platform') as PlatformEnumType,
          });
          setAppData(data);
        }}
      >
        <SearchBar />
      </form>
      {appData ? (
        <AppReleaseCard data={appData} />
      ) : appData === null ? (
        <EmptyReleaseCard />
      ) : (
        <FreshSearchCard />
      )}
    </div>
  );
}

function AppReleaseCard({ data }: { data: AppRelease }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-6">
        <Image
          src={data.iconUrl}
          alt={data.appName}
          width={100}
          height={100}
          className="rounded-3xl min-size-[100px] border border-slate-100 shadow h-fit my-auto"
        />
        <div className="space-y-1 content-center">
          <h1>{data.appName}</h1>
          <p className="text-sm text-slate-600">{data.developerName}</p>
          <div className="flex flex-wrap gap-1">
            <Badge icon={LucidePackage}>v{data.versionCode}</Badge>
            <Badge icon={LucidePackage}>{data.appCategory}</Badge>
            <BadgeGroup>
              <BadgeItem icon={Star}>
                {data.userRatingAverage.toFixed(2)}
              </BadgeItem>
              &nbsp;/&nbsp;
              <BadgeItem icon={Users}>
                {formatNumberToHumanReadable(data.userRatingCount)}
              </BadgeItem>
            </BadgeGroup>
          </div>
        </div>
      </div>
      <p
        className="line-clamp-6 text-sm"
        dangerouslySetInnerHTML={{
          __html: data.appDescription.replaceAll('\n', '<br />'),
        }}
      ></p>
      <a
        href={data.storeUrl}
        className="flex gap-4 justify-center w-full bg-slate-600 hover:bg-slate-700 text-white py-4 rounded-full text-sm transition-all duration-300 ease-in-out border border-slate-500"
        target="_blank"
      >
        View Source
        <Eye className="text-slate-300 size-4 my-auto" />
      </a>
    </div>
  );
}

function EmptyReleaseCard() {
  return (
    <div className="space-y-4 text-center">
      <PackageOpen className="size-[150px] text-slate-300 mx-auto" />
      <h2 className="text-slate-600">No Results Found.</h2>
      <p className="text-sm text-slate-500 text-balance">
        We couldn&apos;t find anything matching your request. Would you like to
        try again?
      </p>
    </div>
  );
}

function FreshSearchCard() {
  return (
    <div className="space-y-4 text-center">
      <Search className="size-[150px] text-slate-300 mx-auto" />
      <h2 className="text-slate-600">Begin a New Search</h2>
      <div className="text-sm text-slate-500 space-y-4 text-balance">
        <p>
          To track a new app, you&apos;ll need its unique Bundle ID, also known
          as its Package Name on Android. This essential identifier ensures
          you&apos;re fetching the correct app&apos;s details from its
          respective store.
        </p>
        <a
          href="https://support.apple.com/en-ng/guide/deployment/depece748c41/web"
          className="underline text-xs flex gap-2 w-fit mx-auto"
          target="_blank"
        >
          Example iOS Bundle Ids <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}

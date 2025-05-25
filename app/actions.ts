'use server';

import Android from '@/libs/android';
import iOS from '@/libs/ios';
import { PlatformEnumType } from '@/libs/utils/types';

const PROVIDERS = {
  ios: new iOS(),
  android: new Android(),
};

export async function getAppRelease({
  packageId,
  platform,
}: {
  packageId: string;
  platform: PlatformEnumType;
}) {
  const provider = PROVIDERS[platform];
  if (!provider) {
    return null;
  }
  return provider.getRelease(packageId);
}

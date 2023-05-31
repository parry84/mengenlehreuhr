import { LoadSkia } from '@shopify/react-native-skia/lib/module/web';
import { lazy, Suspense, useMemo } from 'react';
import Breathe from './Mengenlehreuhr';

export function AsyncSkia({ getComponent, fallback }) {
  const Inner = useMemo(() => lazy(async () => {
    await LoadSkia();
    return getComponent()
  }), [getComponent]);

  return (
    //<Breathe/>
    <Suspense fallback={fallback}><Inner /></Suspense>
  );
}
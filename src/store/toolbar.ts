import { action } from 'nanostores';
import { Toolbar } from '@src/models/Toolbar';
import { persistentAtom } from './persistentStore';

export const $toolbar = persistentAtom<Toolbar>('toolbar', {
  visible: false,
});

export const toggle = action($toolbar, 'toggle', store => {
  const value = store.get();
  store.set({
    ...value,
    visible: !value?.visible,
  });
  return store.get();
});

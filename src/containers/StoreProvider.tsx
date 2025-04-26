import { useRef, ReactNode, FC, JSX } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@services/store';

type StoreProviderProps = {
  children: ReactNode;
};

const StoreProvider: FC<StoreProviderProps> = ({ children }): JSX.Element => {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;

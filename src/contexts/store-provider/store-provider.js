import React, { useEffect } from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { storeContext } from './useStoreContext';

const StoreProvider = ({
  store,
  children,
}) => {
  const storeInstance = useLocalStore(store);
  useEffect(() => {
    sessionStorage.setItem('store', JSON.stringify(store));
  }, [store, storeInstance]);
  return <storeContext.Provider value={storeInstance}>{children}</storeContext.Provider>;
};

export default StoreProvider;

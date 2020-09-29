import React from 'react';
import Pages from '../../models/pages';
import { useObserver } from 'mobx-react-lite';
import { useStoreContext } from '../../contexts/store-provider/useStoreContext';
import DashboardPage from './dashboard-page';

const PageComponents = {
  [Pages.Dashboard]: <DashboardPage />,
};

const PageComponent = ({ currentPage }) => {
  return PageComponents[currentPage];
};

function CurrentPage() {
  const state = useStoreContext();
  if (!state.currentPage) {
    const sessionValue = sessionStorage.getItem('currentPage');
    if (sessionValue) {
      state.currentPage = sessionValue;
    } else {
      state.setPage(Pages.Dashboard);
    }
  }
  return useObserver(() => (
    <PageComponent currentPage={state.currentPage} />
  ));
}

export default CurrentPage;

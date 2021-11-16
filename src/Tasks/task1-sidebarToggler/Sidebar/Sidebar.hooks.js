import React from 'react';

const useSidebarLogicGenerator = () => {
  const [isSidebarOpen, setSidebarState] = React.useState(false);

  return {
    state: {
      isSidebarOpen,
    },
    actions: {
      setSidebarState,
    },
  };
};

export default useSidebarLogicGenerator;

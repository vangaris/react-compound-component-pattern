import React from "react";

const useAccordion = ({ defaultExpand, stripped }) => {
  const [activeItem, setActiveItem] = React.useState();

  const setToggle = React.useCallback(
    (value) => {
      setActiveItem(() => {
        if (activeItem !== value) {
          return value;
        }
      });
    },
    [setActiveItem, activeItem]
  );

  const value = React.useMemo(
    () => ({
      activeItem,
      setToggle,
      defaultExpand,
      stripped
    }),
    [activeItem, setToggle, defaultExpand, stripped]
  );

  return [value];
};

export default useAccordion;

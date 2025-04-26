import { FC, Fragment, JSX, useMemo } from 'react';

import useTypedSelector from '@hooks/useTypedSelector';
import useActions from '@hooks/useActions';
import { RangeSlider } from '@components';

const PricesFilterContainer: FC = (): JSX.Element => {
  const {
    list,
    hasData,
    filters: { prices },
  } = useTypedSelector((state) => state.products);
  const { setProductFilter } = useActions();

  const [min, max] = useMemo(() => {
    const prices = list?.map((item) => item.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return [min, max];
  }, [list]);

  if (!hasData) {
    return <Fragment />;
  }

  const value = prices.length ? prices : [min, max];

  return (
    <RangeSlider
      label="PRICES"
      value={value}
      min={min}
      max={max}
      marks={[
        { value: min, label: min },
        { value: max, label: max },
      ]}
      valueLabelDisplay="auto"
      onChangeCommitted={(e, newValue) => {
        e.stopPropagation();
        if (Array.isArray(newValue)) {
          setProductFilter({ filter: 'prices', value: newValue });
        }
      }}
    />
  );
};

export default PricesFilterContainer;

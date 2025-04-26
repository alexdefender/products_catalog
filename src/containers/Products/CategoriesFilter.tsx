import { FC, Fragment, JSX, useMemo } from 'react';

import useTypedSelector from '@hooks/useTypedSelector';
import useActions from '@hooks/useActions';
import { CheckBoxesGroup, CheckBoxesGroupProps } from '@components';

const CategoriesFilter: FC = (): JSX.Element => {
  const {
    list,
    hasData,
    filters: { categories },
  } = useTypedSelector((state) => state.products);
  const { setProductFilter } = useActions();

  const items = useMemo(() => {
    const categories = list?.map((item) => item.category);
    const unique = [...new Set(categories)];
    return unique.map((c) => ({ name: c, value: c }));
  }, [list]);

  if (!hasData) {
    return <Fragment />;
  }

  const handleChange = (value: CheckBoxesGroupProps['value']) => {
    setProductFilter({ filter: 'categories', value });
  };

  return <CheckBoxesGroup label="CATEGORIES" items={items} value={categories} onChange={handleChange} />;
};

export default CategoriesFilter;

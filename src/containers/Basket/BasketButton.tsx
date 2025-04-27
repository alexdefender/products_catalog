import { FC, JSX, MouseEvent } from 'react';
import Badge from '@mui/material/Badge';

import useAppSelector from '@hooks/useAppSelector';
import useActions from '@hooks/useActions';
import { IconButton } from '@components';

const BasketButtonContainer: FC = (): JSX.Element => {
  const { items } = useAppSelector((state) => state.basket);
  const { openDialog } = useActions();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    openDialog({ name: 'BasketDialog' });
  };

  return (
    <Badge badgeContent={items.length} color="secondary">
      <IconButton icon="basket" onClick={handleClick} />
    </Badge>
  );
};

export default BasketButtonContainer;

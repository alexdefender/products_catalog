import { useSelector } from 'react-redux';

import { RootState } from '@services/store';

const useAppSelector = useSelector.withTypes<RootState>();

export default useAppSelector;

import { MEMO_REPOSITORY, USER_REPOSITORY } from 'src/constants';
import { Memo } from './model/memo.model';

export const memosProviders = [
  {
    provide: MEMO_REPOSITORY,
    useValue: Memo,
  },
];

import { USER_REPOSITORY } from 'src/constants';
import { User } from './model/user.model';

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];

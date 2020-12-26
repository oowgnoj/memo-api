import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { MEMO_REPOSITORY } from 'src/constants';
import { Memo } from './model/memo.model';

@Injectable()
export class MemoService {
  constructor(@Inject(MEMO_REPOSITORY) private memoRepository: typeof Memo) {}

  async findAll(userId): Promise<Memo[]> {
    return this.memoRepository.findAll({
      where: {
        [Op.or]: [{ userId: userId }, { secret: false }],
      },
    });
  }

  async create(userId, payload): Promise<Memo> {
    payload.userId = userId;
    return this.memoRepository.create(payload);
  }
}

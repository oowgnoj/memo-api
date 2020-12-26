import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  HasMany,
  BeforeCreate,
} from 'sequelize-typescript';
import * as Bcrypt from 'bcryptjs';
import { Memo } from 'src/memo/model/memo.model';

@Table
export class User extends Model<User> {
  @Column
  email!: string;

  @Column
  password: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @HasMany(() => Memo)
  memos: Memo[];

  @BeforeCreate
  static async makeUpperCase(instance: User) {
    instance.password = await Bcrypt.hash(instance.password, 10);
  }

  async comparePassword(candidatePassword: string): Promise<boolean> {
    return await Bcrypt.compare(candidatePassword, this.password);
  }
}

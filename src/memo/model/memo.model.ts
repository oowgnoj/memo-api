import {
  Table,
  Column,
  Model,
  CreatedAt,
  PrimaryKey,
  UpdatedAt,
  BelongsTo,
  AutoIncrement,
  Default,
  ForeignKey,
} from 'sequelize-typescript';
import { values } from 'sequelize/types/lib/operators';
import { User } from 'src/user/model/user.model';

@Table
export class Memo extends Model<Memo> {
  @Column
  title: string;

  @Column
  contents: string;

  @Default(() => false)
  @Column
  secret: Boolean;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @ForeignKey(() => User)
  @Column
  userId: number;
}

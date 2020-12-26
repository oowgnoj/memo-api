import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  Default,
  ForeignKey,
} from 'sequelize-typescript';
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

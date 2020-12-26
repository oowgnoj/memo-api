import { Module } from '@nestjs/common';
import { MemoController } from './memo.controller';
import { memosProviders } from './memos.providers';
import { MemoService } from './memos.service';

@Module({
  controllers: [MemoController],
  providers: [MemoService, ...memosProviders],
})
export class MemoModule {}

import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateMemoDto } from './dto/create-memo.dto';
import { MemoService } from './memos.service';

@Controller()
export class MemoController {
  constructor(private memoService: MemoService) {}

  @UseGuards(JwtAuthGuard)
  @Get('memos')
  findAll(@Req() req) {
    const { userId } = req.user;
    return this.memoService.findAll(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('memo')
  create(@Req() req, @Body() payload: CreateMemoDto) {
    const { userId } = req.user;
    return this.memoService.create(userId, payload);
  }
}

import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join, resolve } from 'path';

@Controller()
export class BaseController {
  @Get()
  Root(@Res() res: Response) {
    const initial = join(
      process.cwd(),
      './src/infraestructure/http/static/index.html',
    );
    return res.sendFile(initial);
  }
}

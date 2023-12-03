import { Module } from '@nestjs/common';
import { RoutesModule } from './infraestructure/http/routes/routes.module';

@Module({
  imports: [RoutesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

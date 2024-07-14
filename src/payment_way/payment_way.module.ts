import { Module } from '@nestjs/common';
import { PaymentWayService } from './payment_way.service';
import { PaymentWayController } from './payment_way.controller';

@Module({
  controllers: [PaymentWayController],
  providers: [PaymentWayService],
})
export class PaymentWayModule {}

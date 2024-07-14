import { Test, TestingModule } from '@nestjs/testing';
import { PaymentWayController } from './payment_way.controller';
import { PaymentWayService } from './payment_way.service';

describe('PaymentWayController', () => {
  let controller: PaymentWayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentWayController],
      providers: [PaymentWayService],
    }).compile();

    controller = module.get<PaymentWayController>(PaymentWayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

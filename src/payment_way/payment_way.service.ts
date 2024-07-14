import { Injectable } from '@nestjs/common';
import { CreatePaymentWayDto } from './dto/create-payment_way.dto';
import { UpdatePaymentWayDto } from './dto/update-payment_way.dto';

@Injectable()
export class PaymentWayService {
  create(createPaymentWayDto: CreatePaymentWayDto) {
    return 'This action adds a new paymentWay';
  }

  findAll() {
    return `This action returns all paymentWay`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentWay`;
  }

  update(id: number, updatePaymentWayDto: UpdatePaymentWayDto) {
    return `This action updates a #${id} paymentWay`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentWay`;
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentWayService } from './payment_way.service';
import { CreatePaymentWayDto } from './dto/create-payment_way.dto';
import { UpdatePaymentWayDto } from './dto/update-payment_way.dto';

@Controller('payment-way')
export class PaymentWayController {
  constructor(private readonly paymentWayService: PaymentWayService) {}

  @Post()
  create(@Body() createPaymentWayDto: CreatePaymentWayDto) {
    return this.paymentWayService.create(createPaymentWayDto);
  }

  @Get()
  findAll() {
    return this.paymentWayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentWayService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentWayDto: UpdatePaymentWayDto) {
    return this.paymentWayService.update(+id, updatePaymentWayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentWayService.remove(+id);
  }
}

import { PartialType } from '@nestjs/swagger';
import { CreatePaymentWayDto } from './create-payment_way.dto';

export class UpdatePaymentWayDto extends PartialType(CreatePaymentWayDto) {}

import { Injectable } from '@nestjs/common';
import { CreateLiquidacionesHoraDto } from './dto/create-liquidaciones-hora.dto';
import { UpdateLiquidacionesHoraDto } from './dto/update-liquidaciones-hora.dto';

@Injectable()
export class LiquidacionesHorasService {
  create(createLiquidacionesHoraDto: CreateLiquidacionesHoraDto) {
    return 'This action adds a new liquidacionesHora';
  }

  findAll() {
    return `This action returns all liquidacionesHoras`;
  }

  findOne(id: number) {
    return `This action returns a #${id} liquidacionesHora`;
  }

  update(id: number, updateLiquidacionesHoraDto: UpdateLiquidacionesHoraDto) {
    return `This action updates a #${id} liquidacionesHora`;
  }

  remove(id: number) {
    return `This action removes a #${id} liquidacionesHora`;
  }
}

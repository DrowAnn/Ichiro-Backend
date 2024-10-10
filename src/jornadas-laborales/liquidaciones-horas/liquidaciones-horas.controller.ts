import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LiquidacionesHorasService } from './liquidaciones-horas.service';
import { CreateLiquidacionesHoraDto } from './dto/create-liquidaciones-hora.dto';
import { UpdateLiquidacionesHoraDto } from './dto/update-liquidaciones-hora.dto';

@Controller('liquidaciones-horas')
export class LiquidacionesHorasController {
  constructor(private readonly liquidacionesHorasService: LiquidacionesHorasService) {}

  @Post()
  create(@Body() createLiquidacionesHoraDto: CreateLiquidacionesHoraDto) {
    return this.liquidacionesHorasService.create(createLiquidacionesHoraDto);
  }

  @Get()
  findAll() {
    return this.liquidacionesHorasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.liquidacionesHorasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLiquidacionesHoraDto: UpdateLiquidacionesHoraDto) {
    return this.liquidacionesHorasService.update(+id, updateLiquidacionesHoraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.liquidacionesHorasService.remove(+id);
  }
}

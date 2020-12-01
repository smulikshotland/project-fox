import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { from } from 'rxjs';
import { RolesGuard } from 'src/roles.guard';
// import { RolesGuard } from 'src/roles.guard';
// import { RolesGuard } from 'src/roles.guard';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
// @SetMetadata("rols",["admin"])
export class ProductsController {
    constructor(private readonly ProductsService:ProductsService) {}
  
  @Post('post')
  // @UseGuards(RolesGuard)
  async create(@Body() createProductDto: CreateProductDto) {
    console.log("post1")
    // console.log('DTO controler',createProductDto);
    
    return await this.ProductsService.create(createProductDto);
  }
  
  @Get('hats')
  findCategoryHats() {
    return this.ProductsService.findHatsCategory();
  }
  @Get('pins')
  findCategoryPins() {
    return this.ProductsService.findPinsCategory();
  }
  @Get('movie')
  findCategoryMovie() {
    return this.ProductsService.findMovieCategory();
  }  
  @Patch(':id')
  update(@Param('id',ParseIntPipe) id, @Body() product: CreateProductDto) {
    const {name , price, image, category} = product
    
    return this.ProductsService.update(name , price, image, category,id);
  }
  

  @Delete(':id')
  remove(@Param('id') id: string) {
      console.log("controller");
      
    return this.ProductsService.remove(+id);

  }
  @Get(':id')
  async findAll(@Param('id')id:string){
    let y = await this.ProductsService.getProduct(id)
    return y
  }

  
}

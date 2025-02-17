import { Body, Controller, Delete, Get, Inject, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
// import { ApiResponseType } from '../../common/swagger/response.decorator';


// @ApiResponse({ status: 500, description: 'Internal error' })
//@ApiExtraModels(TodoPresenter)
@Controller('persons')
@ApiTags('persons')
export class PersonController {

  @Get()
  //@ApiResponseType(TodoPresenter, false)
  getPerson() {
    //const todo = await this.getTodoUsecaseProxy.getInstance().execute(id);
    //return new TodoPresenter(todo);
    return [{ id: 1, name: 'John Doe' }];
  }

}
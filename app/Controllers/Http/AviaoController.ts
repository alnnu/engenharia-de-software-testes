import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Aviao from "App/Models/Aviao";

export default class AviaoController {

  public async store ({request, response} : HttpContextContract){
    const body = request.body();

    const aviao = await Aviao.find(body.id);

    if(!aviao)
    {
      try{
        await Aviao.create(body);
        console.log("dasd")
      }catch (e)
      {
        console.error(e);
        response.badRequest(e);
      }
    }else {
      console.error('aviao ja existe');
    }
  }

  public async read ({request} : HttpContextContract){
    const body = request.body();

    const aviao = await Aviao.find(body.id);

    if(aviao)
    {
     console.log(aviao);
    }else {
      console.error('aviao nao existe');
    }
  }

  public async delete ({request} : HttpContextContract){
    const body = request.body();

    const aviao = await Aviao.find(body.id);

    if(aviao)
    {
      try{
        await aviao.delete();
      }catch (e){
        console.error(e);
      }
    }else {
      console.error('aviao nao existe');
    }
  }
  public async update ({request} : HttpContextContract){
    const body = request.body();
    try{
      await Aviao.updateOrCreate(body.id,body)
    }catch (e){
      console.error(e);
    }
  }
}


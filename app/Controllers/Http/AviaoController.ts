import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Aviao from "App/Models/Aviao";

export default class AviaoController {

  public async store ({request} : HttpContextContract){
    const body = request.body();

    const aviao = Aviao.find(body.id);

    if(!aviao)
    {
      try{
        await Aviao.create(body);
      }catch (e)
      {
        console.error(e)
      }
    }else {
      console.error('aviao ja existe')
    }
  }
}

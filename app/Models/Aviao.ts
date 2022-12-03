import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Aviao extends BaseModel {
  @column()
  public modelo: string

  @column()
  public capacidade: number

  @column()
  public alcance: number

  @column()
  public horas_voo: number

  @column()
  public fabricante: string


  @column({ isPrimary: true })
  public id: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'aviaos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id').primary()


      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.string('modelo').notNullable()
      table.integer('capacidade').notNullable()
      table.integer( 'alcance').notNullable()
      table.integer('horasVoo').defaultTo(0)
      table.string('fabricante').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

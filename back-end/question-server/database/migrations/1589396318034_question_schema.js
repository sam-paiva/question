'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionSchema extends Schema {
  up() {
    this.create('questions', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.string('description', 1000).notNullable()
      table.integer('type_id').unsigned().references('id').inTable('types').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down() {
    this.drop('questions')
  }
}

module.exports = QuestionSchema


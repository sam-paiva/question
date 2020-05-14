'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswerSchema extends Schema {
  up() {
    this.create('answers', (table) => {
      table.increments()
      table.string('answer', 500)
      table.integer('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('question_id').unsigned().references('id').inTable('questions').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down() {
    this.drop('answers')
  }
}

module.exports = AnswerSchema

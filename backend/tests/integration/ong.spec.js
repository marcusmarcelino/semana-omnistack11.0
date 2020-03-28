const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')//.set('Authorization', 'idongcriada') para testar incidentes
      .send({ 
        name:"APAD100",
        email:"test@teste.com",
        whatsapp:"63999999999",
        city:"Paraíso do Tocantins",
        uf:"TO"
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
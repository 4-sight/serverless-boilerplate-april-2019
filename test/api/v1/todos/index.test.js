import { expect } from 'chai';
import todosIndex from '../../../../handlers/api/v1/todos';

describe('Fetching list of todos', () => {
  it('returns a valid response', async () => {
    const response = await todosIndex();

    expect(response.statusCode).to.equal(200);
    expect(typeof response.body).to.equal('string');
    expect(response.body).to.contain('Hello from todos/index');
  });
});

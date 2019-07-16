import { getGreeting } from '../support/app.po';

describe('movietracker', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to movietracker!');
  });
});

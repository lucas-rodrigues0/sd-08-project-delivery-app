const sinon = require('sinon');
const { expect } = require('chai');

const usersController = require('../../api/controllers/usersController');
const services = require('../../api/services');
const {
  userAdminMockDB,
  userSellerMockDB,
  userCustomerMockDB,
} = require('../__mocks__/userMock');

describe('Users Controller', () => {
  describe('When get users Admin with success', () => {
    const response = {};
    const request = {};
    const adminResponse = { administrator: [userAdminMockDB] }

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(adminResponse);

      sinon.stub(services, 'getUsersByRole')
        .resolves([userAdminMockDB]);
    });
    after(() => {
      services.getUsersByRole.restore();
    });

    it('should return status 200 and a json message', async () => {
      const result = await usersController.getAdmin(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(result).to.be.equal(adminResponse);
    });
  });

  describe('When get users Seller', () => {
    const response = {};
    const request = {};
    const sellerResponse = { sellers: [userSellerMockDB] }

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(sellerResponse);

      sinon.stub(services, 'getUsersByRole')
        .resolves([userSellerMockDB]);
    });
    after(() => {
      services.getUsersByRole.restore();
    });

    it('should return status 200 and a json message', async () => {
      const result = await usersController.getAllSellers(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(result).to.be.equal(sellerResponse);
    });
  });

  describe('When get users Customer', () => {
    const response = {};
    const request = {};
    const customerResponse = { sellers: [userCustomerMockDB] }

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(customerResponse);

      sinon.stub(services, 'getUsersByRole')
        .resolves([userCustomerMockDB]);
    });
    after(() => {
      services.getUsersByRole.restore();
    });

    it('should return status 200 and a json message', async () => {
      const result = await usersController.getAllCustomers(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(result).to.be.equal(customerResponse);
    });
  });

});

// require the customer schema
const Customer = require("../Schema/customer");

module.exports = {
  getAllCustomers: (req, res) => {
    // implement get all customers logic
  },
  postCustomer: (req, res) => {
    // create a new Customer with your Customer schema and pass in the correct values from req.body
    // when creating data, we dont want to write to the DB directly, we want to run this through our validators by makeing a new instance of the object and then saving it to the db
  },
  updateCustomer: (req, res) => {},
  deleteCustomer: (req, res) => {}
};

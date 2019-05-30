const Customer = require("../Schema/customer");

module.exports = {
  getAllCustomers: (req, res) => {
    Customer.find({}).then(customers => {
      res.status(200).send(customers);
    });
  },
  postCustomer: (req, res) => {
    const { name, age, description } = req.body;
    // create a new Customer with your Customer schema and pass in the correct values
    // when creating data, we dont want to write to the DB directly, we want to run this through our validators
    const customer = new Customer({
      name,
      age,
      description
    });

    customer.save(customer => {
      Customer.find({}).then(customers => {
        res.status(200).send(customers);
      });
    });
  },
  updateCustomer: (req, res) => {
    const { name, age } = req.query;

    Customer.findOne({ name }).then(foundCustomer => {
      foundCustomer.age = age;
      foundCustomer.save(() => {
        Customer.find({}).then(customers => {
          res.status(200).send(customers);
        });
      });
    });
  },
  deleteCustomer: (req, res) => {
    const { name, age } = req.query;
    // ok to delete things directly as we dont care about validators
    Customer.deleteOne({ name }).then(customer => {
      console.log("info about deletion ===>", customer);
      // send all customers to the front
      Customer.find({}).then(customers => {
        res.status(200).send(customers);
      });
    });
  }
};

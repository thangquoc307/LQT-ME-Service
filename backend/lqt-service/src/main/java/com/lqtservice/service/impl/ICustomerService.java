package com.lqtservice.service.impl;

import com.lqtservice.model.Customer;

import java.util.List;

public interface ICustomerService {
    Customer getCustomerById(Integer id);
    List<Customer> getAllCustomer();
}

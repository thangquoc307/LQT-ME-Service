package com.lqtservice.service;

import com.lqtservice.model.Customer;
import com.lqtservice.repository.ICustomerRepository;
import com.lqtservice.service.impl.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository customerRepository;
    @Override
    public Customer getCustomerById(Integer id) {
        return customerRepository.getCustomerById(id);
    }
}
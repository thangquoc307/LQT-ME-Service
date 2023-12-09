package com.lqtservice.service;

import com.lqtservice.model.Employee;
import com.lqtservice.repository.IEmployeeRepository;
import com.lqtservice.service.impl.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService implements IEmployeeService {
    @Autowired
    private IEmployeeRepository employeeRepository;
    @Override
    public List<Employee> getAllEmployee() {
        return employeeRepository.getAllEmployee();
    }
}

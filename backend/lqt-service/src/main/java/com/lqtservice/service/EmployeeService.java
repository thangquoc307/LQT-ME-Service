package com.lqtservice.service;

import com.lqtservice.model.Account;
import com.lqtservice.model.Employee;
import com.lqtservice.repository.IAccountRepository;
import com.lqtservice.repository.IEmployeeRepository;
import com.lqtservice.service.impl.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService implements IEmployeeService {
    @Autowired
    private IEmployeeRepository employeeRepository;
    @Autowired
    private IAccountRepository accountRepository;
    @Override
    public List<Employee> getAllEmployee() {
        return employeeRepository.getAllEmployee();
    }

    @Override
    public Employee getEmployeeByAccount(Integer accountId) {
        return employeeRepository.getEmployeeByAccountId(accountId);
    }

    @Override
    public Employee getEmployeeById(Integer id) {
        return employeeRepository.getEmployeeByEmployeeId(id);
    }
}

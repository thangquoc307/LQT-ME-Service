package com.lqtservice.service.impl;

import com.lqtservice.model.Employee;

import java.util.List;

public interface IEmployeeService {
    List<Employee> getAllEmployee();
    Employee getEmployeeByAccount(Integer accountId);
    Employee getEmployeeById(Integer id);

}

package com.lqtservice.repository;

import com.lqtservice.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IEmployeeRepository extends JpaRepository<Employee, Integer> {
    @Query(nativeQuery = true,
            value = "select * from employees " +
                    "where is_deleted = 0")
    List<Employee> getAllEmployee();
}

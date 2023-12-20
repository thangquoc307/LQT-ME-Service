package com.lqtservice.repository;

import com.lqtservice.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IEmployeeRepository extends JpaRepository<Employee, Integer> {
    @Query(nativeQuery = true,
            value = "select * from employees " +
                    "where is_deleted = 0")
    List<Employee> getAllEmployee();
    @Query(nativeQuery = true,
            value = "select * from employees " +
                    "where is_deleted = 0 " +
                    "and employees.account_id = :account")
    Employee getEmployeeByAccountId(@Param("account") Integer accountId);
    @Query(nativeQuery = true,
            value = "select * from employees " +
                    "where is_deleted = 0 " +
                    "and id = :id")
    Employee getEmployeeByEmployeeId(@Param("id") Integer id);
}

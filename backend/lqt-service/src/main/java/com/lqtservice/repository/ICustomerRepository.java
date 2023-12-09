package com.lqtservice.repository;

import com.lqtservice.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ICustomerRepository extends JpaRepository<Customer, Integer> {
    @Query(nativeQuery = true,
            value = "select * from customers " +
                    "where is_deleted = 0 " +
                    "and id = :id")
    Customer getCustomerById(@Param("id") Integer customerId);
}

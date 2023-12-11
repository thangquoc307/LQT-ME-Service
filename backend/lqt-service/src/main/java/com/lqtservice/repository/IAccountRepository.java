package com.lqtservice.repository;

import com.lqtservice.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IAccountRepository extends JpaRepository<Account, Integer> {
//    @Query(nativeQuery = true,
//            value = "select * from accounts " +
//                    "where username = :name " +
//                    "and is_deleted = 0")
//    Account findAcountByName(@Param("name") String name);
//    @Query(nativeQuery = true,
//            value = "select * from accounts " +
//                    "where id = :id " +
//                    "and is_deleted = 0")
//    Account findAcountById(@Param("name") Integer id);
    Account findAccountsById(Integer id);
    Account findAccountsByUsername(String name);

}

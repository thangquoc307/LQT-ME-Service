package com.lqtservice.repository;

import com.lqtservice.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAccountRepository extends JpaRepository<Account, Integer> {
    Account findAccountsById(Integer id);
    Account findAccountsByUsername(String name);

}

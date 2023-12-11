package com.lqtservice.service;

import com.lqtservice.dto.UserAccountDetail;
import com.lqtservice.model.Account;
import com.lqtservice.repository.IAccountRepository;
import com.lqtservice.service.impl.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AccountService implements UserDetailsService, IAccountService {

    @Autowired
    private IAccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = accountRepository.findAccountsByUsername(username);
        if (account == null) {
            throw new UsernameNotFoundException(username);
        } else {
            return new UserAccountDetail(account);
        }
    }
    @Override
    public UserDetails loadUserByUserId(Long userId) throws UsernameNotFoundException {
        Account account = accountRepository.findAccountsById((int) Long.parseLong(userId + ""));
        if (account == null) {
            throw new UsernameNotFoundException(userId + "");
        } else {
            return new UserAccountDetail(account);
        }
    }
}

package com.lqtservice.service.impl;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface IAccountService {
    UserDetails loadUserByUserId(Long userId) throws UsernameNotFoundException;
}

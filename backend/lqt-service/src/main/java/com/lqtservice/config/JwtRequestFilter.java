package com.lqtservice.config;

import com.lqtservice.dto.UserAccountDetail;
import com.lqtservice.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
@Component
public class JwtRequestFilter extends OncePerRequestFilter {
    @Autowired
    private JwtUtilities jwtUtilities;
    @Autowired
    private AccountService accountService;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException {
        try {
            String jwt = jwtUtilities.getJwtFromRequest(request);

            if (!jwt.equals("") && jwt != null && jwtUtilities.validateToken(jwt)) {
                Long accountId = jwtUtilities.getUserIdFromJWT(jwt);
                UserAccountDetail userAccountDetail = (UserAccountDetail) accountService.loadUserByUserId(accountId);
                if (userAccountDetail != null) {
                    UsernamePasswordAuthenticationToken authenticationToken =
                            new UsernamePasswordAuthenticationToken(
                                    userAccountDetail,
                                    null,
                                    userAccountDetail.getAuthorities());
                    authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                }
            }
        } catch (Exception e) {
            System.out.println("Lỗi quyền truy cập");
        }
        filterChain.doFilter(request, response);
    }
}

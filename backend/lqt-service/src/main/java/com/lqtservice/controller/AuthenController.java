package com.lqtservice.controller;

import com.lqtservice.config.JwtUtilities;
import com.lqtservice.dto.LoginDto;
import com.lqtservice.dto.UserAccountDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/authen/")
public class AuthenController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtilities jwtUtilities;
    @PostMapping("login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginDto loginDto){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDto.getUserName(),
                        loginDto.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtUtilities.generateToken((UserAccountDetail) authentication.getPrincipal());
        return new ResponseEntity<>(jwt, HttpStatus.OK);
    }
    @GetMapping("test")
    public ResponseEntity<?> testJwt(){
        return new ResponseEntity<>("chạy rồi mừng quạ", HttpStatus.ACCEPTED);
    }
}

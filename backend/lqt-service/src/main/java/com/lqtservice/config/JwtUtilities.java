package com.lqtservice.config;

import com.lqtservice.dto.UserAccountDetail;
import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import java.io.Serializable;
import java.util.Date;

@Component
public class JwtUtilities implements Serializable {
//    lấy chữ ký khai báo ở application
    @Value("${jwt.secret}")
    private String jwtSecret;
//    tạo token từ user đăng nhập thành công
    public String generateToken(UserAccountDetail userAccountDetail){
        Date now = new Date();
        Date expire = new Date();
        expire.setDate(expire.getDate() + 1);

        return Jwts.builder()
//                lấy id account
                .setSubject(Long.toString(userAccountDetail.getAccount().getId()))
//                lấy thời gian đăng nhập
                .setIssuedAt(now)
//                lấy thời gian hết hạn
                .setExpiration(expire)
//                lấy công nghệ mã hóa và lồng chữ ký phía sau
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
//                thêm thông tin
                .claim("name", userAccountDetail.getAccount().getUsername())
                .claim("avatar", userAccountDetail.getAccount().getAvatar())
                .claim("role", userAccountDetail.getAccount().getAccountRole().getName())
                .claim("id", userAccountDetail.getAccount().getId())
                .compact();
    }
//    Lấy thông tin user từ jwt gửi tới
    public Long getUserIdFromJWT(String token){
        Claims claims = Jwts.parser()
                .setSigningKey(jwtSecret)
                .parseClaimsJws(token)
                .getBody();

        return Long.parseLong(claims.getSubject());
    }
    public boolean validateToken(String authToken){
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
            return true;
        } catch (MalformedJwtException e){
            System.out.println("Không tìm thấy");
        } catch (ExpiredJwtException e){
            System.out.println("Hết hạn");
            System.out.println(e);
        } catch (UnsupportedJwtException e){
            System.out.println("Không hỗ trợ");
        } catch (IllegalArgumentException e){
            System.out.println("Mã trống");
        }
        return false;
    }
}

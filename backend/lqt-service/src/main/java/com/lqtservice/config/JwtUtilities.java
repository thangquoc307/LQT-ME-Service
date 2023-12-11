package com.lqtservice.config;

import com.lqtservice.dto.UserAccountDetail;
import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.io.Serializable;
import java.util.Date;

@Component
public class JwtUtilities implements Serializable {
//    set thời gian hiệu lực
    public static final long JWT_TOKEN_VALIDITY = 60 * 60 * 24;
//    lấy chữ ký khai báo ở application
    @Value("${jwt.secret}")
    private String jwtSecret;
//    tạo token từ user đăng nhập thành công
    public String generateToken(UserAccountDetail userAccountDetail){
        Date now = new Date();
        Date expire = new Date(now.getTime() + JWT_TOKEN_VALIDITY);

        return Jwts.builder()
//                lấy id account
                .setSubject(Long.toString(userAccountDetail.getAccount().getId()))
//                lấy thời gian đăng nhập
                .setIssuedAt(now)
//                lấy thời gian hết hạn
                .setExpiration(expire)
//                lấy công nghệ mã hóa và lồng chữ ký phía sau
                .signWith(SignatureAlgorithm.ES512, jwtSecret)
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
        } catch (UnsupportedJwtException e){
            System.out.println("Không hỗ trợ");
        } catch (IllegalArgumentException e){
            System.out.println("Mã trống");
        }
        return false;
    }
    public String getJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (!bearerToken.equals("") && bearerToken != null && bearerToken.startsWith("Bearer ")){
            return bearerToken.substring(7);
        } else {
            return null;
        }
    }
}

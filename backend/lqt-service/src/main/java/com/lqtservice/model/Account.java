package com.lqtservice.model;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "accounts")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "isDeleted",columnDefinition = "integer default 0")
    private Integer isDelete;
    @Column(name = "username", columnDefinition = "varchar(255)")
    private String username;
    @Column(name = "password", columnDefinition = "varchar(255)")
    private String password;
    @Column(name = "avatar", columnDefinition = "varchar(255) default 'https://firebasestorage.googleapis.com/v0/b/lqt-service.appspot.com/o/avatar%2Favatar-default.png?alt=media&token=f018750a-bbae-4db3-bb58-c8a9bc3b6571'")
    private String avatar;
    @Column(name = "email", columnDefinition = "varchar(255)")
    private String email;
    @ManyToOne
    @JoinColumn(name = "accountRoleId", referencedColumnName = "id")
    private AccountRole accountRole;
}

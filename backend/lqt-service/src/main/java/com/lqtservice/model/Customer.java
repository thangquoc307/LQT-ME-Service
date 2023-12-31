package com.lqtservice.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import javax.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "isDeleted",columnDefinition = "integer default 0")
    private Integer isDelete;
    @OneToOne
    @JoinColumn(name = "accountId", referencedColumnName = "id")
    private Account account;
    @Column(name = "phone", columnDefinition = "varchar(20)")
    private String phone;
    @Column(name = "name", columnDefinition = "varchar(255)")
    private String name;
    @Column(name = "birthday", columnDefinition = "date")
    private LocalDate birthday;
    @Column(name = "licenseIdCard", columnDefinition = "varchar(20)")
    private String licenseIdCard;
    @JsonBackReference
    @OneToMany(mappedBy = "customer")
    private List<Request> requests;
    @JsonBackReference
    @OneToMany(mappedBy = "customer")
    private List<Room> rooms;
}

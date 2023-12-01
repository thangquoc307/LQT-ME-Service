package com.lqtservice.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "bills")
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "isDeleted",columnDefinition = "integer default 0")
    private Integer isDelete;
    @OneToOne
    @JoinColumn(name = "requestId", referencedColumnName = "id")
    private Request request;
    @JsonBackReference
    @OneToMany(mappedBy = "bill")
    private List<BillDetail> billDetails;
}

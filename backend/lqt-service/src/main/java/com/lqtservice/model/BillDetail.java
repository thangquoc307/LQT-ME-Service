package com.lqtservice.model;

import javax.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "bill_details")
public class BillDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "isDeleted",columnDefinition = "integer default 0")
    private Integer isDelete;
    @ManyToOne
    @JoinColumn(name = "materialId", referencedColumnName = "id")
    private Material material;
    @ManyToOne
    @JoinColumn(name = "billId", referencedColumnName = "id")
    private Bill bill;
    @Column(name = "quantity", columnDefinition = "integer")
    private Integer quantity;
    @Column(name = "price", columnDefinition = "bigint")
    private Long price;
}

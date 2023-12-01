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
@Table(name = "materials")
public class Material {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "isDeleted",columnDefinition = "integer default 0")
    private Integer isDelete;
    @Column(name = "name", columnDefinition = "varchar(255)")
    private String name;
    @Column(name = "manufacturer", columnDefinition = "varchar(255)")
    private String manufacturer;
    @Column(name = "quantity", columnDefinition = "integer")
    private Integer quantity;
    @JsonBackReference
    @OneToMany(mappedBy = "material")
    private List<MaterialImage> materialImages;
    @JsonBackReference
    @OneToMany(mappedBy = "material")
    private List<BillDetail> billDetails;
}

package com.lqtservice.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "material_images")
public class MaterialImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "isDeleted",columnDefinition = "integer default 0")
    private Integer isDelete;
    @Column(name = "link", columnDefinition = "varchar(255)")
    private String link;
    @ManyToOne
    @JoinColumn(name = "materialId", referencedColumnName = "id")
    private Material material;
}

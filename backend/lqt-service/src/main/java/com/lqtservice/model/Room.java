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
@Table(name = "rooms")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "isDeleted", columnDefinition = "integer default 0")
    private Integer isDelete;
    @Column(name = "name", columnDefinition = "varchar(255)")
    private String name;
    @ManyToOne
    @JoinColumn(name = "customerId", referencedColumnName = "id")
    private Customer customer;
    @Column(name = "level", columnDefinition = "integer")
    private Integer level;
    @JsonBackReference
    @OneToMany(mappedBy = "room")
    private List<RoomPosition> roomPositions;
    @JsonBackReference
    @OneToMany(mappedBy = "room")
    private List<Request> requests;
}

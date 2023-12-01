package com.lqtservice.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "room_positions")
public class RoomPosition {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "isDeleted",columnDefinition = "integer default 0")
    private Integer isDelete;
    @Column(name = "positionX", columnDefinition = "integer")
    private Integer positionX;
    @Column(name = "positionY", columnDefinition = "integer")
    private Integer positionY;
    @Column(name = "sequence", columnDefinition = "integer")
    private Integer sequence;
    @ManyToOne
    @JoinColumn(name = "roomId", referencedColumnName = "id")
    private Room room;
}

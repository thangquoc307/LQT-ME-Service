package com.lqtservice.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "requests")
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "isDeleted",columnDefinition = "integer default 0")
    private Integer isDelete;
    @Column(name = "time_request", columnDefinition = "datetime default current_timestamp")
    private LocalDateTime timeRequest;
    @Column(name = "time_order", columnDefinition = "datetime")
    private LocalDateTime timeOrder;
    @ManyToOne
    @JoinColumn(name = "requestStatusId", referencedColumnName = "id")
    private RequestStatus requestStatus;
    @ManyToOne
    @JoinColumn(name = "employeeId", referencedColumnName = "id")
    private Employee employee;
    @ManyToOne
    @JoinColumn(name = "customerId", referencedColumnName = "id")
    private Customer customer;
    @ManyToOne
    @JoinColumn(name = "roomId", referencedColumnName = "id")
    private Room room;
    @JsonBackReference
    @OneToOne(mappedBy = "request")
    private Bill bill;
    @JsonBackReference
    @OneToMany(mappedBy = "request")
    private List<Feedback> feedbacks;

}
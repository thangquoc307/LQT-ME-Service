package com.lqtservice.model;
import javax.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "feedbacks")
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "isDeleted",columnDefinition = "integer default 0")
    private Integer isDelete;
    @OneToOne
    @JoinColumn(name = "requestId", referencedColumnName = "id")
    private Request request;
    @Column(name = "comment", columnDefinition = "varchar(255)")
    private String comment;
    @Column(name = "star", columnDefinition = "integer")
    private Integer star;
}

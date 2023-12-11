package com.lqtservice.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import javax.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

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
    @ManyToOne
    @JoinColumn(name = "requestId", referencedColumnName = "id")
    private Request request;
    @Column(name = "comment", columnDefinition = "varchar(255)")
    private String comment;
    @Column(name = "star", columnDefinition = "integer")
    private Integer star;
    @JsonBackReference
    @OneToMany(mappedBy = "feedback")
    private List<FeedbackImage> feedbackImages;
}

package com.lqtservice.model;

import javax.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "feedback_images")
public class FeedbackImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "isDeleted",columnDefinition = "integer default 0")
    private Integer isDelete;
    @Column(name = "link", columnDefinition = "varchar(255)")
    private String link;
    @ManyToOne
    @JoinColumn(name = "feedbackId", referencedColumnName = "id")
    private Feedback feedback;
}

package com.lqtservice.repository;

import com.lqtservice.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface IFeedbackRepository extends JpaRepository<Feedback, Integer> {
    @Transactional
    @Modifying
    @Query(nativeQuery = true,
            value = "insert into feedbacks (`comment`,`star`,`request_id`) " +
                    "values (:comment, :star, :request_id)")
    void sendFeedBack(
            @Param("comment") String comment,
            @Param("star") Integer star,
            @Param("request_id") Integer id);
}

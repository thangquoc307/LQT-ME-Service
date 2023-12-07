package com.lqtservice.repository;

import com.lqtservice.model.Request;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IRequestRepository extends JpaRepository<Request, Integer> {
    @Query(nativeQuery = true,
            value = "select * from lqt_service.requests " +
                    "where month(requests.time_order) = :month " +
                    "and year(requests.time_order) = :year " +
                    "and request_status_id = 1 " +
                    "and is_deleted = 0 order by requests.time_order")
    List<Request> getAllRequestByMonthYear(@Param("month") Integer month,
                                           @Param("year") Integer year);
    @Query(nativeQuery = true,
            value = "select * from lqt_service.requests " +
                    "where request_status_id = 2 " +
                    "and is_deleted = 0 order by time_request")
    List<Request> getAllRequestHolding();
}

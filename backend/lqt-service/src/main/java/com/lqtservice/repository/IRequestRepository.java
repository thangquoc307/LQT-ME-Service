package com.lqtservice.repository;

import com.lqtservice.model.Request;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
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
    @Transactional
    @Modifying
    @Query(nativeQuery = true,
            value = "update lqt_service.requests set is_deleted = 1 " +
                    "where (id = :id)")
    void deleteRequest(@Param("id") Integer id);
    @Query(nativeQuery = true,
           value = "select * from lqt_service.requests " +
                   "where is_deleted = 0 " +
                   "and id = :id")
    Request getRequestById(@Param("id") Integer id);
    @Transactional
    @Modifying
    @Query(nativeQuery = true,
            value = "update lqt_service.requests " +
                    "set employee_id = :employeeId, " +
                    "time_order = :timeOrder, " +
                    "request_status_id = 1 " +
                    "where (id = :id)")
    void confirmRequest(@Param("id") Integer id,
                        @Param("employeeId") Integer employeeId,
                        @Param("timeOrder")LocalDateTime timeOrder);
    @Query(nativeQuery = true,
            value = "select requests.* " +
                    "from requests " +
                    "inner join rooms on rooms.id = requests.room_id " +
                    "where rooms.name = :room " +
                    "and requests.is_deleted = 0 " +
                    "and requests.request_status_id = 2 " +
                    "order by requests.time_request")
    List<Request> getRequestByRoom(@Param("room") String room);
}

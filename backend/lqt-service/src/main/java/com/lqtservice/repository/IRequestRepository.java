package com.lqtservice.repository;

import com.lqtservice.dto.IRequestLevelDto;
import com.lqtservice.dto.IRequestStatisticsDto;
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
                    "and not request_status_id = 2 " +
                    "and is_deleted = 0 order by requests.time_order")
    List<Request> getAllRequestByMonthYear(@Param("month") Integer month,
                                           @Param("year") Integer year);
    @Query(nativeQuery = true,
            value = "select * from lqt_service.requests " +
                    "where month(requests.time_order) = :month " +
                    "and year(requests.time_order) = :year " +
                    "and not request_status_id = 2 " +
                    "and employee_id = :employeeId " +
                    "and is_deleted = 0 order by requests.time_order")
    List<Request> getAllRequestByMonthYearEmployee(
            @Param("month") Integer month,
            @Param("year") Integer year,
            @Param("employeeId") Integer employeeId);
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
    @Transactional
    @Modifying
    @Query(nativeQuery = true,
            value = "update lqt_service.requests set request_status_id = 3 " +
                    "where (id = :id)")
    void doneRequest(@Param("id") Integer id);
    @Query(nativeQuery = true,
            value = "select count(*) as `count`, `level` as `level`, " +
                    "`request_status`.`name` as `status` from `requests` " +
                    "inner join `rooms` on `requests`.`room_id` = `rooms`.`id` " +
                    "inner join `request_status` " +
                    "on `request_status`.`id` = `requests`.`request_status_id` " +
                    "where `requests`.`is_deleted` = 0 " +
                    "and not `request_status`.`id` = 3 " +
                    "group by `rooms`.`level`, `requests`.`request_status_id`")
    List<IRequestStatisticsDto> getCountOfRequest();
    @Query(nativeQuery = true,
            value = "select `rooms`.`name` as `room`, " +
                    "`request_status`.`name` as `status`, " +
                    "count(*) as `count` from `requests` " +
                    "inner join `request_status` on `request_status`.`id` = `requests`.`request_status_id` " +
                    "inner join `rooms` on `rooms`.`id` = `requests`.`room_id` " +
                    "where `requests`.`is_deleted` = 0 " +
                    "and not `requests`.`request_status_id` = 3 " +
                    "and `rooms`.`level` = :level " +
                    "group by `room`, `status`")
    List<IRequestLevelDto> getCountOfRequestByLevel(@Param("level") Integer level);
    @Query(nativeQuery = true,
            value = "select * from requests " +
                    "where customer_id = :id and request_status_id = 1 " +
                    "and is_deleted = 0 order by time_order desc")
    List<Request> getHoldingRequestCustomer(@Param("id") Integer id);
    @Query(nativeQuery = true,
            value = "select * from requests " +
                    "where customer_id = :id and request_status_id = 3 " +
                    "and is_deleted = 0 order by time_request desc")
    List<Request> getDoneRequestCustomer(@Param("id") Integer id);
    @Query(nativeQuery = true,
            value = "select * from requests " +
                    "where customer_id = :id and request_status_id = 2 " +
                    "and is_deleted = 0 order by time_order desc")
    List<Request> getWaitingRequestCustomer(@Param("id") Integer id);
    @Query(nativeQuery = true,
            value = "select * from requests " +
                    "where customer_id = :id " +
                    "and request_status_id = 1 " +
                    "and is_deleted = 0 " +
                    "and month(requests.time_order) = :month " +
                    "and year(requests.time_order) = :year " +
                    "order by time_order desc")
    List<Request> getRequestByMonthYearandCustomer(
            @Param("id") Integer id,
            @Param("month") Integer month,
            @Param("year") Integer year
    );
    @Transactional
    @Modifying
    @Query(nativeQuery = true,
            value = "update lqt_service.requests set " +
                    "time_order = :timeOrder, " +
                    "time_request = :timeRequest, " +
                    "mess = :mess, " +
                    "room_id = :roomId " +
                    "where (id = :id)")
    void editRequest(
            @Param("id") Integer id,
            @Param("timeOrder") LocalDateTime timeOrder,
            @Param("timeRequest") LocalDateTime timeRequest,
            @Param("mess") String mess,
            @Param("roomId") Integer roomId
    );
    @Transactional
    @Modifying
    @Query(nativeQuery = true,
            value = "insert into `requests` " +
                    "(`time_order`,`time_request`, " +
                    "`customer_id`,`request_status_id`, " +
                    "`room_id`,`mess`) " +
                    "values (:timeOrder, :timeRequest, :customerId, 2, :roomId, :mess)")
    void createRequest(
            @Param("timeOrder") LocalDateTime timeOrder,
            @Param("timeRequest") LocalDateTime timeRequest,
            @Param("customerId") Integer customerId,
            @Param("roomId") Integer roomId,
            @Param("mess") String mess
    );
}

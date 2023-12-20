package com.lqtservice.service.impl;

import com.lqtservice.dto.RequestDto;
import com.lqtservice.dto.RequestEditDto;
import com.lqtservice.dto.RequestStatisticsDto;
import com.lqtservice.model.Request;

import java.util.List;
import java.util.Map;

public interface IRequestService {
    List<Request> getAllRequestByMonthYear(Integer month, Integer year);
    List<Request> getAllRequestByMonthYearEmployee(Integer month, Integer year, Integer employeeId);
    List<Request> getAllRequestHolding();
    void deleteRequest(Integer id);
    Request getRequestById(Integer id);
    void confirmRequest(RequestDto requestDto);
    List<Request> getRequestByRoom(String room);
    void doneRequest(Integer id);
    void editRequest(RequestEditDto requestEditDto);
    Map<String, RequestStatisticsDto> getCountOfRequest();
    Map<String, RequestStatisticsDto> getCountOfRequestByLevel(Integer level);
    List<Request> getRequestByCustomer(Integer customerid);
    Map<String, Integer> getRequestByMonthYearandCustomer(Integer id, Integer month, Integer year);
    void createRequest(RequestEditDto requestEditDto,  Integer roomId);
}

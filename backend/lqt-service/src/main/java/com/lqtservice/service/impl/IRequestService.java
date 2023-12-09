package com.lqtservice.service.impl;

import com.lqtservice.dto.RequestDto;
import com.lqtservice.model.Request;

import java.util.List;

public interface IRequestService {
    List<Request> getAllRequestByMonthYear(Integer month, Integer year);
    List<Request> getAllRequestHolding();
    void deleteRequest(Integer id);
    Request getRequestById(Integer id);
    void confirmRequest(RequestDto requestDto);
}

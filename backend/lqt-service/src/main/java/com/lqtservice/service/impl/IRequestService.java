package com.lqtservice.service.impl;

import com.lqtservice.model.Request;

import java.util.List;

public interface IRequestService {
    List<Request> getAllRequestByMonthYear(Integer month, Integer year);
    List<Request> getAllRequestHolding();
}

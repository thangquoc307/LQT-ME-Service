package com.lqtservice.service;

import com.lqtservice.model.Request;
import com.lqtservice.repository.IRequestRepository;
import com.lqtservice.service.impl.IRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestService implements IRequestService {
    @Autowired
    private IRequestRepository requestRepository;

    @Override
    public List<Request> getAllRequestByMonthYear(Integer month, Integer year) {
        return requestRepository.getAllRequestByMonthYear(month, year);
    }

    @Override
    public List<Request> getAllRequestHolding() {
        return requestRepository.getAllRequestHolding();
    }
}

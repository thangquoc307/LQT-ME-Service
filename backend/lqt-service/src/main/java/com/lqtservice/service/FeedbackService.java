package com.lqtservice.service;

import com.lqtservice.model.Feedback;
import com.lqtservice.repository.IFeedbackRepository;
import com.lqtservice.service.impl.IFeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedbackService implements IFeedbackService {
    @Autowired
    private IFeedbackRepository feedbackRepository;
    @Override
    public void addFeedback(Feedback feedback) {
        feedbackRepository.sendFeedBack(feedback.getComment(), feedback.getStar(), feedback.getRequest().getId());
    }
}

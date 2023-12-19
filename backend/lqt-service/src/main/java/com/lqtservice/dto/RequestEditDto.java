package com.lqtservice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RequestEditDto {
    private Integer id;
    private String mess;
    private String room;
    private LocalDateTime timeOrder;
    private LocalDateTime timeRequest;
}

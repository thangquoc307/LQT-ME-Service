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
public class RequestDto {
    private Integer id;
    private LocalDateTime timeOrder;
    private Integer employeeId;
}

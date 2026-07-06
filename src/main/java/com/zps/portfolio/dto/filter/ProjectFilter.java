package com.zps.portfolio.dto.filter;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ProjectFilter {

    private String keyword;

    private Boolean featured;

    private Integer page = 0;

    private Integer size = 6;

    private String sortBy = "id";

    private String sortDir = "asc";

}
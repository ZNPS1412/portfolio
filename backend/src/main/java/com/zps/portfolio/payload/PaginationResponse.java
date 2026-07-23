package com.zps.portfolio.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaginationResponse<T> {

    private List<T> items;

    private int currentPage;

    private int pageSize;

    private long totalItems;

    private int totalPages;

    private boolean hasNext;

    private boolean hasPrevious;

}
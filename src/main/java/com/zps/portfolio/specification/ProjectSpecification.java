package com.zps.portfolio.specification;

import com.zps.portfolio.model.Project;
import org.springframework.data.jpa.domain.Specification;

public final class ProjectSpecification {

    private ProjectSpecification() {
        // to prevent instantiation
    }

    public static Specification<Project> hasKeyword(String keyword) {

        return (root, query, cb) -> {

            if (keyword == null || keyword.isBlank()) {
                return cb.conjunction();
            }

            String search = "%" + keyword.toLowerCase() + "%";

            return cb.or(
                    cb.like(
                            cb.lower(root.get("title")),
                            search
                    ),
                    cb.like(
                            cb.lower(root.get("description")),
                            search
                    ),
                    cb.like(
                            cb.lower(root.get("technologies")),
                            search
                    )
            );
        };
    }

    public static Specification<Project> hasFeatured(Boolean featured) {

        return (root, query, cb) -> {
            if (featured == null) {
                return cb.conjunction();
            }

            return cb.equal(root.get("featured"), featured);
        };
    }

}
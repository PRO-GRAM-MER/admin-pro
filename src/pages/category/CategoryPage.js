import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  selectCategoryList,
  useGetCategoryListQuery,
} from "../../services/categoryApiSlice";
import {
  clearFilters,
  selectCategoryState,
  setCategory,
} from "../../store/categorySlice";
import { TablePage } from "./TablePage";
import { FiltersPage } from "../filters/FiltersPage";
import classes from "./categoryPage.module.css";
import { CategoryPageSkeleton } from "../../component/skeleton/CategoryPageSkeleton";
import { toast } from "react-toastify";

export const CategoryPage = () => {
  const dispatch = useDispatch();

  const params = useParams();
  const category = params.category;

  const appliedFilters = useSelector(selectCategoryState);

  const { isSuccess, error } = useGetCategoryListQuery(appliedFilters, {
    skip: !appliedFilters.category,
  });
  const tableData = useSelector(selectCategoryList);

  useEffect(() => {
    dispatch(setCategory({ category }));
    dispatch(clearFilters());
  }, [category, dispatch]);

  return isSuccess ? (
    <div className={classes.box}>
      <FiltersPage />
      <TablePage data={tableData} />
    </div>
  ) : (
    <CategoryPageSkeleton />
  );
};

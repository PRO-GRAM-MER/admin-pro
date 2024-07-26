import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  selectCategoryList,
  useGetCategoryListQuery,
} from "../../services/categoryApiSlice";
import Cookies from "js-cookie";
import { selectCategoryState, setCategory } from "../../store/categorySlice";
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
    if (error) {
      toast.error(error.data.detail, { pauseOnFocusLoss: false });
    }
    dispatch(
      setCategory({
        category: category,
      })
    );
  }, [category, dispatch, error, tableData.length]);

  return isSuccess ? (
    <div className={classes.box}>
      <FiltersPage />
      <TablePage data={tableData} />
    </div>
  ) : (
    <CategoryPageSkeleton />
  );
};

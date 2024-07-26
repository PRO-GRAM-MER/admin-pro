import React from 'react'
import { useSelector } from 'react-redux';
import { selectVrpList, useGetVrpListQuery } from '../../services/vrpListSlice';

export const VrpPage = () => {
  const filters = useSelector((state) => state.vrpFilter);
  const { data, isSuccess } = useGetVrpListQuery(filters);
  const tableData = useSelector(selectVrpList);
  console.log(tableData)
  return (
    <div>VrpPage</div>
  )
}

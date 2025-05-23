import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisiblePositions } from 'store/positions/position-selectors';
import { addFilter } from 'store/filters/filter-actions';
import { selectFilters } from 'store/filters/filter-selectors';

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) => selectVisiblePositions(state, currentFilters));

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition handleAddFilter={handleAddFilter} key={item.id} {...item} />
      ))}
    </div>
  );
};

export { JobList };

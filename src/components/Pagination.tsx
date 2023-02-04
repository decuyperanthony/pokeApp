/* eslint-disable no-unused-vars */
import { FC } from 'react';
const LIMITS = [25, 50, 75, 100];

type Props = {
  totalPages: number | null;
  page: number;
  onIndexPaginationClick: (val: number) => void;
  onChangeLimit: (val: string) => void;
};

const Pagination: FC<Props> = ({
  totalPages,
  onIndexPaginationClick,
  page,
  onChangeLimit,
}) => {
  return (
    <div style={{ display: 'flex' }}>
      {[...Array(totalPages).keys()].map((n) => {
        const normalizedPaginationIndex = n + 1;
        return (
          <div
            onClick={() => onIndexPaginationClick(normalizedPaginationIndex)}
            style={{
              border:
                page === normalizedPaginationIndex
                  ? '1px solid red'
                  : '1px solid black',
              cursor: 'pointer',
            }}
            key={'foo_' + n}>
            {normalizedPaginationIndex}
          </div>
        );
      })}
      <div>
        <label htmlFor="limits-select">Choose a limit:</label>

        <select
          onChange={(e) => onChangeLimit(e.target.value)}
          name="limits"
          id="limits-select">
          {LIMITS.map((val) => (
            <option key={'select_limit_' + val} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;

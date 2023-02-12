/* eslint-disable no-unused-vars */
import { FC } from 'react';
import MUIPagination from '@mui/material/Pagination';
import {
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from '@mui/material';
import { HEIHGT_APP_BAR } from './HeaderAppBar';

const LIMITS = [25, 50, 75, 100];

type Props = {
  onIndexPaginationClick: (val: number) => void;
  onLimitChange: (val: string) => void;
  totalPages: number;
  page: number;
  limit: number;
};

const Pagination: FC<Props> = ({
  onIndexPaginationClick,
  onLimitChange,
  totalPages,
  page,
  limit,
}) => {
  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      height={HEIHGT_APP_BAR}
      alignItems="center">
      <Stack spacing={2} direction="row" alignItems="center">
        <InputLabel id="limits-select">Limits</InputLabel>

        <Select
          onChange={(event: SelectChangeEvent) =>
            onLimitChange(event.target.value)
          }
          size="small"
          name="limits"
          value={limit.toString()}
          id="limits-select">
          {LIMITS.map((val) => (
            <MenuItem key={'select_limit_' + val} value={val}>
              {val}
            </MenuItem>
          ))}
        </Select>
      </Stack>

      <MUIPagination
        siblingCount={0}
        onChange={(_, value) => onIndexPaginationClick(value)}
        variant="outlined"
        count={totalPages}
        page={page}
        size="small"
      />
    </Stack>
  );
};

export default Pagination;

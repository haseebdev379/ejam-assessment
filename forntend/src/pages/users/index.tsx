import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { CiSearch } from 'react-icons/ci';

import Input from '@/components/input';
import Pagination from '@/components/pagination';
import UserList from '@/components/users/user-list';

import { fetchUsers } from '@/lib/store/users/usersSlice';

import { useAppDispatch } from '@/lib/hooks/useAppDispatch.hook';
import { useAppSelector } from '@/lib/hooks/useAppSelector.hook';
import useDebounce from '@/lib/hooks/useDebounce.hook';

import { USERS_PER_PAGE } from '@/lib/constants';

export default function Users() {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultValue = searchParams.get('search');

  const { total, loading } = useAppSelector((state) => state.users);

  const [searchValue, setSearchValue] = useState(defaultValue);
  const [pageNo, setPageNo] = useState(1);

  const debouncedSearchValue = useDebounce(searchValue);

  useEffect(() => {
    dispatch(
      fetchUsers({
        searchTerm: debouncedSearchValue || '',
        limit: USERS_PER_PAGE,
        pageNo,
      })
    );
  }, [debouncedSearchValue, pageNo, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setPageNo(1);

    if (searchValue.trim() === '') {
      const params = new URLSearchParams(searchParams);
      params.delete('search');
      setSearchParams(params);
    } else {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        search: searchValue,
      });
    }
    setSearchValue(searchValue);
  };

  const handlePageChange = (page: number) => {
    setPageNo(page);
  };

  return (
    <main className="h-screen w-screen p-5 flex flex-col gap-4">
      <Input
        placeholder="Search"
        variant="filled"
        startIcon={<CiSearch />}
        id="search"
        onChange={handleChange}
        defaultValue={defaultValue || ''}
      />

      <div className="overflow-x-auto mb-10">
        <UserList />
      </div>
      <div className="fixed bottom-1 left-0 right-0 bg-gray-100 py-1">
        <Pagination
          currentPage={pageNo}
          totalPages={Math.ceil(total / USERS_PER_PAGE)}
          onPageChange={handlePageChange}
          loading={loading}
        />
      </div>
    </main>
  );
}

import { useState } from 'react';

import { AiOutlineEye } from 'react-icons/ai';

import Button from '@/components/button';
import DataNotFound from '@/components/data-not-found';
import Modal from '@/components/modal';
import * as Table from '@/components/table';
import UserDetails from '@/components/users/user-details';
import UsersSkeleton from '@/components/users/users.skeleton';

import { useAppSelector } from '@/lib/hooks/useAppSelector.hook';

import { IUser } from '@/lib/types/users.types';

export default function UserList() {
  const { loading, users = [] } = useAppSelector((state) => state.users);

  const [user, setUser] = useState<IUser | null>(null);

  if (!loading && users?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <DataNotFound text="No users found" />
      </div>
    );
  }

  return (
    <>
      <Table.Table>
        <Table.TableHead>
          <Table.TableRow>
            <Table.TableHeaderCell>First Name</Table.TableHeaderCell>
            <Table.TableHeaderCell>Last Name</Table.TableHeaderCell>
            <Table.TableHeaderCell>Email</Table.TableHeaderCell>
            <Table.TableHeaderCell>Phone</Table.TableHeaderCell>
            <Table.TableHeaderCell>Company</Table.TableHeaderCell>
            <Table.TableHeaderCell className="w-max text-center">
              Actions
            </Table.TableHeaderCell>
          </Table.TableRow>
        </Table.TableHead>
        <Table.TableBody>
          {loading ? (
            <UsersSkeleton />
          ) : (
            users.map((user) => (
              <Table.TableRow key={user.id}>
                <Table.TableCell>{user.firstName}</Table.TableCell>
                <Table.TableCell>{user.lastName}</Table.TableCell>
                <Table.TableCell>{user.email}</Table.TableCell>
                <Table.TableCell>{user.phone}</Table.TableCell>
                <Table.TableCell>{user.company.name}</Table.TableCell>
                <Table.TableCell className="text-center w-1/12 ">
                  <Button
                    onClick={() => setUser(user)}
                    endIcon={<AiOutlineEye />}
                  >
                    View
                  </Button>
                </Table.TableCell>
              </Table.TableRow>
            ))
          )}
        </Table.TableBody>
      </Table.Table>
      {user && (
        <Modal isOpen onClose={() => setUser(null)}>
          <UserDetails user={user} />
        </Modal>
      )}
    </>
  );
}

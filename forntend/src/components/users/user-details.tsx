import { IUser } from '@/lib/types/users.types';

interface IUserDetailProps {
  user: IUser;
}
export default function UserDetails({ user }: IUserDetailProps) {
  return (
    <div className="p-6 bg-white space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
        User Details
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <p className="text-gray-700">
          <span className="font-semibold text-gray-900">First Name: </span>
          {user.firstName}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-900">Last Name: </span>
          {user.lastName}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-900">Email: </span>
          {user.email}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-900">Phone: </span>
          {user.phone}
        </p>
      </div>
      <h3 className="text-xl font-bold text-gray-800 border-t pt-4">
        Company Details
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <p className="text-gray-700">
          <span className="font-semibold text-gray-900">Name: </span>
          {user.company.name}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-900">Address: </span>
          {user.company.address.address}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-900">Department: </span>
          {user.company.department}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-900">Title: </span>
          {user.company.title}
        </p>
      </div>
    </div>
  );
}

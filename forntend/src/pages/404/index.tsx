import { Link } from 'react-router-dom';

import { TbError404 } from 'react-icons/tb';

import Button from '@/components/button';

import { ROUTES } from '@/lib/constants/routes';

export default function PageNotFound() {
  return (
    <div className="flex justify-center items-center h-full flex-col gap-1">
      <TbError404 size={100} className="text-primary" />
      <h1 className="text-3xl font-bold text-primary">Page Not Found</h1>
      <Link to={ROUTES.USERS} className="mt-4">
        <Button>Go to Home</Button>
      </Link>
    </div>
  );
}

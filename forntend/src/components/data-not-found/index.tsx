import { MdOutlineSearchOff } from 'react-icons/md';

interface DataNotFoundProps {
  text: string;
}

export default function DataNotFound({ text }: DataNotFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
      <MdOutlineSearchOff className="text-gray-500 text-6xl" />
      <h2 className="text-xl font-semibold text-gray-700">{text}</h2>
    </div>
  );
}

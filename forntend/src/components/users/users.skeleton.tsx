import * as Table from '@/components/table';

export default function UsersSkeleton() {
  return (
    <>
      {Array.from({ length: 8 }).map((_, rowIndex) => (
        <Table.TableRow key={rowIndex}>
          {Array.from({ length: 6 }).map((_, colIndex) => (
            <Table.TableCell key={colIndex}>
              <div className="w-full h-14 bg-gray-200 rounded animate-pulse" />
            </Table.TableCell>
          ))}
        </Table.TableRow>
      ))}
    </>
  );
}

import { useState, useEffect } from 'react';
import { ENDPOINTS } from '@/lib/constants';
import { Superhero } from '@/types/superhero';
import SuperheroForm from '@/components/SuperheroForm';
import Modal from '@/components/modal';
import Button from '@/components/button';

export default function SuperheroesPage() {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchSuperheroes = async () => {
    try {
      const response = await fetch(ENDPOINTS.SUPERHEROES.GET_ALL);
      const data = await response.json();
      if (data.status === 200) {
        setSuperheroes(data.data);
      } else {
        console.error('Error fetching superheroes:', data.message);
      }
    } catch (error) {
      console.error('Error fetching superheroes:', error);
    }
  };

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  const handleAddSuperhero = async (superhero: Omit<Superhero, 'id'>) => {
    try {
      const response = await fetch(ENDPOINTS.SUPERHEROES.CREATE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(superhero),
      });
      
      if (response.ok) {
        fetchSuperheroes();
      }
    } catch (error) {
      console.error('Error adding superhero:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Superheroes</h1>
        <Button onClick={() => setIsModalOpen(true)}>Add Superhero</Button>
      </div>

      {superheroes.length === 0 ? (
        <p className="text-center text-gray-500">No superheroes found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {superheroes.map((hero) => (
            <SuperheroCard key={hero.id} hero={hero} />
          ))}
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <SuperheroForm
          onSubmit={handleAddSuperhero}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
}

function SuperheroCard({ hero }: { hero: Superhero }) {
  return (
    <div className="border rounded-lg p-6 shadow-lg bg-white">
      <h3 className="font-bold text-xl mb-2">{hero.alias}</h3>
      <p className="text-gray-700 mb-1"><strong>Special Ability:</strong> {hero.specialAbility}</p>
      <p className="text-gray-700"><strong>Modest Rating:</strong> {hero.modestRating}</p>
    </div>
  );
}
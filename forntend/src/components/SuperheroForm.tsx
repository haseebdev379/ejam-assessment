import React, { useState } from 'react';
import Button from '@/components/button';
import { CreateSuperheroData } from '@/types/superhero';

interface SuperheroFormProps {
  onSubmit: (superhero: CreateSuperheroData) => void;
  onClose: () => void;
}

export default function SuperheroForm({ onSubmit, onClose }: SuperheroFormProps) {
  const [formData, setFormData] = useState<CreateSuperheroData>({
    alias: '',
    specialAbility: '',
    modestRating: 1
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'modestRating' ? Number(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Register a New Superhero</h2>
      <div className="space-y-2">
        <label htmlFor="alias" className="block text-sm font-medium text-gray-700">Alias</label>
        <input
          type="text"
          id="alias"
          name="alias"
          value={formData.alias}
          onChange={handleChange}
          className="block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter superhero alias"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="specialAbility" className="block text-sm font-medium text-gray-700">Special Ability</label>
        <input
          type="text"
          id="specialAbility"
          name="specialAbility"
          value={formData.specialAbility}
          onChange={handleChange}
          className="block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter special ability"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="modestRating" className="block text-sm font-medium text-gray-700">Modest Rating (1-10)</label>
        <input
          type="number"
          id="modestRating"
          name="modestRating"
          value={formData.modestRating}
          onChange={handleChange}
          min="1"
          max="10"
          className="block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <div className="flex justify-end space-x-4 mt-6">
        <Button onClick={onClose} variant="outlined">Cancel</Button>
        <Button type="submit">Add Superhero</Button>
      </div>
    </form>
  );
}
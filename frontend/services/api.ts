// frontend/services/api.ts

const API_URL = "http://127.0.0.1:5000/api";

export interface Friend {
  id?: number;
  name: string;
  role: string;
  description: string;
  gender: string;
  imgUrl?: string;
}

// Get all friends
export const getFriends = async (): Promise<Friend[]> => {
  const response = await fetch(`${API_URL}/friends`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch friends');
  }
  
  return response.json();
};

// Create a new friend
export const createFriend = async (friend: Friend): Promise<void> => {
  const response = await fetch(`${API_URL}/friends`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(friend),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create friend');
  }
  
  return response.json();
};

// Update a friend
export const updateFriend = async (id: number, friend: Partial<Friend>): Promise<Friend> => {
  const response = await fetch(`${API_URL}/friends/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(friend),
  });
  
  if (!response.ok) {
    throw new Error('Failed to update friend');
  }
  
  return response.json();
};

// Delete a friend
export const deleteFriend = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/friends/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error('Failed to delete friend');
  }
  
  return response.json();
};
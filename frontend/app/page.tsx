// frontend/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Friend, getFriends, createFriend, updateFriend, deleteFriend } from "@/services/api";
import { FriendCard } from "@/components/friends/FriendCard";
import { FriendForm } from "@/components/friends/FriendForm";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentFriend, setCurrentFriend] = useState<Friend | undefined>(undefined);

  // Fetch friends on component mount
  useEffect(() => {
    const loadFriends = async () => {
      try {
        const data = await getFriends();
        setFriends(data);
      } catch (error) {
        toast.error("Failed to load friends");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    
    loadFriends();
  }, []);

  const handleAddFriend = () => {
    setCurrentFriend(undefined);
    setIsFormOpen(true);
  };

  const handleEditFriend = (friend: Friend) => {
    setCurrentFriend(friend);
    setIsFormOpen(true);
  };

  const handleDeleteFriend = async (id: number) => {
    if (confirm("Are you sure you want to delete this friend?")) {
      try {
        await deleteFriend(id);
        setFriends(friends.filter(friend => friend.id !== id));
        toast.success("Friend deleted successfully");
      } catch (error) {
        toast.error("Failed to delete friend");
        console.error(error);
      }
    }
  };

  const handleFormSubmit = async (formData: Friend) => {
    try {
      if (currentFriend?.id) {
        // Update existing friend
        const updatedFriend = await updateFriend(currentFriend.id, formData);
        setFriends(friends.map(friend => 
          friend.id === currentFriend.id ? updatedFriend : friend
        ));
        toast.success("Friend updated successfully");
      } else {
        // Create new friend
        await createFriend(formData);
        // Reload friends to get the new friend with ID
        const refreshedFriends = await getFriends();
        setFriends(refreshedFriends);
        toast.success("Friend added successfully");
      }
      
      setIsFormOpen(false);
    } catch (error) {
      toast.error("Error saving friend");
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">My Friends</h1>
          <Button onClick={handleAddFriend}>Add Friend</Button>
        </div>
      </header>

      {loading ? (
        <div className="flex justify-center">
          <p>Loading friends...</p>
        </div>
      ) : friends.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No friends found. Add your first friend!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {friends.map((friend) => (
            <FriendCard
              key={friend.id}
              friend={friend}
              onEdit={handleEditFriend}
              onDelete={handleDeleteFriend}
            />
          ))}
        </div>
      )}

      <FriendForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleFormSubmit}
        initialData={currentFriend}
      />
    </div>
  );
}
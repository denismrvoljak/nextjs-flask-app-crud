// frontend/components/friends/FriendCard.tsx
import { Friend } from "@/services/api";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface FriendCardProps {
  friend: Friend;
  onEdit: (friend: Friend) => void;
  onDelete: (id: number) => void;
}

export function FriendCard({ friend, onEdit, onDelete }: FriendCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-4">
          {friend.imgUrl && (
            <div className="flex-shrink-0">
              <Image 
                src={friend.imgUrl} 
                alt={friend.name} 
                width={60} 
                height={60} 
                className="rounded-full"
              />
            </div>
          )}
          <div>
            <CardTitle>{friend.name}</CardTitle>
            <CardDescription>{friend.role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{friend.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" onClick={() => onEdit(friend)}>
          Edit
        </Button>
        <Button 
          variant="destructive" 
          size="sm" 
          onClick={() => onDelete(friend.id!)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
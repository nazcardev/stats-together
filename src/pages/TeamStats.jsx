import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const initialTeamMembers = [
  { id: 1, name: "Alice Johnson", avatar: "/placeholder.svg", holesInOne: 2, strokesTaken: 1250 },
  { id: 2, name: "Bob Smith", avatar: "/placeholder.svg", holesInOne: 1, strokesTaken: 1300 },
  { id: 3, name: "Charlie Brown", avatar: "/placeholder.svg", holesInOne: 0, strokesTaken: 1400 },
  { id: 4, name: "Diana Ross", avatar: "/placeholder.svg", holesInOne: 3, strokesTaken: 1150 },
];

const TeamStats = () => {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);

  const handleDelete = (id) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Meet Our Golf Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.id} className="relative">
            <Button
              variant="ghost"
              className="absolute top-2 right-2 p-0 h-6 w-6"
              onClick={() => handleDelete(member.id)}
            >
              <X className="h-4 w-4" />
            </Button>
            <CardHeader className="flex flex-row items-center gap-4 pt-8">
              <Avatar>
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <CardTitle>{member.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">Holes-in-One: {member.holesInOne}</p>
              <p className="text-sm text-gray-500">Total Strokes: {member.strokesTaken}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamStats;

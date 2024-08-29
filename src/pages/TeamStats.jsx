import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialTeamMembers = [
  { id: 1, name: "Alice Johnson", avatar: "/placeholder.svg", holesInOne: 2, strokesTaken: 1250 },
  { id: 2, name: "Bob Smith", avatar: "/placeholder.svg", holesInOne: 1, strokesTaken: 1300 },
  { id: 3, name: "Charlie Brown", avatar: "/placeholder.svg", holesInOne: 0, strokesTaken: 1400 },
  { id: 4, name: "Diana Ross", avatar: "/placeholder.svg", holesInOne: 3, strokesTaken: 1150 },
];

const TeamStats = () => {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [newMember, setNewMember] = useState({ name: '', holesInOne: 0, strokesTaken: 0 });

  const handleDelete = (id) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  };

  const handleAddMember = () => {
    const id = Math.max(...teamMembers.map(m => m.id), 0) + 1;
    setTeamMembers(prevMembers => {
      const updatedMembers = [...prevMembers, { ...newMember, id, avatar: "/placeholder.svg" }];
      return sortTeamMembers(updatedMembers);
    });
    setNewMember({ name: '', holesInOne: 0, strokesTaken: 0 });
  };

  const sortTeamMembers = (members) => {
    return members.sort((a, b) => {
      if (b.holesInOne !== a.holesInOne) {
        return b.holesInOne - a.holesInOne; // Sort by highest holes-in-one
      }
      return a.strokesTaken - b.strokesTaken; // Then by lowest strokes taken
    });
  };

  const sortedTeamMembers = sortTeamMembers([...teamMembers]);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Meet Our Golf Team</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Add Member
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Team Member</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newMember.name}
                  onChange={(e) => setNewMember({...newMember, name: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="holesInOne" className="text-right">
                  Holes-in-One
                </Label>
                <Input
                  id="holesInOne"
                  type="number"
                  value={newMember.holesInOne}
                  onChange={(e) => setNewMember({...newMember, holesInOne: parseInt(e.target.value)})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="strokesTaken" className="text-right">
                  Strokes Taken
                </Label>
                <Input
                  id="strokesTaken"
                  type="number"
                  value={newMember.strokesTaken}
                  onChange={(e) => setNewMember({...newMember, strokesTaken: parseInt(e.target.value)})}
                  className="col-span-3"
                />
              </div>
            </div>
            <Button onClick={handleAddMember}>Add Member</Button>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedTeamMembers.map((member) => (
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

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Golf Team Stats</h1>
        <p className="text-xl text-gray-600 mb-6">Explore our team's performance and achievements!</p>
        <Button asChild>
          <Link to="/team-stats">View Team Stats</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;

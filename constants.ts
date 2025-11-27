import { 
  Shovel, 
  Trees, 
  Fence, 
  Layers, 
  Hammer, 
  Car 
} from 'lucide-react';
import { Service, Testimonial, GalleryItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'paving',
    title: 'Paving',
    description: 'Expert paving solutions for patios and walkways using high-quality stone and concrete materials.',
    icon: Layers
  },
  {
    id: 'artificial-grass',
    title: 'Artificial Grass',
    description: 'Low maintenance, realistic-looking artificial lawns perfect for families and pets all year round.',
    icon: Shovel
  },
  {
    id: 'timber-beds',
    title: 'Timber Beds',
    description: 'Custom raised timber beds for flowers and vegetables, adding structure and warmth to your garden.',
    icon: Hammer
  },
  {
    id: 'driveways',
    title: 'Driveways',
    description: 'Durable and aesthetic driveway installations including block paving, gravel, and resin bound.',
    icon: Car
  },
  {
    id: 'fencing',
    title: 'Fencing',
    description: 'Secure and stylish fencing options to provide privacy and define your property boundaries.',
    icon: Fence
  },
  {
    id: 'landscaping',
    title: 'Landscaping',
    description: 'Complete garden makeovers, from initial design to planting and turfing.',
    icon: Trees
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Homeowner',
    content: 'Absolutely transformed our muddy backyard into a stunning usable space. The artificial grass looks incredible!',
    rating: 5
  },
  {
    id: '2',
    name: 'Mike Thompson',
    content: 'The team was professional, punctual, and the paving work is top-notch. Highly recommended for driveways.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Chen',
    content: 'We love our new timber beds. They added so much character to the garden. Great communication throughout.',
    rating: 5
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', imageUrl: 'https://picsum.photos/800/600?random=1', title: 'Modern Patio', category: 'Paving' },
  { id: '2', imageUrl: 'https://picsum.photos/800/601?random=2', title: 'Lush Green Lawn', category: 'Artificial Grass' },
  { id: '3', imageUrl: 'https://picsum.photos/800/602?random=3', title: 'Cedar Fencing', category: 'Fencing' },
  { id: '4', imageUrl: 'https://picsum.photos/800/603?random=4', title: 'Raised Beds', category: 'Timber Beds' },
  { id: '5', imageUrl: 'https://picsum.photos/800/604?random=5', title: 'Block Driveway', category: 'Driveways' },
  { id: '6', imageUrl: 'https://picsum.photos/800/605?random=6', title: 'Garden Path', category: 'Landscaping' },
];

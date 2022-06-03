import Button from '@/components/Button';
import H1 from '@/components/H1';
import P from '@/components/P';

export interface HeroProps {
  children?: React.ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return (
    <div className="hero-bg">
      {children}
      <div className="container mx-auto">
        <div className="w-1/2">
          <H1>Lore ipsum dolor sit amet, consectetur adipiscing elit.</H1>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam</P>
          <div className="flex flex-row pt-4">
            <Button className="mr-4" primary>
              Button
            </Button>
            <Button>Button</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

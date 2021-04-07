import Button from '../../components/Button';

export default function Header() {
  return (
    <div className="flex justify-around">
      <div className="flex-col justify-start pr-10">
        <h2 className="text-4xl text-black">Ignacio</h2>
        <h2 className="text-4xl text-black">Gurí</h2>
      </div>
      <div>
        <Button type="primary" size="xl">
          LinkedIn
        </Button>
        <Button type="primary" size="xl">
          GitHub
        </Button>
        <Button type="secondary" size="xl">
          Mail
        </Button>
      </div>
    </div>
  );
}

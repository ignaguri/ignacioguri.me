import Button from '../Button';

export default function Header() {
  return (
    <div className="container flex">
      <h2 className="text-4xl text-black">Ignacio Gurí</h2>
      <div>
        <Button type="primary" size="xl">
          LinkedIn
        </Button>
        <Button type="primary" size="xs">
          GitHub
        </Button>
        <Button type="secondary" size="xl">
          Mail
        </Button>
      </div>
    </div>
  );
}

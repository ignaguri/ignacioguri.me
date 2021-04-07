import Button from '../../components/Button';

export default function Header() {
  return (
    <div className="flex justify-around">
      <div className="text-left pr-10">
        <h2 className="text-5xl text-black pb-2">Ignacio</h2>
        <h2 className="text-5xl text-black">Gurí</h2>
      </div>
      <div>
        <Button type="primary" size="large">
          LinkedIn
        </Button>
        <Button type="tertiary" size="medium">
          GitHub
        </Button>
        <Button type="secondary" size="small">
          Mail
        </Button>
      </div>
    </div>
  );
}

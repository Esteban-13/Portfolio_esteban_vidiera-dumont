export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur border-b sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between px-6 py-4">
        <span className="font-bold">Esteban Videira-Dumont</span>

        <div className="flex gap-6 text-sm">
          <a href="#about">À propos</a>
          <a href="#projects">Projets</a>
          <a href="#skills">Compétences</a>
          <a href="#cv">CV</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

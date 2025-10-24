import logo from "@/assets/kokkehjelpen-logo-instagram.png";

const Logo = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-8">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-3xl font-bold text-foreground">Instagram Logo</h1>
        <p className="text-muted-foreground">
          Høyreklikk på logoen under og velg "Lagre bilde som..." for å laste ned
        </p>
        <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
          <img 
            src={logo} 
            alt="KokkeHjelpen Instagram Logo" 
            className="w-full max-w-md"
          />
        </div>
        <div className="text-sm text-muted-foreground">
          <p>Format: PNG</p>
          <p>Størrelse: 1080x1080px</p>
          <p>Perfekt for Instagram profilbilde</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;

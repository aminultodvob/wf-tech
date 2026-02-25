import wfLogo from "@/assets/wf-logo.png";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/[0.06] bg-card/30">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <img
            src={wfLogo}
            alt="WF Technology Logo"
            className="h-7 w-7 object-contain rounded-md"
          />
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WF Technology. All Rights Reserved.
          </span>
        </div>
        <div className="flex gap-6">
          {["Home", "Services", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

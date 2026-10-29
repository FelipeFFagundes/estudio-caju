import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';

export type Galeria = { images: string[]; index: number; title: string };

// Shows the clicked picture large, with arrows to move through its gallery.
export function Lightbox({ galeria, onChange }: { galeria: Galeria | null; onChange: (g: Galeria | null) => void }) {
  const mover = (passo: number) =>
    galeria && onChange({ ...galeria, index: (galeria.index + passo + galeria.images.length) % galeria.images.length });

  return (
    <Dialog open={galeria !== null} onOpenChange={(open) => !open && onChange(null)}>
      <DialogContent showCloseButton={false} className="lightbox">
        <DialogTitle className="sr-only">{galeria?.title}</DialogTitle>
        {galeria && (
          <div
            className="lightbox__frame"
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') mover(-1);
              if (e.key === 'ArrowRight') mover(1);
            }}
          >
            <img src={galeria.images[galeria.index]} alt={`${galeria.title}, imagem ${galeria.index + 1} de ${galeria.images.length}`} />
            {galeria.images.length > 1 && (
              <>
                <button type="button" className="lightbox__nav lightbox__nav--prev" aria-label="Imagem anterior" onClick={() => mover(-1)}>
                  <ChevronLeft size={22} />
                </button>
                <button type="button" className="lightbox__nav lightbox__nav--next" aria-label="Próxima imagem" onClick={() => mover(1)}>
                  <ChevronRight size={22} />
                </button>
              </>
            )}
            <button type="button" className="lightbox__close" aria-label="Fechar imagem" onClick={() => onChange(null)}>
              <X size={20} />
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

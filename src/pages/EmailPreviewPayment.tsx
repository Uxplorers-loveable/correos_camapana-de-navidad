import { useEffect, useState } from 'react';

const EmailPreviewPayment = () => {
  const [emailHtml, setEmailHtml] = useState('');

  useEffect(() => {
    // Cargar el template del correo de pago
    fetch('/smart-gift-payment.html')
      .then(response => response.text())
      .then(html => {
        // Reemplazar variables de ejemplo
        const processedHtml = html
          .replace(/\{\{nombreDestinatario\}\}/g, 'María García')
          .replace(/\{\{documentoDestinatario\}\}/g, 'CC 1.234.567.890')
          .replace(/\{\{valorGift\}\}/g, '$500.000 COP')
          .replace(/\{\{codigoContrato\}\}/g, 'SG-2024-001234');
        setEmailHtml(processedHtml);
      })
      .catch(error => console.error('Error loading email template:', error));
  }, []);

  return (
    <div className="min-h-screen bg-muted/30 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-lg shadow-sm p-6 mb-4">
          <h1 className="text-2xl font-bold text-foreground mb-2">Preview: Correo Smart Gift Activado</h1>
          <p className="text-muted-foreground text-sm mb-4">
            Vista previa del correo que se envía al creador cuando el destinatario activa el Smart Gift
          </p>
          <div className="flex gap-2">
            <a 
              href="/email-preview" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Ver correo de creación
            </a>
            <a 
              href="/" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Ir al Inicio
            </a>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {emailHtml ? (
            <iframe
              srcDoc={emailHtml}
              className="w-full border-0"
              style={{ height: '800px' }}
              title="Email Preview"
            />
          ) : (
            <div className="flex items-center justify-center h-96">
              <p className="text-muted-foreground">Cargando preview...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailPreviewPayment;
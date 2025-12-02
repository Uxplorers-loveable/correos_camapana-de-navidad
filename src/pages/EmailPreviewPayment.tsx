import { useEffect, useState } from 'react';
const EmailPreviewPayment = () => {
  const [emailHtml, setEmailHtml] = useState('');
  useEffect(() => {
    // Cargar el template del correo de pago
    fetch('/src/templates/email/smart-gift-payment.html').then(response => response.text()).then(html => {
      // Reemplazar variables de ejemplo
      const processedHtml = html.replace(/\{\{nombreDestinatario\}\}/g, 'María García').replace(/\{\{documentoDestinatario\}\}/g, 'CC 1.234.567.890').replace(/\{\{valorGift\}\}/g, '$500.000 COP').replace(/\{\{codigoContrato\}\}/g, 'SG-2024-001234');
      setEmailHtml(processedHtml);
    }).catch(error => console.error('Error loading email template:', error));
  }, []);
  return <div className="min-h-screen bg-muted/30 p-4">
      <div className="max-w-4xl mx-auto">
        
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {emailHtml ? <iframe srcDoc={emailHtml} className="w-full border-0" style={{
          height: '800px'
        }} title="Email Preview" /> : <div className="flex items-center justify-center h-96">
              <p className="text-muted-foreground">Cargando preview...</p>
            </div>}
        </div>
      </div>
    </div>;
};
export default EmailPreviewPayment;
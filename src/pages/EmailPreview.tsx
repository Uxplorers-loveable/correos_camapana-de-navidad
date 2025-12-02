import { useEffect, useState } from 'react';
const EmailPreview = () => {
  const [emailHtml, setEmailHtml] = useState('');
  useEffect(() => {
    // Cargar el template del correo
    fetch('/email-template.html').then(response => response.text()).then(html => {
      // Reemplazar variables de ejemplo
      const processedHtml = html.replace(/\{\{qrImage\}\}/g, 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=SMARTGIFT123').replace(/\{\{nombreDestinatario\}\}/g, 'María García');
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
export default EmailPreview;
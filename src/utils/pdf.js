export async function downloadPDF({ title, date, slug, contentText }) {
  const jsPDFModule = await import('jspdf');
  const jsPDF = jsPDFModule.default;
  const doc = new jsPDF();
  let y = 15;
  doc.setFontSize(18);
  doc.setTextColor('#E94E1B');
  doc.text(title, 10, y);
  y += 10;
  doc.setFontSize(12);
  doc.setTextColor('#333');
  doc.text(`Autor: Elton Peixoto`, 10, y);
  y += 7;
  if (date) {
    doc.text(`Data: ${date}`, 10, y);
    y += 7;
  }
  doc.setFontSize(10);
  doc.setTextColor('#111');
  const lines = (contentText || 'Conteúdo do artigo disponível no site.').split('\n');
  lines.forEach(line => {
    if (y > 270) { doc.addPage(); y = 15; }
    doc.text(line, 10, y); y += 7;
  });
  doc.save(`${slug || 'artigo'}.pdf`);
} 

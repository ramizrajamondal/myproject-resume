import * as pdfjsLib from 'pdfjs-dist';
pdfjsLib.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

const extractTextFromPDF = async (file) => {
    if (!file) {
        return;
    }
    const arrayBuffer = await file.arrayBuffer();

    // 2. Load the PDF
    const loadingTask = pdfjsLib.getDocument({
        data: arrayBuffer,
        verbosity: 0
    });
    const pdf = await loadingTask.promise;

    let fullText = "";

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();
    
    // Join the strings on the page
    const pageText = textContent.items.map((item) => item.str).join(" ");
    
    fullText += `Page ${pageNum}: ${pageText}\n\n`;
  }
  return fullText;
};


export default extractTextFromPDF;
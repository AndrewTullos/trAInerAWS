const PDFDocument = require("pdfkit");

function buildPDF(content, outputStream) {
	const doc = new PDFDocument();
	doc.pipe(outputStream);

	doc.fontSize(12).text(content, { align: "left" });

	doc.end();
}

module.exports = { buildPDF };

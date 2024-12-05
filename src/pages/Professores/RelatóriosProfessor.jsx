import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaFileDownload, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { jsPDF } from 'jspdf'; // Biblioteca para gerar PDF

const Relatorios = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [generatedReports, setGeneratedReports] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // Função para gerar o relatório em PDF
  const generateReport = () => {
    if (!startDate || !endDate) {
      alert('Por favor, selecione um período.');
      return;
    }

    setIsGenerating(true);

    // Simulação de dados do relatório
    const reportData = {
      title: 'Relatório de Desempenho de Alunos',
      period: `Período: ${startDate} a ${endDate}`,
      content: 'Aqui estão os dados detalhados do desempenho dos alunos.',
    };

    // Gerando o PDF com jsPDF
    const doc = new jsPDF();
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(16);
    doc.text(reportData.title, 10, 20);
    doc.setFontSize(12);
    doc.text(reportData.period, 10, 30);
    doc.text(reportData.content, 10, 40);

    // Salva o PDF gerado com o nome
    const fileName = `Relatório_${startDate}_a_${endDate}.pdf`;
    doc.save(fileName);

    // Adicionando o relatório gerado à lista de relatórios
    setGeneratedReports([
      ...generatedReports,
      { fileName, startDate, endDate, fileUrl: doc.output('bloburl') },
    ]);
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-purple-900 font-poppins">
      <div className="flex items-center justify-center">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8 w-96 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Link de Voltar */}
          <Link to="/Dashboard-professor" className="flex items-center text-purple-600 mb-4 hover:underline">
            <FaArrowLeft className="mr-2" />
            Voltar
          </Link>

          {/* Título */}
          <h2 className="text-3xl font-semibold mb-4 text-purple-900">Gerar Relatórios</h2>

          {/* Seção para selecionar o período e gerar o relatório */}
          <div className="mb-6">
            <label className="block text-left text-purple-900 mb-2">Data de Início:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg w-full mb-4"
            />

            <label className="block text-left text-purple-900 mb-2">Data de Fim:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg w-full mb-4"
            />

            <button
              onClick={generateReport}
              disabled={isGenerating}
              className={`flex items-center justify-center p-4 ${isGenerating ? 'bg-gray-400' : 'bg-purple-800'} text-white rounded-lg shadow-md transition hover:bg-purple-700 hover:shadow-lg w-full`}
            >
              {isGenerating ? 'Gerando...' : 'Gerar Relatório'}
            </button>
          </div>

          {/* Seção para visualizar relatórios anteriores */}
          <div className="mt-6 text-left">
            <h3 className="text-xl font-semibold mb-4 text-purple-900">Relatórios Anteriores</h3>
            <div className="space-y-4">
              {generatedReports.length === 0 ? (
                <p className="text-gray-500">Nenhum relatório gerado ainda.</p>
              ) : (
                generatedReports.map((report, index) => (
                  <div
                    key={index}
                    className="bg-purple-50 p-4 rounded-lg border border-purple-200 flex justify-between items-center"
                  >
                    <div>
                      <h4 className="text-lg font-semibold text-purple-900">{report.fileName}</h4>
                      <p className="text-sm text-purple-700">Período: {report.startDate} a {report.endDate}</p>
                    </div>
                    <a
                      href={report.fileUrl}
                      download
                      className="text-purple-600 hover:underline flex items-center"
                    >
                      <FaFileDownload className="mr-2" />
                      Baixar
                    </a>
                  </div>
                ))
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Relatorios;


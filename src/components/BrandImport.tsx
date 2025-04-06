
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { csvToBrands, createCsvTemplate } from '@/utils/importUtils';
import { Brand } from '@/data/brands/types';
import { DownloadIcon, UploadIcon, AlertTriangleIcon, CheckCircleIcon } from 'lucide-react';

const BrandImport: React.FC = () => {
  const [csvData, setCsvData] = useState('');
  const [parsedBrands, setParsedBrands] = useState<Brand[]>([]);
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleParse = () => {
    try {
      const brands = csvToBrands(csvData);
      setParsedBrands(brands);
      setImportStatus('success');
      setErrorMessage('');
    } catch (error) {
      console.error('Error parsing CSV:', error);
      setImportStatus('error');
      setErrorMessage(`Error parsing CSV: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const handleDownloadTemplate = () => {
    const template = createCsvTemplate();
    const blob = new Blob([template], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'brand-import-template.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleDownloadJson = () => {
    if (parsedBrands.length === 0) return;
    
    const jsonData = JSON.stringify(parsedBrands, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'imported-brands.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Import Brands</CardTitle>
        <CardDescription>
          Bulk import brands from a CSV file. Download the template to see the expected format.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-end">
          <Button variant="outline" size="sm" onClick={handleDownloadTemplate}>
            <DownloadIcon className="mr-2 h-4 w-4" />
            Download Template
          </Button>
        </div>
        
        <Textarea
          placeholder="Paste your CSV data here..."
          className="min-h-[200px] font-mono text-sm"
          value={csvData}
          onChange={(e) => setCsvData(e.target.value)}
        />
        
        {importStatus === 'success' && (
          <Alert variant="default" className="bg-green-50 border-green-200">
            <CheckCircleIcon className="h-4 w-4 text-green-600" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Successfully parsed {parsedBrands.length} brands. You can now download the JSON file.
            </AlertDescription>
          </Alert>
        )}
        
        {importStatus === 'error' && (
          <Alert variant="destructive">
            <AlertTriangleIcon className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleParse} variant="default">
          <UploadIcon className="mr-2 h-4 w-4" />
          Parse CSV
        </Button>
        
        <Button 
          onClick={handleDownloadJson} 
          disabled={parsedBrands.length === 0}
          variant="secondary"
        >
          <DownloadIcon className="mr-2 h-4 w-4" />
          Download JSON
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BrandImport;

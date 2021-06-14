import React, { useEffect } from 'react';
import Quagga from 'quagga';
import { Video } from './styles';
import { validateIsbn } from '../../../services/books';

function Scanner() {
  let scannerAttemps = 0;
  const onDetected = (result) => {
    Quagga.offDetected(onDetected);
    const isbn = result.codeResult.code;
    console.log(`Código lido: ${isbn}`);
    if (validateIsbn(isbn)) {
      alert(` ISBN válido ${isbn}`);
      return;
    } else {
      if (scannerAttemps >= 5) {
        alert(
          'Não é possível ler o código do livro, por favor, tente novamente.'
        );
      }
    }

    scannerAttemps++;
    Quagga.onDetected(onDetected);
  };

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      Quagga.init(
        {
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: document.querySelector('#Video'), // Or '#yourElement' (optional)
            constraints: {
              facingMode: 'environment',
            },
          },
          numOfWorkers: 1,
          locate: true,
          decoder: {
            // readers: ['code_128_reader'],
            readers: ['ean_reader'],
          },
        },
        (err) => {
          if (err) {
            console.log(err);
            alert(
              'Erro ao abrir a camera do dispositivo, por favor, dê a autorização de uso'
            );
            return;
          }
          console.log('Initialization finished. Ready to start');
          Quagga.start();
        },
        Quagga.onDetected(onDetected)
      );
    }
  }, []);

  return <Video id="Video" />;
}

export default Scanner;

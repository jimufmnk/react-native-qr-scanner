import { NativeModules } from 'react-native';

const QRreader = (fileUrl)=>{
    var QRScanReader = NativeModules.QRScanReader;
    return QRScanReader.readerQR(fileUrl);
}

export { QRreader}
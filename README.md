# download-file-from-url

# Install

```
npm install download-file-from-url --save
```

# Example :

```js
import downloadFileFromURL from 'download-file-from-url';

const DownloadFileFromURL = (url = 'https://example.com/sample-book.pdf') => {
	const downloadFile = () => {
		downloadFileFromURL(url, 'Sample-file');
	};

	return (
		<button onClick={downloadFile} type='button'>
			Download File
		</button>
	);
};
```

# Overview :

Download file from given URL.
URL should contains the file extensions mentioned below

| Extension | Filename                         | Type                                         |
| --------- | -------------------------------- | -------------------------------------------- |
| BMP       | https://example.com/sample.bmp   | Bitmap Image File Format                     |
| GIF       | https://example.com/sample.gif   | Graphics Interchange Format                  |
| HEIC      | https://example.com/sample.heic  | High Efficiency Image File Format            |
| HEIF      | https://example.com/sample.heif  | High Efficiency Image File Format            |
| JPEG      | https://example.com/sample.jpeg  | Joint Photographic Experts Group File Format |
| JPG       | https://example.com/sample.jpg   | Joint Photographic Group File Format         |
| PNG       | https://example.com/sample.png   | Portable Network Graphics File Format        |
| PSD       | https://example.com/sample.psd   | Adobe PhotoShop Bitmap                       |
| SVG       | https://example.com/sample.svg   | Scalable Vector Graphics Image Format        |
| TIFF      | https://example.com/sample.tiff  | Tagged Image File Format                     |
| WEBP      | https://example.com/sample. webp | WebP Image File Format                       |
| CSV       | https://example.com/sample.csv   | Comma Separated Values                       |
| DOC       | https://example.com/sample.doc   | Microsoft Word Binary File Format            |
| DOCX      | https://example.com/sample.docx  | Microsoft Word Open XML Format Document File |
| OTT       | https://example.com/sample.ott   | Open Document Text Template                  |
| PDF       | https://example.com/sample.pdf   | Portable Document File Format                |
| PPT       | https://example.com/sample.ppt   | Microsoft PowerPoint Presentation            |
| TXT       | https://example.com/sample.txt   | Plain Text File Format                       |
| XLS       | https://example.com/sample.xls   | Microsoft Excel Spreadsheet File Format      |
| XLSX      | https://example.com/sample.xlsx  | Microsoft Excel Open XML Format              |
| CFF       | https://example.com/sample.cff   | OpenType CFF                                 |
| OTF       | https://example.com/sample.otf   | OpenType Format                              |
| TTF       | https://example.com/sample.ttf   | TrueType Font                                |
| WOFF      | https://example.com/sample.woff  | Web Open Font Format                         |
| MP3       | https://example.com/sample.mp3   | MPEG-1 Audio Layer-3                         |
| 3GP       | https://example.com/sample.3gp   | Third Generation Partnership Project         |
| MKV       | https://example.com/sample.mkv   | Matroska Multimedia Container                |
| MOV       | https://example.com/sample.mov   | Apple QuickTime Movie                        |
| MP4       | https://example.com/sample.mp4   | MPEG-4 Part 14                               |
| WEBM      | https://example.com/sample.webm  | WEB Media                                    |

document.addEventListener('DOMContentLoaded', () => {
    const fileList = document.getElementById('fileList');
    const fileViewer = document.getElementById('fileViewer');

    const files = [
        { name: 'Test', url: '/File_Login/3_FL/files/3.txt', type: 'Text' },
        // Add more files here
    ];

    files.forEach(file => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = file.name;
        a.addEventListener('click', () => viewFile(file));
        
        const downloadButton = document.createElement('a');
        downloadButton.href = file.url;
        downloadButton.textContent = 'Download';
        downloadButton.download = file.name;
        downloadButton.className = 'download-btn';
        
        li.appendChild(a);
        li.appendChild(downloadButton);
        fileList.appendChild(li);
    });

    function viewFile(file) {
        fileViewer.innerHTML = '';
        if (file.type === 'image') {
            const img = document.createElement('img');
            img.src = file.url;
            fileViewer.appendChild(img);
        } else if (file.type === 'pdf') {
            const iframe = document.createElement('iframe');
            iframe.src = file.url;
            iframe.frameBorder = '0';
            fileViewer.appendChild(iframe);
        }
    }
});

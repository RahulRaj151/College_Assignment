let fileSystem = {
    folder1: { file1: "txt", file2: "jpg" },
    folder2: { subfolder: { file3: "pdf" } },
    folder3: "mp3"
};

function scanFiles(system) {
    for (let key in system) {
        if (typeof system[key] === 'object') {
            scanFiles(system[key]);
        } else {
            console.log(system[key]);
        }
    }
}

scanFiles(fileSystem);

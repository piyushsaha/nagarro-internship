const copyArea = document.getElementById("copy-input");
const pasteArea = document.getElementById("paste-input");
const copyBtn = document.getElementById("copy-btn");
const pasteBtn = document.getElementById("paste-btn");

copyBtn.addEventListener("click", () => {
    copyArea.select();
    copyArea.setSelectionRange(0, 1000);
    navigator.clipboard.writeText(copyArea.value);
    copyBtn.innerHTML = '<i class="fas fa-solid fa-check"></i> Copied!';
    copyBtn.classList.remove('btn-dark');
    copyBtn.classList.add('btn-success');
    setTimeout(() => {
        copyBtn.innerHTML = `<i class="fas fa-solid fa-copy"></i> Copy`;
        copyBtn.classList.remove('btn-success');
        copyBtn.classList.add('btn-dark');
    }, 3000);
});

pasteBtn.addEventListener("click", () => {
    navigator.clipboard
        .readText()
        .then((clipboardText) => (pasteArea.innerText = clipboardText));

    pasteBtn.innerHTML = `<i class="fas fa-solid fa-check"></i> Pasted!`;
    pasteBtn.classList.remove('btn-dark');
    pasteBtn.classList.add('btn-success');
    setTimeout(() => {
        pasteBtn.innerHTML = `<i class="fas fa-solid fa-copy"></i> Paste`;
        pasteBtn.classList.remove('btn-success');
        pasteBtn.classList.add('btn-dark');
    }, 3000);
});
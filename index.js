

const downloadbutton = document.querySelector(".btn");
downloadbutton.addEventListener('click', () => {
    const resumeURL = 'portfolio.pdf';
    const link = document.createElement('a');
    link.href = resumeURL;
    link.download = "Neha's portfolio";
    link.click();
})

const accessKey = "AjooAi5pWaOHf2HNAmZ1Qz2WO6FlRqP3purziTgrvRE"; 

document.getElementById("getFlower").addEventListener("click", getFlower);

async function getFlower() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?query=flower&client_id=${accessKey}`);
        
        if (!response.ok) {
            throw new Error(`API isteği başarısız: ${response.status}`);
        }

        const data = await response.json();
        const imageUrl = data.urls.regular;
        const flowerName = data.alt_description || "Bilinmeyen Çiçek";

        document.getElementById("flowerImage").src = imageUrl;
        document.getElementById("flowerImage").style.display = "block";
        document.getElementById("flowerName").innerText = flowerName;
        
    } catch (error) {
        console.error("Hata:", error);
        document.getElementById("flowerName").innerText = "Bir hata oluştu, lütfen tekrar deneyin.";
    }
}

import os
import json
from bs4 import BeautifulSoup

def extract_relevant_text(html_content):
    """Funkció, ami a HTML-ből kinyeri a releváns szöveget"""
    soup = BeautifulSoup(html_content, "html.parser")
    
    # Távolítsuk el a nem fontos részeket (pl. script, style)
    for script in soup(["script", "style", "nav", "footer", "header", "aside"]):
        script.extract()
    
    # Csak a látható szöveg maradjon
    text = soup.get_text(separator=" ", strip=True)
    
    return text

def clean_url(file_path, root_directory, base_url, website_name):
    """Funkció, ami a fájl elérési útját URL-ként alakítja át"""
    # Relatív útvonal a gyökérkönyvtárhoz
    relative_path = os.path.relpath(file_path, root_directory)
    
    # Redundáns részek eltávolítása
    clean_path = relative_path.replace("\\", "/")
    
    # Az alap URL + a weboldal neve + a fájl relatív elérési útja
    full_url = f"{base_url}/{website_name}/{clean_path}"
    
    return full_url

def convert_html_to_json(directory, base_url):
    """A HTML fájlokat JSON formátumba konvertálja, a letöltött weboldal gyökérkönyvtárából"""
    json_data = []

    # A weboldal neve a directory utolsó mappája
    website_name = os.path.basename(os.path.normpath(directory))

    # Csak a megadott mappa fájljait dolgozzuk fel
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".html"):  # Csak HTML fájlokat dolgozzunk fel
                filepath = os.path.join(root, file)
                with open(filepath, "r", encoding="utf-8") as f:
                    html_content = f.read()
                
                text_content = extract_relevant_text(html_content)

                # Az URL megtisztítása
                file_url = clean_url(filepath, directory, base_url, website_name)

                # Hozzáadjuk az adatokat a JSON fájlhoz
                json_data.append({
                    "file_name": file,
                    "url": file_url,
                    "content": text_content
                })

    # JSON fájl létrehozása
    output_file = "output.json"
    with open(output_file, "w", encoding="utf-8") as json_file:
        json.dump(json_data, json_file, ensure_ascii=False, indent=4)

    print(f"JSON fájl létrehozva: {output_file}")

# Példa a futtatásra
downloaded_dir = "C:\My Web Sites\gyakorlat2"  # A letöltött weboldal gyökérkönyvtára
base_url = "https://sdaniel2000.github.io"  # Az alap URL, ahol a fájlok elérhetők

convert_html_to_json(downloaded_dir, base_url)

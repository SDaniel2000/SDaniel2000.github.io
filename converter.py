import os
import json
from bs4 import BeautifulSoup

def extract_text(html_content):
    
    soup = BeautifulSoup(html_content, "html.parser")
    
    # HTML tisztítása
    for script in soup(["script", "style", "nav", "footer", "header", "aside"]):
        script.extract()
    
    
    text = soup.get_text(separator=" ", strip=True)
    
    return text

def clean_url(file_path, root_directory, base_url, website_name):
    
    
    relative_path = os.path.relpath(file_path, root_directory)
    
    #Redundáns részek eltávolítása
    clean_path = relative_path.replace("\\", "/")
    
    #Összefűzés
    full_url = f"{base_url}/{website_name}/{clean_path}"
    
    return full_url

def convert_html_to_json(directory, base_url):
    
    json_data = []

    
    website_name = os.path.basename(os.path.normpath(directory))

    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".html"):  
                filepath = os.path.join(root, file)
                with open(filepath, "r", encoding="utf-8") as f:
                    html_content = f.read()
                
                text_content = extract_text(html_content)

                #Az URL megtisztítása
                file_url = clean_url(filepath, directory, base_url, website_name)

                #Adatok JSON filehoz 
                json_data.append({
                    "file_name": file,
                    "url": file_url,
                    "content": text_content
                })

    #JSON fájl létrehozása
    output_file = "output.json"
    with open(output_file, "w", encoding="utf-8") as json_file:
        json.dump(json_data, json_file, ensure_ascii=False, indent=4)

    print(f"JSON fájl létrehozva: {output_file}")


downloaded_dir = "C:\My Web Sites\gyakorlat2"  # A letöltött weboldal gyökérkönyvtára
base_url = "https://sdaniel2000.github.io"  # Az alap URL, mivel github pages-t használok

convert_html_to_json(downloaded_dir, base_url)

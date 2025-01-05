import os
import json
from bs4 import BeautifulSoup

def extract_text(html_content):
    
    soup = BeautifulSoup(html_content, "html.parser")
    
   
    for script in soup(["script", "style", "nav", "footer", "header", "aside"]):
        script.extract()
    
    text = soup.get_text(separator=" ", strip=True)
    return text





def url(file_path, root_directory, base_url, website_name):
    
    relative_path = os.path.relpath(file_path, root_directory)
   
    clean_path = relative_path.replace("\\", "/")
   
    full_url = f"{base_url}/{website_name}/{clean_path}"
    
    return full_url





def json_conv(directory, base_url):
    


    json_data = []

    
    website = os.path.basename(os.path.normpath(directory))
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".html"):  
                filepath = os.path.join(root, file)
                with open(filepath, "r", encoding="utf-8") as f:
                    html_content = f.read()
                
                text_content = extract_text(html_content)

                file_url = url(filepath, directory, base_url, website)

                json_data.append({
                    "file_name": file,
                    "url": file_url,
                    "content": text_content
                })
    output_file = "output.json"
    with open(output_file, "w", encoding="utf-8") as json_file:
        json.dump(json_data, json_file, ensure_ascii=False, indent=4)





    print(f"JSON fájl létrehozva: {output_file}")
    
directory = "C:\My Web Sites\gyakorlat2"  # <--- A letöltött weboldal gyökérkönyvtára
url = "https://sdaniel2000.github.io"  # <--- Az alap URL ahol a fájlok elérhetők, mivel github pages-t használtam.

json_conv(directory, url)

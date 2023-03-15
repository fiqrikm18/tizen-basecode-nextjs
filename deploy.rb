def readFile()
    file = File.open("./out/index.html")
    data = file.read
    file.close

    return data
end

def writeFile(html_data)
    File.write("./out/index.html", html_data)
end

def main()
    system("npm run build")
    index_html = readFile()

    # Append script tags to head
    index_html.insert(index_html.index(/<\/noscript>/) + "</noscript>".length, "<script type=\"text/javascript\" src=\"$WEBAPIS/webapis/webapis.js\"></script>")

    writeFile(index_html)
    system("npm run tizen-deploy")
    system("npm run tizen-run")
end

main()

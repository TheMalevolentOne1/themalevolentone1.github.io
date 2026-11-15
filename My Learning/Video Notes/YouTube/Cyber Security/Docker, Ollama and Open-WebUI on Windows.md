---
tags:
  - Video-Notes
  - Docker
  - Ollama
---
[[Video Notes]]

---

<iframe title="How to Install Ollama, Docker, and Open WebUI on Windows" src="https://www.youtube.com/embed/OMsN4ZFpdxo?feature=oembed" height="113" width="200" allowfullscreen="" allow="fullscreen" style="aspect-ratio: 1.76991 / 1; width: 100%; height: 100%;"></iframe>

---

- Download Ollama
- Download Docker
- Open Command Prompt
- Paste 
`docker run -d -p 3000:8080 -e OLLAMA_BASE_URL=https://example.com -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main`
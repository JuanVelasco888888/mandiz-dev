# Mandiz Dev — Sitio Web Corporativo

Stack: React (Vite) + Node.js/Express + MongoDB Atlas  
Deploy: Vercel (frontend) + Render (backend)

---

## Estructura

```
/project
├── /client          → React (Vite)
└── /server          → Node.js + Express
```

---

## Configuración local

### 1. Backend

```bash
cd server
npm install
cp .env.example .env
# Edita .env con tu MONGO_URI real
npm run dev
```

### 2. Frontend

```bash
cd client
npm install
# Crea archivo .env:
echo "VITE_API_URL=http://localhost:5000" > .env
npm run dev
```

### 3. Imágenes locales

Copia tus imágenes en:
```
client/public/images/mandiz1.jpeg
client/public/images/mandiz2.jpeg
```

---

## Deploy paso a paso

### Paso 1 — Subir a GitHub

```bash
git init
git add .
git commit -m "feat: proyecto inicial Mandiz Dev"
git remote add origin https://github.com/JuanVelasco888888/mandiz-dev.git
git push -u origin main
```

### Paso 2 — Deploy Backend en Render

1. Entra a https://render.com → New → Web Service
2. Conecta tu repo de GitHub
3. Configura:
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** Node
4. Variables de entorno (Environment → Add):
   - `MONGO_URI` = tu cadena de MongoDB Atlas
   - `PORT` = 5000
   - `CLIENT_URL` = https://tu-sitio.vercel.app
5. Copia la URL del servicio (ej: `https://mandiz-api.onrender.com`)

### Paso 3 — Deploy Frontend en Vercel

1. Entra a https://vercel.com → New Project
2. Importa tu repo de GitHub
3. Configura:
   - **Root Directory:** `client`
   - **Framework Preset:** Vite
4. Variables de entorno:
   - `VITE_API_URL` = https://mandiz-api.onrender.com
5. Deploy → copia la URL (ej: `https://mandiz.vercel.app`)

### Paso 4 — Conectar frontend ↔ backend

1. En Render, actualiza `CLIENT_URL` con la URL de Vercel
2. Render se redesplegará automáticamente

### Paso 5 — MongoDB Atlas

1. https://cloud.mongodb.com → crear cluster gratuito
2. Database Access → crear usuario
3. Network Access → Allow from anywhere (0.0.0.0/0)
4. Connect → Drivers → copiar URI y pegar en `MONGO_URI`

---

## API Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/services | Lista de servicios |
| GET | /api/projects | Lista de proyectos |
| POST | /api/contact | Enviar mensaje de contacto |
| GET | /api/contact | Ver todos los mensajes (admin) |

---

## Variables de entorno

### server/.env
```
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/mandizdb
PORT=5000
CLIENT_URL=https://tu-sitio.vercel.app
```

### client/.env
```
VITE_API_URL=https://mandiz-api.onrender.com
```

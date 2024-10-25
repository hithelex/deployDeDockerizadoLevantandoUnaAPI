# Usa la imagen base de Node.js
FROM node:20-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos y dependencias
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos
COPY . .

# Expone el puerto de la API
EXPOSE 3000

# Comando de inicio de la API
CMD ["node", "index.js"]

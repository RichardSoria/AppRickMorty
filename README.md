# Pocket Rick and Morty

Una aplicación móvil desarrollada con Angular + Ionic + Firebase que permite buscar personajes de la serie Rick and Morty, visualizar sus detalles y guardar una opinión personalizada en Firestore.  
Ideal para fans con alma crítica y buen gusto por el desarrollo moderno

---

## 🚀 Tecnologías utilizadas

- **Angular Standalone Components**
- **Ionic Framework**
- **Firebase (Firestore)**
- **Rick and Morty API**
- **TypeScript, RxJS, Forms, HttpClient**

---

## ⚙️ Instalación

1. Instala las dependencias:

```bash
npm install
```

2. Agrega la configuración de Firebase en el archivo `environment.ts`:

```ts
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: '...',
    authDomain: '...',
    projectId: '...',
    storageBucket: '...',
    messagingSenderId: '...',
    appId: '...',
    measurementId: '...'
  }
};
```

3. Corre la app:

```bash
ionic serve
```

---

## 🧠 Funcionalidades

### 🔍 Buscar Personaje
- El usuario puede ingresar el nombre de un personaje para buscarlo usando la Rick and Morty API.
- Si no se encuentra el personaje, se muestra un `alert()` amigable.
- Si hay coincidencias, se filtra el resultado por nombre exacto.

### 📄 Ver Detalles del Personaje
Se muestra una tarjeta con:

- Imagen
- Nombre
- Especie
- Estado
- Género
- Origen
- Ubicación actual
- Cantidad de episodios

### 🗣️ Opiniones con Firestore
- El usuario puede escribir una opinión sobre el personaje y guardarla en Firebase Firestore.
- Las opiniones se guardan con los siguientes datos:

  - Texto de opinión
  - Nombre, especie, estado, género
  - Origen, cantidad de episodios
  - URL del personaje

---

## 📁 Estructura principal del código

### `main.ts`
Inicializa la app con:

- `provideIonicAngular()`
- `provideHttpClient()`
- `provideRouter()` con `PreloadAllModules`
- `provideFirebaseApp()` y `provideFirestore()`

![image](https://github.com/user-attachments/assets/a84e5a3d-991b-4d34-ac6d-f2912bfb4232)

### `home.page.ts`
- Componente standalone
- Lógica para `findCharacter()` y `saveOpinion()`
- Validaciones con `alert()` si falta el nombre o la opinión

![image](https://github.com/user-attachments/assets/0eb3aa82-6676-4af6-8953-65659c303d41)
![image](https://github.com/user-attachments/assets/a460c505-b231-4c51-a356-13b1c5e8e174)
![image](https://github.com/user-attachments/assets/cb98b34c-3da5-4356-a14d-c19e0baa27a1)


### `opinion.service.ts`
- Servicio injectable
- Guarda datos en la colección `opinions` de Firestore

![image](https://github.com/user-attachments/assets/72b8b010-d070-46f6-a19f-0d6052fb23b9)
![image](https://github.com/user-attachments/assets/054fbfd6-31a0-4bf9-b14e-7816098f3d96)


### `home.page.html`
- Input para buscar personajes
- Botón para buscar
- Card con datos del personaje
- Textarea para escribir opinión
- Botón para guardar opinión

![image](https://github.com/user-attachments/assets/cc70c463-d6e8-45cc-af59-c4e2f1f18f77)
![image](https://github.com/user-attachments/assets/5d762777-d998-4461-9886-56aba41f5928)

---

## 🌍 Vista Navegador

![image](https://github.com/user-attachments/assets/8bc34acb-bfea-4733-8b4f-281bd319f35a)

---

## 📱 Vista Móvil

![6f6e7b52-5e17-4092-8502-238dd4a9cb89](https://github.com/user-attachments/assets/8d40fd7a-4337-4933-afaf-76a1a9df9f66)

---

## 💥 Ejemplo visual

🧪 Buscar: `"Rick Sanchez"`  
📄 Resultado:  
- Especie: Humano  
- Estado: Vivo  
- Género: Masculino  
- Origen: Tierra (C-137)  
- Aparece en: 41 episodios  

✍️ Opinión: `"¡Uno de los mejores personajes de la serie!"`  
📤 ¡Opinión guardada en Firebase!

---

## 🔥 Almacenamiento en Firebase Cloud Firestore

![image](https://github.com/user-attachments/assets/8be94127-91be-4dfd-a34b-763c6df65775)

---

## 📌 Notas

- No se utiliza `ngModule`, todo está estructurado usando **Standalone Components**.
- No hay estilos customizados avanzados (puedes mejorar con CSS o Tailwind si deseas).
- El `alert()` es simple para cumplir la funcionalidad básica. Se puede reemplazar por `ion-alert` para una mejor experiencia visual.

---
## 🧑‍💻 Autor
Desarrollado por Richard Mauricio Soria Asanza

# Fingerprint Device Frontend

### <b>prerequisite</b>:

> Global States are managed by REDUX-TOOLKIT and TailwindCSS is used for the CSS styling, therefore, technical knowledge of redux and tailwindCSS frameworks/library, React.JS and TypeScript are prerequisite to collaborate on this project.

 <table>
    <tr>
      <th>Package Name</th>
      <th>Use In App</th>
    </tr>
    <tr>
      <td>@reduxjs/toolkit</td>
      <td>Store data management is done using Redux</td>
    </tr>
    <tr>
      <td>framer-motion</td>
      <td>Component and container animation effects</td>
    </tr>
    <tr>
      <td>tailwindcss</td>
      <td>CSS styling library</td>
    </tr>
    <tr>
      <td>react-helmet-async</td>
      <td>Meta tags and title attributes</td>
    </tr>    
    <tr>
      <td>chart.js react-chartjs-2</td>
      <td>Charts UI <a href="https://react-chartjs-2.js.org/examples/doughnut-chart">DOCUMENTATION</a></td>
    </tr>
  </table>

#### How to build a docker image from the source code and run the app

##### follow the data in the table below provided you are in the same directory as the Dockerfile

 <table>
    <tr>
      <th>Task</th>
      <th>Docker command</th>
    </tr>
    <!-- <tr>
      <td>Build a docker image manually without docker compose</td>
      <td>docker build -t fingerprint-project-app .</td>
    </tr> -->
    <!-- <tr>
      <td>Run the image locally manually</td>
      <td>docker run -p 3000:3000 fingerprint-project-app</td>
    </tr> -->
    <tr>
      <td>Build a docker image using docker compose</td>
      <td>docker-compose build</td>
    </tr>
    <tr>
      <td>Run the image locally</td>
      <td>docker run -d -p 80:80 --name fingerprint-project fingerprint-project:v1.1.0</td>
    </tr>
    <tr>
      <td>tag Docker image</td>
      <td>docker tag fingerprint-project:v1.1.0 adewaleda/fingerprint-project:v1.1.0</td>
    </tr>
    <tr>
      <td>push to remote repository</td>
      <td>docker push adewaleda/fingerprint-project:v1.1.0</td>
    </tr>
    <tr>
      <td>Pull image from DockerHub on server</td>
      <td>sudo docker pull adewaleda/fingerprint-project:v1.1.0</td>
    </tr>
    <tr>
      <td>stop current running docker image</td>
      <td>sudo docker stop *Container ID*</td>
    </tr>
    <tr>
      <td>initiate pulled docker image on server</td>
      <td>sudo docker run -d -p 8081:80 --name fingerprint-project-v1.1.0 *Image ID*</td>
    </tr>
    </table>

step 1:
run **npm install** (to install all the dependencies)
step 2:
run **npm start** (start application on port :3000)

> mime types documentation : <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">MIME TYPES</a>
